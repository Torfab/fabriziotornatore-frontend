<template>
  <header class="w-100 p-fluid">
    <Sidebar v-model:visible="visibleLeft" class="p-sidebar-sm">
      <div class="sidebar-link">
        <RouterLink to="/" @click="visibleLeft = false">Home</RouterLink>
      </div>
    </Sidebar>
    <div :class="['outer-header', { shadow: scrollValue > 0 }]">
      <div class="w-100 m-auto inner-header">
        <SimpleButton
          @click="visibleLeft = true"
          class="ml-2 nav-button mr-auto"
          icon="bars"
        ></SimpleButton>
        <a href="/" class="favicon-header">
          <img class="favicon-header-img" src="/favicon.svg"/>
        </a>
        <nav class="nav-bar">
          <RouterLink to="/">Home</RouterLink>
        </nav>

        <ThemeHandler class="ml-auto theme-handler-button"></ThemeHandler>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ThemeHandler from "@/Utility/ThemeHandler.vue";
import Sidebar from "primevue/sidebar";
import SimpleButton from "@/components/SimpleButton.vue";

export default defineComponent({
  components: {
    ThemeHandler,
    Sidebar,
    SimpleButton,
  },
  data() {
    return {
      scrollValue: 0,
      visibleLeft: false,
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

.favicon-header{
  height: calc(var(--height-header) - 10px);
  margin-top: auto;
  margin-bottom: auto;
}

.favicon-header-img{
  height: 100%;
}
.m-auto {
  margin: auto;
}
.outer-header {
  padding-left: calc(100vw - 100%);
  border-bottom: 1px solid var(--border-color);
  height: 100%;
}

.outer-header.shadow {
  box-shadow: 0px 1px 5px var(--border-color);
}

.inner-header {
  display: flex;
  max-width: 1240px;
  height: 100%;
}

header {
  position: fixed;
  background-color: var(--color-background);
  line-height: 1.5;
  height: var(--height-header);
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
  border-left: 1px solid var(--border-color);
}

nav a:first-of-type {
  border: 0;
}

.nav-bar {
  display: none;
}
.nav-button {
  display: block;
  margin-right: auto;
}
.theme-handler-button {
  margin-top: auto;
  margin-bottom: auto;
}

@media (min-width: 1024px) {

  .favicon-header {
    margin-right: 2rem;
  }

  .nav-button {
    display: none
  }

  .nav-bar {
    display: block
  }
  .theme-handler-button {
    margin-right: 1rem;
  }
  .inner-header {
    place-items: center;
    padding: 0 2rem;
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

.sidebar-link {
  text-align: center;
}
</style>