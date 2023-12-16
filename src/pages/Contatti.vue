<script >
  import {state} from '../state.js'


  export default {

    data(){
        return{     
            state,
         //center: {lat: 51.093048, lng: 6.842120},
            
        }
    },
    created(){
      this.state.actvPage = 4;
    }
    
  }
</script>

<template>
  <div class="contatti">

    <div class="cont">

      <h1>I nostri Contatti</h1>
      <div class="cnt-container">
  
        <div class="contact">
          <div class="cnt-name">email</div>
          <div class="cnt">pizzeria@gmail.com</div>
        </div>    
        <div class="contact">
          <div class="cnt-name">telefono</div>
          <a href="tel:+393334422266" class="cnt">+39 3334422266</a>
        </div>    
      </div>
  
      <div class="map">
        <h1>Dove trovarci</h1>
  
      
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/general.scss' as *;




</style>
