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
  
    <div class="cont">
      <section class="left-cont">
        <span class="title fs-l">CONTATTACI</span>
        <div class="top">
          <label class="t-left fs-s">...nel mondo che vuoi</label>
          <div class="main">
            <div class="line">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
              <span>12453567</span>
            </div>
            <div class="line">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
              <span>12453567</span>
            </div>
            <div class="line">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
                <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
              </svg>
              <span>indirizzo@gmail.com</span>
            </div>
            <div class="line">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472M3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
              </svg>
              <span>www.indirizzo.it</span>
            </div>
          </div>
        </div>
        <div class="bottom">
          <label class="t-left fs-s" >chi siamo</label>
          <div class="main">
            <div class="line">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
                <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"/>
              </svg>
              <span>www.indirizzo.it</span>
            </div>
            <span>PI 3214535235</span>
            <span>CF fasfasgsdhsd</span>
            
          </div>
        </div>
      </section>
      <section class="right-cont">
        <div class="main-right">
          <span class="title fs-l">dove siamo</span>
          <div class="top">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
            </svg>
            <label class="t-left fs-s"> Via numero civico cap città</label>
          </div>
          <div class="bottom">
            <a href=""><img src="../assets/img/posizione.png" alt=""></a>
          </div>
        </div>
      </section>
    </div>
    
 
</template>

<style scoped lang="scss">
@use '../assets/styles/general.scss' as *;


svg{
    width: 25px;
    height: 25px;
}
  .cont{
    display: flex;
    justify-content: space-between;
    background: url('../assets/img/sfondo.png'),  rgba(0, 0, 0, 0.603) 50% / cover no-repeat;
    background-blend-mode: soft-light;
    backdrop-filter: blur(2px);
    
    background-position: center;
    background-size: cover;

    background-repeat: no-repeat;
    overflow: auto;
    background-position: center;
    height: 100%;
  }
  .left-cont{
    margin-left: 1rem;
    width: 30%;
    background-color: rgba(112, 99, 79, 0.45);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    

    .title{
      text-align: center;
      padding: 20px;
      
      color: #C1AA88;
    }

    .top, .bottom{
      background-color: #A99B86;
      display: flex;
      flex-direction: column;
      width: 80%;
      text-align: center;
      border-radius: 10px;


      .t-left{
        background-color: #C1AA88;
       color: white;
       
       border-top-left-radius: 10px;
       border-top-right-radius: 10px;
       padding: 10px;
      }
      .main{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border: 4px solid white;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        padding: 20px;
        color: white;
        

        .line{
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
      }
    }

  }
  .right-cont{
    margin-right: 1rem;
    width: 55%;
    background-color: rgba(112, 99, 79, 0.45);
    
    .main-right{
      text-align: center;
      padding: 10px;
      color: #C1AA88;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-transform: uppercase;
      padding-bottom: 10rem;
      .title{
        margin-bottom: 3rem;
      }
      .top{
        padding: 1rem;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        background-color: #C1AA88;
        width: 80%;
        margin: auto;
        color: white;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }
      .bottom{
        background-color: #C1AA88;
        width: 80%;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        img{
          border-radius: 10px;
          width: 650px;
          padding-bottom: 20px;
        }
      }
    }
  }

  

  
  @media (max-width: 1600px) {
    
   .right-cont{
    .bottom{
      img{
        width: 80%!important;
      }
    }
   }

  }
  @media (max-width: 1050px) {
    
    .left-cont{
      gap: 1rem!important;
    }

  }

  @media (max-width: 900px) {
    
    .cont{
      flex-direction: column!important;
      gap: 2rem;

      .left-cont, .right-cont{
        width: 100%;
        margin: auto;
        padding: 20px;
      }
    }

    .left-cont, .right-cont{
      width: 90%!important;
    }
  }

  @media (max-width: 500px) {
    
    .left-cont, .right-cont{
        
      .top, .bottom{
        width: 100%!important;
      }
      }
    
      .right-cont{
        padding: 0!important;
      }
    
    
  }
  

</style>
