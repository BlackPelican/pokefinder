<template>
  <nav id="the-nav">
    <TheSearchbar @searchUpdated="searchUpdated" v-if="showSearchbar" />
    <img
      id="icon-search"
      v-else
      src="img/search.svg"
      alt="Search"
      @click="showSearchbarMobile = !showSearchbarMobile"
      :class="{tilted: showSearchbarMobile}"
    />
    <h1 v-if="!showSearchbarMobile">PokéFinder</h1>
    <TheHamburger @click.native="showSidebar" :class="{tiltedham: showSidebarB}" />
    <TheSearchbarMobile @searchUpdated="searchUpdated" v-if="showSearchbarMobile" />
  </nav>
</template>

<script>
import TheSearchbar from "./TheSearchbar.vue";
import TheSearchbarMobile from "./TheSearchbarMobile.vue";
import TheHamburger from "./TheHamburger.vue";

export default {
  name: "TheNav",
  components: {
    TheSearchbar,
    TheHamburger,
    TheSearchbarMobile
  },
  data: function() {
    return {
      showSearchbarMobile: false,
      showSidebarB: false
    };
  },
  methods: {
    searchUpdated(search) {
      this.$emit("searchUpdated", search);
    },
    showSidebar() {
      this.showSidebarB = !this.showSidebarB;
      this.$emit("showSidebar");
    }
  },
  computed: {
    showSearchbar() {
      return window.innerWidth > 800;
    }
  }
};
</script>

<style scoped>
#the-nav {
  width: 100%;
  height: 64px;
  background: var(--c-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  box-shadow: 0 4px 6px #33333322;
  transition: top 200ms ease-in-out;
  z-index: 1;
}

h1 {
  font-size: 34px;
  color: var(--c-on-dark);
}

#icon-search {
  height: var(--w-icons);
  position: absolute;
  left: 32px;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
}

#icon-search:active {
  transform: scale(0.95);
}

.tilted {
  transform: rotate(45deg);
}

.tiltedham {
  transform: rotate(90deg);
}

@media screen and (max-width: 420px) {
  #icon-search {
    left: 16px;
  }
}
</style>