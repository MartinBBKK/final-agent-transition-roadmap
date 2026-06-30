export type HealthResponse = {
  status: "ok";
  service: string;
  model: string;
  targetRepoPath: string;
};

export type ChatRequest = {
  message: string;
};

export type ChatResponse = {
  answer: string;
  responseId: string;
  model: string;
  latencyMs: number;
};
