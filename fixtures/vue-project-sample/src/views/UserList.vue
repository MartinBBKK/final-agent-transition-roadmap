<script setup lang="ts">
import { ref } from "vue";

type User = {
  id: number;
  name: string;
  role: string;
};

const users = ref<User[]>([
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "editor" },
  { id: 3, name: "Carol", role: "viewer" }
]);
</script>

<template>
  <section>
    <h1>User List</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.role }}
      </li>
    </ul>
  </section>
</template>

