<script setup>
import { ref } from 'vue'
import { Field, Divider } from 'vant'
import TextDisplay from './components/TextDisplay/index.vue'
const words = ref();
</script>

<template>
  <div class="layout">
    <div class="content">
      <TextDisplay :words="words" />
    </div>
    <div class="bottom">
      <Divider />
      <Field
        v-model="words"
        rows="4"
        autosize
        type="textarea"
        maxlength="100"
        placeholder="你好, 请在这里输入文字"
        show-word-limit
      />
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  flex: 1;
  overflow: auto;
  padding: 10px;
}
.bottom {
  height: 175px;
}
</style>
