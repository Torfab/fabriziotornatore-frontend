<template>
  <div style="font-size:40px; ">
    {{timeHours}}:{{timeMinute}}:<span style="color: #00ff00">{{timeSecond}}</span>
  </div>
</template>


<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  data(){
    return{
      timeSecond:'' as any,
      timeHours: '' as any,
      timeMinute: '' as any
    }
  },
  mounted() { 
    var timeInterval = setInterval(this.updateTime, 1000);
  },
  methods: {
    updateTime: function() {
      this.timeSecond = new Date().getSeconds()
      this.timeMinute = new Date().getMinutes()
      this.timeHours = new Date().getHours()
    }
  }
})
</script>