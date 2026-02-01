<template>
  <div class="matcha">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Note: Since these are arrays, they will currently 
      // display as a single long string of text.
      name: ['matcha', 'latte', 'cookies and cream'],
      message: ['I like matcha', 'I like latte', 'I like cookies and cream']
    }
  }
};
</script>

<style>
.matcha {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;
}
</style>