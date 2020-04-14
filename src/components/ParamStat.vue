<template>
  <div class="param-stat">
    <div class="stat">{{statLabel}}</div>
    <input type="text" placeholder="0" :value="value" @input="$emit('input', $event.target.value)" />
  </div>
</template>

<script>
export default {
  name: "ParamStat",
  props: {
    statLabel: String,
    value: {
      type: String,
      default: "0"
    }
  },
  watch: {
    value: function() {
      this.$emit("valueUpdated", this.value, this.statLabel);
    }
  }
};
</script>

<style scoped>
.param-stat {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 8px;
}

.stat {
  font-size: 14px;
}

input {
  margin-left: 18px;
  border-bottom: 1px solid var(--c-secondary);
  text-align: center;
  opacity: 0.5;

  padding: 0 4px;
  font-size: 16px;
  width: 32px;
  height: 24px;
  color: var(--c-on-dark);
  font-weight: 600;
  letter-spacing: 0.02em;
}

input:focus {
  opacity: 1;
}

::placeholder {
  font-weight: 400;
  font-size: 14px;
}
</style>