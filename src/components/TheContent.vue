<template>
  <main v-if="pokes" id="the-content">
    <PokeCard v-for="(poke, i) in pokesFiltered" :key="i" :poke="poke" :isMobile="isMobile" />
  </main>
  <main id="wrap-loader" v-else>
    <img id="loader" src="img/loader.svg" />
  </main>
</template>

<script>
import PokeCard from "./PokeCard.vue";
import { baseStats } from "../base-stats.js";

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
    statsMatch(stats) {
      let match = true;

      for (let i = 0; i < stats.length; i++) {
        if (stats[i] < parseInt(this.searchStats[i])) {
          match = false;
        }
      }

      return match;
    },
    getSpecialNameLink(name) {
      return name == "nidoran♂"
        ? `https://projectpokemon.org/images/normal-sprite/nidoran_m.gif`
        : name == "nidoran♀"
        ? `https://projectpokemon.org/images/normal-sprite/nidoran_f.gif`
        : name == "mr. mime"
        ? `https://projectpokemon.org/images/normal-sprite/mr.mime.gif`
        : name == "farfetch'd"
        ? `https://projectpokemon.org/images/normal-sprite/farfetchd.gif`
        : name == "pikachu"
        ? `https://projectpokemon.org/images/normal-sprite/pikachu-kantocap.gif`
        : `https://projectpokemon.org/images/shiny-sprite/gengar-mega.gif`;
    }
  },
  asyncComputed: {
    async pokes() {
      const pokes = [];

      const response = await fetch(
        `https://raw.githubusercontent.com/sindresorhus/pokemon/master/data/en.json`
      );

      const pokeNames = await response.json();

      const specialNames = [
        "farfetch’d",
        "mr. mime",
        "nidoran♀",
        "nidoran♂",
        "pikachu"
      ];

      for (let i = 0; i < 251; i++) {
        let pokeName = pokeNames[i].toLowerCase();
        pokes.push({
          name: pokeName,
          stats: baseStats[i].base,
          sprite:
            specialNames.includes(pokeName) == false
              ? `https://projectpokemon.org/images/normal-sprite/${pokeName}.gif`
              : this.getSpecialNameLink(pokeName)
        });
      }

      return pokes;
    }
  },
  computed: {
    pokesFiltered() {
      if (this.pokes) {
        return this.pokes.filter(poke => {
          return poke.name.includes(this.search) && this.statsMatch(poke.stats);
        });
      } else {
        return [];
      }
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