<template>
  <div class="poke-card-stats">
    <div class="stat__names">
      <span>HP</span>
      <span>ATK</span>
      <span>DEF</span>
      <span>SPATK</span>
      <span>SPDEF</span>
      <span>SPE</span>
    </div>
    <div class="stat__bars">
      <div v-for="(stat, i) in pokeStats" :key="i">
        <span class="value">{{stat["base_stat"]}}</span>
        <span
          class="bar"
          :style="{width: `${stat['base_stat']}px`, background: stat['base_stat'] >= 130 ? '#25ced1dd' : stat['base_stat'] >= 100 ? '#6bf178dd' : stat['base_stat'] >= 80 ? '#ffe74cdd' : stat['base_stat'] >= 60 ? '#f0a202dd' : '#ef5350dd'}"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokeCardStats",
  props: {
    pokeStats: Array
  }
};
</script>

<style scoped>
.poke-card-stats {
  width: var(--w-poke-card-stats);
  height: 100%;
  padding: 32px;
  display: flex;
  color: var(--c-on-dark);
}

.poke-square .poke-card-stats {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 200px;
}

.stat__names,
.stat__bars {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.stat__names {
  align-items: flex-end;
  margin-right: 24px;
  font-size: 14px;
}

.stat__bars div {
  display: flex;
  align-items: center;
}

.value {
  margin-right: 16px;
  width: 16px;
  font-size: 16px;
  font-weight: 600;
}

.bar {
  padding-left: 16px;
  height: 16px;
  border-radius: 4px;
}
</style>