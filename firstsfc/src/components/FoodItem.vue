<template>
  <div>
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      name: 'matcha','latte','cookies and cream'
      message: 'I like matcha','I like latte', 'I like cookies and cream'
    }
  }
};
</script>
 
<style></style>