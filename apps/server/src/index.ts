import cors from "cors";
import { config } from "dotenv";
import express from "express";
import OpenAI from "openai";
import { resolve } from "node:path";
import { z } from "zod";

config({
  path: resolve(process.cwd(), "../../.env")
});

const envSchema = z.object({
  OPENAI_API_KEY: z.string().min(1).optional(),
  OPENAI_BASE_URL: z.string().min(1).optional(),
  PORT: z.coerce.number().default(3001),
  OPENAI_MODEL: z.string().default("gpt-5.4"),
  WEB_ORIGIN: z.string().default("http://localhost:5173"),
  TARGET_REPO_PATH: z.string().default("./fixtures/vue-project-sample")
});

const env = envSchema.parse(process.env);
const app = express();
const openai = env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: env.OPENAI_API_KEY, baseURL: env.OPENAI_BASE_URL })
  : null;

function toErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  return "Unknown error";
}

function toErrorStatus(error: unknown) {
  if (
    typeof error === "object" &&
    error !== null &&
    "status" in error &&
    typeof error.status === "number"
  ) {
    return error.status;
  }

  return 500;
}

const chatRequestSchema = z.object({
  message: z.string().trim().min(1, "message is required")
});

app.use(
  cors({
    origin: env.WEB_ORIGIN
  })
);
app.use(express.json());

app.get("/health", (_request, response) => {
  response.json({
    status: "ok",
    service: "frontend-repo-agent-server",
    model: env.OPENAI_MODEL,
    targetRepoPath: env.TARGET_REPO_PATH
  });
});

app.post("/api/chat", async (request, response) => {
  const startedAt = Date.now();
  const parsedBody = chatRequestSchema.safeParse(request.body);

  if (!parsedBody.success) {
    response.status(400).json({
      error: "invalid_request",
      message: parsedBody.error.issues[0]?.message ?? "Invalid request body"
    });
    return;
  }

  if (!openai) {
    response.status(500).json({
      error: "missing_openai_api_key",
      message: "OPENAI_API_KEY is required to call /api/chat."
    });
    return;
  }

  try {
    const result = await openai.responses.create({
      model: env.OPENAI_MODEL,
      instructions:
        "You are Frontend Repo Agent, an assistant that helps frontend engineers understand and maintain Vue codebases. Be concise, practical, and explicit about uncertainty.",
      input: parsedBody.data.message
    });

    response.json({
      answer: result.output_text,
      responseId: result.id,
      model: env.OPENAI_MODEL,
      latencyMs: Date.now() - startedAt
    });
  } catch (error) {
    console.error("[chat] OpenAI request failed", error);
    response.status(500).json({
      error: "chat_request_failed",
      message: toErrorMessage(error),
      upstreamStatus: toErrorStatus(error)
    });
  }
});

app.listen(env.PORT, () => {
  console.log(
    `[server] listening on http://localhost:${env.PORT} targeting ${env.TARGET_REPO_PATH}`
  );
});
