<script setup lang="ts">
const milestones = [
  "Week 0: workspace and sample repo ready",
  "Week 1: connect Responses API with non-stream chat",
  "Week 2: add streaming and cancel support"
];
</script>

<template>
  <main class="app-shell">
    <section class="hero">
      <p class="eyebrow">Frontend Repo Agent</p>
      <h1>前端代码库智能维护 Agent</h1>
      <p class="lead">
        当前阶段先完成第 0 周骨架，确保前后端工作区、样例仓库和文档结构可继续扩展。
      </p>
    </section>

    <section class="panel">
      <h2>Current Milestones</h2>
      <ul>
        <li v-for="item in milestones" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="panel">
      <h2>Next Step</h2>
      <p>实现 `/api/chat`，接通 OpenAI Responses API，并记录 response id、model 和 latency。</p>
    </section>
  </main>
</template>

