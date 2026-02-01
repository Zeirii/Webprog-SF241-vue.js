<template>
  <div class="sushi">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ['sushi', 'ramen', 'onigiri'],
      message: ['I like sushi ramen and onigiri']
    }
  }
};
</script>

<style>
.sushi {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: rgb(238, 144, 144);
}
</style>