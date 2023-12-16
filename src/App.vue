<script >
  
  import AppHeader from './components/AppHeader.vue'


  export default {
  components:{  AppHeader }
  }
</script>

<template>

  <div class="container">
    <AppHeader />
    <router-view class="page"></router-view>
  </div>
 

  
</template>

<style lang="scss">
@use './assets/styles/general.scss' as *;
.page{
  height: calc(100vh - 150px);
  overflow: auto;
  
}
.container{
  height: 100vh;
  overflow: hidden;
}
</style>
