<template>
  <div>
    {{ book.name }}
  </div>
</template>

<script>
export default {
  name: 'book',
  data() {
    return {
      book: { name: 'Название книги' },
    };
  },
};
</script>

<style scoped>
</style>
