<template>
  <header class="w-100 p-fluid">
    <div :class="['outer-header',{ shadow: scrollValue > 0 }]">
      <div class="w-100 m-auto inner-header">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/cards">Cards</RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      scrollValue: 0,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollValue = window.scrollY;
    },
  },
});
</script>

<style lang="scss" scoped>
.m-auto {
  margin: auto;
}
.outer-header {

  padding-left: calc(100vw - 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.outer-header.shadow {
  box-shadow: 0px 1px 5px rgba(255, 255, 255, 0.2);
}

.inner-header {
  max-width: 1280px;
  padding: 0 2rem;
}

header {
  position: fixed;
  background-color: var(--color-background);
  line-height: 1.5;
  height: 60px;
  width: 100%;
  z-index: 1;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .inner-header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
  }
}
</style>