<template>
  <div v-html="renderedMd">
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  props: {
    raw: {
      type: String,
      required: true
    }
  },
  methods: {
    renderRawMD(raw: string){
      let totalRender=""
      let count=1
      raw.split("\r\n\r\n").forEach((row: string)=> {
        totalRender+=count+this.renderLine(row)
        count++
        }
      )
      return totalRender
    },
    renderLine(line: string){
      const regex = /^(?<!\\)(#+)/gm;
      let match;

      if((regex.exec(line)) !== null) {
        return this.heading(line)
      }
      return line
    },
    heading(line: string) {
      let count=0;
      let lineSplitted=line.split(" ")
      let heading=lineSplitted[0].length
      lineSplitted.shift()
      return `<h${heading}>${lineSplitted.join(" ")}</h${heading}>`
    }
  },
  computed: {
    renderedMd(){
      return this.renderRawMD(this.raw)
    }
  }
})
</script>