<script setup>
import { computed } from 'vue'

const props = defineProps({
  word: {
    type: String,
    required: true,
    default: 0
  },
  redIndex: {
    type: Number,
    required: true,
    default: 0
  }
})

const bg = computed(() => {
  return {
    backgroundImage: `url(/pngs/${encodeURIComponent(props.word).replace(/%/g, '-')}.png)`,
    backgroundPosition: `3px -${83 * props.redIndex}px`,
    backgroundSize: 'cover'
  }
})
</script>

<template>
  <div class="word-path">
    <div class="pic" :style="bg"></div>
  </div>
</template>
<!-- -->
<style scoped>
.word-path {
  width: 83px;
  height: 86px;
  background-image: url(/pic/tianzige.jpg);
  background-size: 100% 100%;
  margin-right: 3px;
  border-radius: 5px;
  border: 1px solid #b8b8b8;
}
.pic {
  width: 83px;
  height: 83px;
}
</style>
