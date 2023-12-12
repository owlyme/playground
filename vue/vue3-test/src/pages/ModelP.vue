<template>
  <div>
    <div>outer: {{ inputValue }}</div>
    <Input
      v-model="inputValue"
    />
  </div>
</template>

<script setup>
import Input from "../components/Input";
import { ref } from "vue";

const inputValue = ref("");
</script>