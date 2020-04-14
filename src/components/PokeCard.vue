<template>
  <div v-if="isMobile == false" class="poke-card">
    <PokeCardIdentity :pokeName="pokeInfo.name" :pokeSprite="pokeInfo.sprite" />
    <PokeCardStats :pokeStats="pokeInfo.stats.slice().reverse()" />
  </div>
  <div v-else class="poke-square">
    <PokeCardIdentity :pokeName="pokeInfo.name" :pokeSprite="pokeInfo.sprite" />
    <PokeCardStats :pokeStats="pokeInfo.stats.slice().reverse()" />
  </div>
</template>

<script>
import PokeCardIdentity from "./PokeCardIdentity.vue";
import PokeCardStats from "./PokeCardStats.vue";

export default {
  name: "PokeCard",
  components: {
    PokeCardIdentity,
    PokeCardStats
  },
  props: {
    pokeInfo: Object,
    isMobile: Boolean
  }
};
</script>

<style scoped>
.poke-card,
.poke-square {
  background: var(--c-surface);
  box-shadow: 0 4px 6px #33333322;
  display: flex;
  margin-bottom: 32px;
  border-radius: 8px;
}

.poke-card {
  width: var(--w-poke-card);
  height: 200px;
}

.poke-square {
  width: var(--w-poke-card);
  flex-direction: column;
  height: 400px;
}
</style>