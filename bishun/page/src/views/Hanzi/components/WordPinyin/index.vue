<script setup>
import { computed } from 'vue'
const props = defineProps({
  pinyin: {
    type: String,
    required: true,
    default: () => ''
  }
})

const pingyinList = computed(() => props.pinyin.split(' ')) 
</script>

<template>
  <div class="word-pinyin">
    <div> 拼音 {{ pingyinList.length > 1 ? " (多音字)" : "" }}</div>
    <div>
      <span
      class="sanxiange"
       v-for="(item, index) in pingyinList" :key="index">
      {{ item }}
    </span>
    <!-- {{ pingyinList.join(' ') }} -->
    </div>
   
  </div>
</template>
<!-- -->
<style scoped>
.word-pinyin {
  /* display: flex;
  align-items: center; */
  font-size: 18px;
  font-weight: bold;
}
span.sanxiange {
  position: relative;
  display: inline-block;
  margin-right: 5px;
  height: 40px;
  line-height: 40px;
  /* border: 1px solid #f1f1f1; */
  /* text-align: center; */
}

</style>
