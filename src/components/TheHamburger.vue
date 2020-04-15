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
  height: var(--w-icons);
  position: absolute;
  right: 32px;
  transition: transform 200ms ease-in-out;
  cursor: pointer;
}

@media screen and (max-width: 420px) {
  #the-hamburger {
    right: 16px;
  }
}
</style>