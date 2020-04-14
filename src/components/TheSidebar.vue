<template>
  <div id="the-sidebar"></div>
</template>

<script>
export default {
  name: "TheSidebar"
};
</script>

<style scoped>
#the-sidebar {
  width: 320px;
  background: var(--c-surface);
  box-shadow: 0 4px 6px #33333333;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
}
</style>