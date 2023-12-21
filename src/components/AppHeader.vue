
<script >
  import {state} from '../state.js';

 export default{
  data(){
    return{
      state,
    }
  },
  
 }
</script>


<template>
  <header>
    <router-link :to="{ name: 'home' }"  class="link" :class=" state.sideMenuValue ? 'nav-off' : '' ">
    
      <img src="../assets/img/logobarbiere1.png" alt="" class="logo">
    </router-link>
    <nav class="fs-s" :class=" state.sideMenuValue ? 'nav-off' : '' ">
      <router-link :to="{ name: 'home' }"  class="link">HOME</router-link>
      <router-link :to="{ name: 'gallery' }"  class="link">I NOSTRI TAGLI</router-link>
      <router-link :to="{ name: 'prenotaServizio' }"  class="link">PRENOTA</router-link>
      <router-link :to="{ name: 'contatti' }"  class="link">CONTATTI</router-link>
    </nav>
    <svg class="burger" width="92" height="75" viewBox="0 0 92 75" fill="none" xmlns="http://www.w3.org/2000/svg" @click="state.openside" >
      <g filter="url(#filter0_d_92_200)">
        <rect x="6" y="6" width="72" height="6.68041" rx="3.34021" fill="#8D7B50"/>
        <rect x="6" y="7.48453" width="72" height="6.68041" rx="3.34021" fill="#BEA361"/>
        <rect x="6" y="52.0206" width="72" height="6.68041" rx="3.34021" fill="#8D7B50"/>
        <rect x="6" y="53.5052" width="72" height="6.68041" rx="3.34021" fill="#BEA361"/>
        <rect x="6" y="29.0103" width="72" height="6.68041" rx="3.34021" fill="#8D7B50"/>
        <rect x="6" y="30.4948" width="72" height="6.68041" rx="3.34021" fill="#BEA361"/>
      </g>
      <defs>
        <filter id="filter0_d_92_200" x="0" y="0" width="92" height="74.1856" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="4" dy="4"/>
          <feGaussianBlur stdDeviation="5"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_92_200"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_92_200" result="shape"/>
        </filter>
      </defs>
    </svg>

    <div :class=" state.sideMenuValue ? 'mobile-menu-on' : 'mobile-menu-off' ">
      <div :class=" state.sideMenuValue ? 'nav-link-on' : 'nav-link-off' ">
        <div  @click="state.openside">
          <router-link :to="{ name: 'home' }" class="link" >HOME</router-link>
        </div>
          
        <div @click="state.openside">
          <router-link :to="{ name: 'gallery' }" class="link" >I NOSTRI TAGLI</router-link>
        </div>
          
        <div @click="state.openside">
          <router-link :to="{ name: 'prenotaServizio' }" class="link" >PRENOTA</router-link>
        </div>
          
        <div @click="state.openside">
          <router-link :to="{ name: 'contatti' }" class="link" >CONTATTI</router-link>
        </div>
          
        
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;
header{
  @include dfc;
  justify-content: space-between;
  background-image: url('../assets/img/header.png');
  height: 150px;
  padding: 20px;
  border-bottom: 4px solid rgba(215, 217, 220, 0.53);
  position: relative;
  z-index: 2;
  .logo{
    height: 100%;
  }
  nav{
    @include dfc;
    justify-content: space-between;
    width: 60%;
    .link{
      color: white;
      text-shadow:8px 8px 20px rgba(0, 0, 0);
      font-family: Averia Serif Libre;
    }
  }
  .burger{
    display: none;
  }
  .mobile-menu-off{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    transition: all .2s linear;
  }
  .mobile-menu-on{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 3;
    background-color: black;
    width: 100%;
    transition: all .3s linear;
    display: flex;
    flex-direction: column;
  }

  .nav-link-on{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    gap: 3rem;
  }
  .nav-link-off{
    display: none;
  }
}
.nav-off{
  display: none !important; 
}

.link{
      color: white;
      text-shadow:8px 8px 20px rgba(0, 0, 0);
      font-family: Averia Serif Libre;
    }

@media (max-width:1050px) {
  
  nav{
    
    .link{
      
      font-size: 20px;
    }
  }
  
}

@media (max-width:950px) {
  .logo{
    height: auto;
    width: 170px;
  }
  nav{
    display: none;
    .link{
      
      display: none;
    }
  }
  .burger{
    display: block!important;
    position: fixed;
    right: 0;
    z-index: 5;
    width: 50px !important;
    height: 50px !important;
  }
}

</style>
