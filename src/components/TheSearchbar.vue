<template>
  <input id="the-searchbar" type="text" placeholder="Search Pokémon..." v-model="search" />
</template>

<script>
export default {
  name: "TheSearchbar",
  data: function() {
    return {
      search: ""
    };
  },
  watch: {
    search: function() {
      this.$emit("searchUpdated", this.search);
    }
  }
};
</script>

<style scoped>
#the-searchbar {
  position: absolute;
  left: 32px;
  height: 32px;
  width: 200px;
  font-size: 14px;
  padding: 0 8px;
  color: var(--c-on-dark);
}
</style>