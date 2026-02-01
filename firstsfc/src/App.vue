<template>
  <h1>{{ message }}</h1>
  <personal-profile />
  <food-item />
  <food-item2 />
</template>

<script>
export default {
  data() {
    return {
      message: 'Welcome to my Portfolio'
    };
  }
};
</script>