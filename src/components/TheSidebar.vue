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
    }
  },
  created() {
    let prevPos = window.pageYOffset;

    window.onscroll = () => {
      let currPos = window.pageYOffset;

      if (prevPos > currPos) {
        document.querySelector("#the-nav").style.top = "0";
        document.querySelector("#the-sidebar").style.top = "64px";
      } else {
        document.querySelector("#the-nav").style.top = "-64px";
        document.querySelector("#the-sidebar").style.top = "-240px";
      }
      prevPos = currPos;
    };
  }
};
</script>

<style scoped>
#the-sidebar {
  width: 240px;
  background: var(--c-surface);
  box-shadow: 0 4px 6px #33333322;
  height: 240px;
  position: fixed;
  right: 0;
  top: 64px;
  border-radius: 0 0 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: top 200ms ease-in-out;
}
</style>