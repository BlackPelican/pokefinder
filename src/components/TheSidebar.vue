<template>
  <div id="the-sidebar">
    <div class="wrap-param-stats">
      <ParamStat
        v-for="(stat, i) in stats"
        :key="i"
        :statLabel="stat.label"
        v-model="stat.value"
        @valueUpdated="valueUpdated"
      />
    </div>
    <span @click="resetStats" id="stat-reset">Reset</span>
  </div>
</template>

<script>
import ParamStat from "./ParamStat.vue";

export default {
  name: "TheSidebar",
  components: {
    ParamStat
  },
  data: function() {
    return {
      stats: [
        { label: "HP", value: "" },
        { label: "ATK", value: "" },
        { label: "DEF", value: "" },
        { label: "SPATK", value: "" },
        { label: "SPDEF", value: "" },
        { label: "SPE", value: "" }
      ]
    };
  },
  methods: {
    valueUpdated(value, label) {
      let o = this.stats.filter(obj => {
        return obj.label == label;
      });

      o.value = value;

      let arr = [];

      this.stats.forEach(stat => {
        arr.push(stat.value);
      });

      this.$emit("searchStatsUpdated", arr);
    },
    resetStats() {
      this.stats.forEach(stat => {
        stat.value = "";
      });
    }
  }
};
</script>

<style scoped>
#the-sidebar {
  width: 240px;
  background: var(--c-surface);
  box-shadow: 0 4px 6px #33333322;
  height: 280px;
  position: fixed;
  right: 0;
  top: 64px;
  border-radius: 0 0 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: top 200ms ease-in-out;
  flex-direction: column;
}

.wrap-param-stats {
  margin-bottom: 16px;
}

#stat-reset {
  text-decoration: underline;
  font-size: 14px;
  color: var(--c-on-dark);
  font-weight: 600;
  cursor: pointer;
  border-radius: 4px;
}

#stat-reset:hover {
  opacity: 0.7;
}
</style>