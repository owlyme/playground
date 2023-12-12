<template>
  <div class="hello"> 
    hello {{ name }}
    {{counter.count}}

    <div>
      <button @click="plus">++</button>
    </div>
  </div>  
</template> 

<script setup>
import { reactive, defineProps } from 'vue'
defineProps({
  name: String,
})
const counter = reactive({
  count: 0
})

const plus = () => {
  counter.count++
}


</script>

