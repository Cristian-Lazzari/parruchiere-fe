<script >
  import {state} from '../state.js'
  import axios from 'axios';

  export default {

    data(){
        return{     
            state,
            obs: 0,
            fillersximg : 2,
            fillerdximg : 0,
            fillersximgmb : 1,
            fillerdximgmb : 0,
            arrTagli:['']

         //center: {lat: 51.093048, lng: 6.842120},
            
        }
    },
    methods:{
      

      fillersxmb(){
        if(this.obs == 0){
          this.fillersximgmb = 1
        }else if(this.obs >= 1){
          this.fillersximgmb = 0
        }
      },
      fillerdxmb(){
        if(this.obs == state.fakeArrgallery.length - 1){
          this.fillerdximgmb = 1
        }else if(this.obs >= state.fakeArrgallery.length - 2){
          this.fillerdximgmb = 0
        }
      },
      fillersx(){
        if(this.obs == 0){
          this.fillersximg = 2
        }else if(this.obs == 1){
          this.fillersximg = 1
        }else if(this.obs >= 2){
          this.fillersximg = 0
        }
      },
      fillerdx(){
        if(this.obs == state.fakeArrgallery.length - 1){
          this.fillerdximg = 2
        }else if(this.obs == state.fakeArrgallery.length - 2){
          this.fillerdximg = 1
        }else if(this.obs >= state.fakeArrgallery.length - 3){
          this.fillerdximg = 0
        }
      },
      getpost(){
      axios.get(this.state.baseUrl + "api/posts")
      .then((response) => {
        this.arrService = response.data.results;})
    },
    imgright(){
      if(this.obs !==state.fakeArrgallery.length - 1){
        this.obs ++
        this.fillersx()
        this.fillerdx()
        this.fillersxmb()
        this.fillerdxmb()
      }
    },
    imgleft(){
      if(this.obs !== 0){
        this.obs --
        this.fillersx()
        this.fillerdx()
        this.fillersxmb()
        this.fillerdxmb()
      }
    },
    activeimg(o){
      this.obs = o
      this.fillersx()
      this.fillerdx()
      
    }
    },
    created(){
      this.state.actvPage = 4;
      this.getpost();

    }
    
  }
</script>

<template>

<main class="tagli">
  
  <h1 class="title fs-m">I nostri tagli</h1>
  <section class="carosello">
  
    <div class="fillersx" v-for="i in fillersximg" :key="i" ></div>
    <div class="sec-act" v-for="(p, i) in state.fakeArrgallery"  :key="p" :class="obs == i ? 'img-act': 'sec-xs', i > obs + 2 ? 'img-off': '', i < obs - 2 ? 'img-off': ''">
      <div  v-if="i== obs" class="left-arrow" @click="imgleft"><svg :class="this.obs == 0 ? 'btn-off': ''" xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
        <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
      </svg></div>
      <div class="card" >
        <div class="overlay" @click="activeimg(i)"></div>
        <span v-if="i== obs" class="title-img fs-s">{{ p.name}}</span>
        <img :src="p.image"  class="img-acti" alt="">
        <svg   v-if="i== obs" xmlns="http://www.w3.org/2000/svg" class="insta-img" width="35" height="35" fill="currentColor"  viewBox="0 0 16 16">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
        </svg>
      </div>
      <div class="right-arrow" v-if="i== obs" @click="imgright"><svg :class="this.obs ==state.fakeArrgallery.length - 1 ? 'btn-off': ''" xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
      <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
      </svg></div>
      
    </div>
    <div class="fillersx" v-for="i in fillerdximg" :key="i"></div>
    
    
  </section>
  <div class="mobile">

    <div class="fillersx" v-for="i in fillersximgmb" :key="i" ></div>
    <div class="sec-act" v-for="(p, i) in state.fakeArrgallery"  :key="p" :class="obs == i ? 'img-act': 'sec-xs', i > obs + 1 ? 'img-off': '', i < obs - 1 ? 'img-off': ''">
      <div  v-if="i== obs" class="left-arrow" @click="imgleft"><svg :class="this.obs == 0 ? 'btn-off': ''" xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
        <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
      </svg></div>
      <div class="card" >
        <div class="overlay" @click="activeimg(i)"></div>
        <span v-if="i== obs" class="title-img fs-s">{{ p.name}}</span>
        <img :src="p.image"   alt="">
        <svg   v-if="i== obs" xmlns="http://www.w3.org/2000/svg" class="insta-img" width="35" height="35" fill="currentColor"  viewBox="0 0 16 16">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
        </svg>
      </div>
      <div class="right-arrow" v-if="i== obs" @click="imgright"><svg :class="this.obs ==state.fakeArrgallery.length - 1 ? 'btn-off': ''" xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
      <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
      </svg></div>
      
    </div>
    <div class="fillersx" v-for="i in fillerdximgmb" :key="i"></div>

  </div>
