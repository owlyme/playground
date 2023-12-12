<template>
  <div>
    <div>outer-inner: {{ props.value }}</div>
    <div>inner: {{ text }}</div>
    <input
      type="text"
      @input="
        (e) => {
          text = e.target.value;
          console.log(text);
          emit('update:modelValue', text)
        }
      "
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
    // value: String,
    modelValue: String
});

const emit = defineEmits(["update:modelValue"]);

const text = ref();
</script>