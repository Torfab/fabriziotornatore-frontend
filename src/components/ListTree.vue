<template>
  <ul v-if="tree.length>0">
    <template v-for="element in tree" :key="element.name">
      <li >
        <RouterLink :to="'../'+element.name">{{ element.title }}
        </RouterLink>
        </li>
      <ListTree :tree="element.subLink"></ListTree>
    </template>
  </ul>
</template>

<script lang="ts">
import type { ArticleRoute } from '@/Utility/typings';
import { defineComponent } from 'vue'

export default defineComponent({
  name: "ListTree",
  props: {
    tree: {
      required: true,
      type: Array as ()=> Array<ArticleRoute>
    }
  },
})
</script>