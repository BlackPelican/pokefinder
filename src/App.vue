<template>
  <div id="app">
    <TheNav @searchUpdated="searchUpdated" @showSidebar="showSidebar = !showSidebar" />
    <TheContent :search="search" :searchStats="searchStats" />
    <TheSidebar @searchStatsUpdated="searchStatsUpdated" v-if="showSidebar" />
  </div>
</template>

<script>
import TheNav from "./components/TheNav.vue";
import TheContent from "./components/TheContent.vue";
import TheSidebar from "./components/TheSidebar.vue";

export default {
  name: "App",
  components: {
    TheNav,
    TheContent,
    TheSidebar
  },
  data: function() {
    return {
      search: "",
      searchStats: [0, 0, 0, 0, 0, 0],
      showSidebar: false
    };
  },
  methods: {
    searchUpdated(search) {
      this.search = search;
    },
    searchStatsUpdated(searchStats) {
      this.searchStats = searchStats;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  position: relative;
  width: 100%;
  font-family: "Source Sans Pro";
}

html {
  --c-primary: #ef5350;
  --c-primary-variant: #ef9a9a;
  --c-secondary: #242424;
  --c-secondary-variant: #656565;
  --c-background: #f0f0f0;
  --c-surface: #ffffff;
  --c-on-dark: #333333ee;
  --c-on-light: #ffffff;
  --w-poke-card: 560px;
  --w-poke-card-identity: 200px;
  --w-poke-card-stats: 360px;
}

input {
  font-family: "Source Sans Pro";
  border: 0;
}

input:focus {
  outline: none;
}

ul {
  list-style: none;
}

li {
  text-decoration: none;
}

@media screen and (max-width: 720px) {
  html {
    --w-poke-card: 480px;
    --w-poke-card-stats: 280px;
  }
}

@media screen and (max-width: 600px) {
  html {
  }
}

@media screen and (max-width: 420px) {
  html {
    --w-poke-card: 320px;
    --w-poke-card-identity: 160px;
  }
}

@media screen and (max-width: 340px) {
  html {
    --w-poke-card: 240px;
  }
}
</style>
