<scriptc lang="ts">
    import {ref} from "vue"
   
    export default {
        setup() {
            const HelloWorld = ref("helle world")
        }
    }
</script>

<template>
    <div>{{ HelloWorld }}</div>
</template>