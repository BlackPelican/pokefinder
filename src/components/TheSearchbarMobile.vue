<template>
  <input id="the-searchbar-mobile" type="text" placeholder="Search Pokémon..." v-model="search" />
</template>

<script>
export default {
  name: "TheSearchbarMobile",
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
#the-searchbar-mobile {
  height: 32px;
  width: 240px;
  font-size: 14px;
  padding: 0 8px;
}

@media screen and (max-width: 400px) {
  #the-searchbar-mobile {
    width: 160px;
  }
}
</style>