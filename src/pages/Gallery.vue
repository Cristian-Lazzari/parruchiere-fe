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
  
        <a href="https://www.google.com/maps/place/Pizzeria+Il+Capriccio+di+Leo/@43.5948219,13.2980245,17z/data=!3m1!4b1!4m6!3m5!1s0x132d9dbad592a331:0x349d7e3dd6b01160!8m2!3d43.5948219!4d13.3005994!16s%2Fg%2F11dxlc9msx?entry=ttu">
          <img src="../assets/img/googlemaps.png"  alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/general.scss' as *;




</style>
