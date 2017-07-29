<template>
<div class="app">
  <app-header> </app-header>
  <router-view></router-view>
</div>  
</template>

<script>
import Header from './components/Header';

export default {
  name: 'app',
  components: {
    'app-header': Header,
  },
};
</script>

<style scoped>
.app {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto;
}
</style>