</main>


</template>

<style scoped lang="scss">
@use '../assets/styles/general.scss' as *;

.tagli{
 background: url('../assets/img/sfondo.png'),  rgba(0, 0, 0, 0.603) 50% / cover no-repeat;
 background-blend-mode: soft-light;
 backdrop-filter: blur(2px);
 background-position: center;

 overflow: auto;
 display: flex;
 flex-direction: column;
justify-content: center;
.title{
      color: #C1AA88;
      padding: 0px 100px;
      text-transform: uppercase;
    }
  .forbici{
    width: 30%;
    position:fixed;
    top: -20%;
    z-index: 1;
  }
  .carosello{
    width: 100%;
    background: rgba(112, 99, 79, 0.74);
    height: 65%;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    gap: 20px;
    
    .sec-xs{
      animation: none  !important;
      img{
        width: 180px;
        border-radius:50%;
        display: flex;
        align-items: center;
        justify-content: center;
        object-fit: center;
        background-position: center;
        z-index: 1;
        
      }
      .overlay {
        opacity: .6;
        border-radius: 100%;
        position: absolute;
        top: 0;
        height:100%;
        width: 100%;
        background-color: black;
        z-index:2 ;
        
      }
    }
    .sec-s{
      img{
        border-radius:50%;
        width: 300px;
      }
    }
    .sec-act{
      display: flex;
      align-items: center;

      .card{
        position: relative;
        .title-img{
          position: absolute;
          top: 10px;
          left: 10px;
          color: white;
          text-transform: uppercase;
        }
  
        .insta-img{
          position: absolute;
          bottom: 35px;
          right: 30px;
          color: white;
        }
      }
      
    }
    
    
    
  }
}
.img-off{
  display: none!important;
}

.fillersx{
  height: 100px;
  width: 180px;
}

.btn-off{
  opacity: .3;
}

.left-arrow, .right-arrow{
        color:  rgba(255, 255, 255, 0.57);
      }
      .left-arrow:active, .right-arrow:active{
        color:  rgba(255, 255, 255, 1);

      }
.img-act{
  img{
            animation: imgpop .5s ease-out;
            width: 400px;
          }
        }

.img-acti{
  
}
.mobile{
  display: none;
  width: 100%;
    background: rgba(112, 99, 79, 0.74);
    height: 65%;
    z-index: 2;
    
    align-items: center;
    justify-content: center;
    padding: 50px;
    flex-direction: column;
  gap: 1rem;
  height: 100% !important; 
    .sec-xs{
      img{
        width: 200px;
        border-radius:50%;
        display: flex;
        align-items: center;
        justify-content: center;
        object-fit: center;
        background-position: center;
        z-index: 1;
        
      }
      .overlay {
        opacity: .6;
        border-radius: 100%;
        position: absolute;
        top: 0;
        height:100%;
        width: 100%;
        background-color: black;
        z-index:2 ;
        
      }
    }
    .sec-s{
      img{
        border-radius:50%;
        width: 300px;
      }
    }
    .sec-act{
      display: flex;
      align-items: center;

      .card{
        position: relative;

        
        .title-img{
          position: absolute;
          top: 10px;
          left: 10px;
          color: white;
          text-transform: uppercase;
        }
  
        .insta-img{
          position: absolute;
          bottom: 35px;
          right: 30px;
          color: white;
        }
      }
      .left-arrow, .right-arrow{
        color:  rgba(255, 255, 255, 0.57);
      }
    }
    
    
}


@media (max-width:1100px) {
  .carosello{
    display: none!important;
    
}

.mobile{
  display: flex!important;
  flex-direction: column;
  gap: 1rem;
  height: 100% !important; 
  

  }
  .img-act{
    img{

      width: 200px!important;
    }
  }
  .sec-xs{
    img{
      width: 100px!important;
      border-radius:50%;
    }
  }    
}
</style>
