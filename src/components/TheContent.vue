<template>
  <main v-if="pokes" id="the-content">
    <PokeCard
      v-for="(pokeInfo, i) in pokesFilteredInfo"
      :key="i"
      :pokeInfo="pokeInfo"
      :isMobile="isMobile"
    />
  </main>
  <main id="wrap-loader" v-else>
    <img id="loader" src="img/loader.svg" />
  </main>
</template>

<script>
import PokeCard from "./PokeCard.vue";

export default {
  name: "TheContent",
  props: {
    search: String,
    searchStats: Array
  },
  components: {
    PokeCard
  },
  methods: {
    statsMatch(poke) {
      let match = true;
      let arr = this.searchStats.slice().reverse();

      for (let i = 0; i < 6; i++) {
        if (poke.stats[i]["base_stat"] < parseInt(arr[i])) {
          match = false;
        }
      }

      return match;
    }
  },
  asyncComputed: {
    async pokes() {
      const arr = [];

      let result, json;

      for (let i = 1; i <= 151; i++) {
        result = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);

        json = await result.json();
        const jsonString = JSON.stringify(json);
        const jsonObj = JSON.parse(jsonString);

        arr.push(jsonObj);
      }

      return arr;
    }
  },
  computed: {
    pokesFiltered() {
      if (this.pokes) {
        return this.pokes.filter(poke => {
          return poke.name.includes(this.search) && this.statsMatch(poke);
        });
      } else {
        return [];
      }
    },
    pokesFilteredInfo() {
      return this.pokesFiltered.map(poke => {
        return {
          name: poke.name,
          stats: poke.stats,
          sprite: poke.sprites["front_default"]
        };
      });
    },
    isMobile() {
      return window.innerWidth < 480;
    }
  }
};
</script>

<style scoped>
#the-content,
#wrap-loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px 0;
  background: var(--c-background);
  min-height: 100vh;
}

#the-content {
  justify-content: flex-start;
}

#wrap-loader {
  justify-content: center;
}

#loader {
  animation: spin 1000ms infinite linear;
  height: 64px;
  width: 64px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>