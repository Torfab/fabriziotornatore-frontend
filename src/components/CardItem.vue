<template>
  <div> {{title}} {{image}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
  },
  props: {
    title:{
      required: true,
      type: String
    },
    image:{
      required: true,
      type: String
    }
  },
  data(){
    return {
    }
  }
})
</script>

<style lang="scss" scoped>

</style>