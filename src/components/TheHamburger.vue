<template>
  <img id="the-hamburger" src="img/filter.svg" />
</template>

<script>
export default {
  name: "TheHamburger"
};
</script>

<style scoped>
#the-hamburger {
  height: 32px;
  position: absolute;
  right: 32px;
  cursor: pointer;
}

@media screen and (max-width: 420px) {
  #the-hamburger {
    right: 16px;
  }
}
</style>