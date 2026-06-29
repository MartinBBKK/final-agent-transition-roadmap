import express from "express";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(3001),
  OPENAI_MODEL: z.string().default("gpt-4.1-mini"),
  TARGET_REPO_PATH: z.string().default("./fixtures/vue-project-sample")
});

const env = envSchema.parse(process.env);
const app = express();

app.use(express.json());

app.get("/health", (_request, response) => {
  response.json({
    status: "ok",
    service: "frontend-repo-agent-server",
    model: env.OPENAI_MODEL,
    targetRepoPath: env.TARGET_REPO_PATH
  });
});

app.listen(env.PORT, () => {
  console.log(
    `[server] listening on http://localhost:${env.PORT} targeting ${env.TARGET_REPO_PATH}`
  );
});

