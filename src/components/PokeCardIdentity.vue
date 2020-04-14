<template>
  <div class="poke-card-identity">
    <div class="poke-card-image">
      <img loading="lazy" :src="pokeSprite" alt="Sprite" />
    </div>
    <div class="poke-card-name">{{pokeName}}</div>
  </div>
</template>

<script>
export default {
  name: "PokeCardIdentity",
  props: {
    pokeName: String,
    pokeSprite: String
  }
};
</script>

<style>
.poke-card-identity {
  height: 200px;
  width: var(--w-poke-card-identity);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  justify-content: space-between;
}

.poke-square .poke-card-identity {
  width: 100%;
}

.poke-card-image {
  border-radius: 50%;
  background: var(--c-background);
  box-shadow: inset 0 4px 6px #33333311;
  height: 136px;
  width: 136px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.poke-card-image img {
  max-height: 70%;
  max-width: 70%;
}

.poke-card-name {
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--c-on-dark);
}
</style>