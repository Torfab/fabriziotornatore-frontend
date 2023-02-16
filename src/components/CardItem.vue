<template>
  <div>
    <div :class="['cardTF', disabled?'disabled':'active']">
      <div class="cardTFTitle">{{ title }}</div>
      <i :class="['p-5 pi icon-size cardTFIcon', image]"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  components: {},
  props: {
    title: {
      required: true,
      type: String,
    },
    image: {
      required: true,
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.cardTF {
  border: 1px solid var(--border-color);
  margin: 3px;
  border-radius: 10px;
  text-align: center;
  font-size: 40px;
}
.active{
  &:hover{
    border: 1px solid var(--link-color);
    cursor: pointer;
    color: var(--link-color);
    .cardTFIcon {
      color: var(--secondary-link-color);
      transition: transform .5s;
      transform: rotate(15deg);
    }
  }
}
.icon-size {
  font-size: 5rem; 
}

.disabled {
  cursor: default;
  opacity: 0.5;
  filter: blur(1px);

}
</style>