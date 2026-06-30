<script setup lang="ts">
import { ref } from "vue";
import type { ChatRequest, ChatResponse } from "@frontend-repo-agent/shared";

type ChatMessage = {
  id: number;
  role: "user" | "assistant";
  content: string;
  meta?: string;
};

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3001";
const draft = ref("请解释 fixtures/vue-project-sample/src/views/UserList.vue 的职责。");
const isLoading = ref(false);
const errorMessage = ref("");
const messages = ref<ChatMessage[]>([]);

async function sendMessage() {
  const message = draft.value.trim();

  if (!message || isLoading.value) {
    return;
  }

  errorMessage.value = "";
  isLoading.value = true;
  messages.value.push({
    id: Date.now(),
    role: "user",
    content: message
  });
  draft.value = "";

  try {
    const requestBody: ChatRequest = { message };
    const response = await fetch(`${apiBaseUrl}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = (await response.json()) as ChatResponse;
    messages.value.push({
      id: Date.now() + 1,
      role: "assistant",
      content: data.answer,
      meta: `${data.model} · ${data.latencyMs}ms · ${data.responseId}`
    });
  } catch (error) {
    errorMessage.value =
      error instanceof Error ? error.message : "Failed to send message.";
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <main class="app-shell" @submit.prevent>
    <aside class="sidebar">
      <p class="eyebrow">Frontend Repo Agent</p>
      <h1>代码库问答</h1>
      <p class="summary">
        第 1 周目标：先打通非流式聊天链路，后续再加入 streaming、tool calling 和 RAG。
      </p>
      <dl class="status-list">
        <div>
          <dt>API</dt>
          <dd>{{ apiBaseUrl }}</dd>
        </div>
        <div>
          <dt>Mode</dt>
          <dd>Non-stream chat</dd>
        </div>
      </dl>
    </aside>

    <section class="chat-panel">
      <div class="messages" aria-live="polite">
        <p v-if="messages.length === 0" class="empty-state">
          输入一个关于 Vue 代码库的问题，后端会通过 Responses API 返回完整回答。
        </p>

        <article
          v-for="message in messages"
          :key="message.id"
          class="message"
          :class="`message-${message.role}`"
        >
          <span class="message-role">{{ message.role }}</span>
          <p>{{ message.content }}</p>
          <small v-if="message.meta">{{ message.meta }}</small>
        </article>
      </div>

      <form class="composer" @submit.prevent="sendMessage">
        <textarea
          v-model="draft"
          :disabled="isLoading"
          rows="4"
          placeholder="Ask about the sample Vue project..."
        />
        <div class="composer-actions">
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
          <button type="submit" :disabled="isLoading || !draft.trim()">
            {{ isLoading ? "发送中..." : "发送" }}
          </button>
        </div>
      </form>
    </section>
  </main>
</template>
