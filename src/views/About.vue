<template>
  <div>
    <h3>Version 1.0.0</h3>
    <router-link to="/">Go Back</router-link>
  </div>
</template>

<script>
export default {
  name: 'About',
  inheritAttrs: false, // disable 'non-props' warning
};
</script>

<style scoped>

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    animation: fadeIn 1s;
  }

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
