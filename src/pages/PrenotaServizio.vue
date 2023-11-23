<script>
import { state } from "../state.js";
import axios from "axios";
import sh from '../components/SHeader.vue'

export default {
  components:{sh},
  
  data() {
    return {
      state,
      
      nameMesi:['','gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno','luglio', 'agosto', 'settembre', 'ottobre', 'novembre ', 'dicembre'],
      arrDateApi:[],
      arrDateOk:[
        {
          "mese":'',
          "giorni":[],
        },
        {
          "mese":'',
          "giorni":[],
        },
        // {
        //   "mese":'',
        //   "giorni":[],
        // },

      ],
      
      
      name: "",
      phone: "",
      date_id:'',
      service:'',
      
      nameError: "",
      phoneError: "",
      timeError: "",
      dateError: "",
      
      selectedMonth: 0,
      fillerday: 0,
      
      isValid: true,
      loading: false,
      succes: false,
      DeltaMinuti: 30,
    };
  },
  methods: {

    filterDate(){
      axios.get(this.state.baseUrl + "api/dates")
      .then((response) => {
        this.arrDateApi = response.data.results;
        let oggi = new Date()
        let firstFilter = []
        let cOra = oggi.getHours()
        let cGiorno = oggi.getDate()
        let cMese = oggi.getMonth()+1
  
        this.arrDateApi.forEach(element => {
  
          if(cMese <= element.month && element.month <= (cMese + 2)){
            firstFilter.push(element)
            
          }
        });
    
  
        //1
        this.selectedMonth = 0
        
        let firstM={
          "mese":cMese,
          "giorni":[],
        };

        this.arrDateOk[0].mese=firstM.mese

        firstFilter.forEach(element => {
          if(element.month == cMese){
            firstM.giorni.push(element)
          }
        });
        
        
        for(let i = 0; i < firstM.giorni.length; i= i+1){
          //console.log('ciao')
          let newgiorno = {
          "giorno" : firstM.giorni[i].day,
          "dayweek" : firstM.giorni[i].day_w,
          "orari" : [ 
              {
                "orario" : firstM.giorni[i].time,
                "status" : false,
                "date_id" : firstM.giorni[i].id,
              }         
            ],
          "selected" : false       
          }

          if(this.arrDateOk[0].giorni.length == 0 && newgiorno.giorno > cGiorno){
            this.arrDateOk[0].giorni.push(newgiorno)
            
          }else{
            
            if(this.arrDateOk[0].giorni[this.arrDateOk[0].giorni.length - 1].giorno == newgiorno.giorno){
              this.arrDateOk[0].giorni[this.arrDateOk[0].giorni.length - 1].orari.push(newgiorno.orari[0])
            }else{
              this.arrDateOk[0].giorni.push(newgiorno)
            }
          }
          
        }

        this.fillerday = this.arrDateOk[0].giorni[0].dayweek - 1
        //2
        let secondM={
          "mese":cMese + 1,
          "giorni":[],
        };

        this.arrDateOk[1].mese=secondM.mese

        firstFilter.forEach(element => {
          if(element.month == cMese + 1){
            secondM.giorni.push(element)
          }
        });
        
        
        for(let i = 0; i < secondM.giorni.length; i= i+1){
          //console.log('ciao')
          let newgiorno = {
          "giorno" : secondM.giorni[i].day,
          "dayweek" : secondM.giorni[i].day_w,
          "orari" : [ 
              {
                "orario" : secondM.giorni[i].time,
                "status" : false,
                "date_id" : secondM.giorni[i].id,
              }         
            ],
          "selected" : false      
          }

          if(this.arrDateOk[1].giorni.length == 0){
            this.arrDateOk[1].giorni.push(newgiorno)
            
          }else{
            
            if(this.arrDateOk[1].giorni[this.arrDateOk[1].giorni.length - 1].giorno == newgiorno.giorno){
              this.arrDateOk[1].giorni[this.arrDateOk[1].giorni.length - 1].orari.push(newgiorno.orari[0])
            }else{
              this.arrDateOk[1].giorni.push(newgiorno)
            }
          }
          
        }

      });  
    },
    switchMonth(i){
      this.selectedMonth = i
      this.fillerday = this.arrDateOk[this.selectedMonth].giorni[0].dayweek - 1
      console.log(this.arrDateOk[this.selectedMonth].giorni[0].dayweek)
    },
    selectday(i){
      if(this.arrDateOk[this.selectedMonth].giorni[i].status){
        this.arrDateOk[this.selectedMonth].giorni.forEach(element => {
          element.status = false
        });
        
        this.arrDateOk[this.selectedMonth].giorni[i].status= false
      }else{
        this.arrDateOk[this.selectedMonth].giorni.forEach(element => {
          element.status = false
        });
        
        this.arrDateOk[this.selectedMonth].giorni[i].status= true
      }
    },
         


    // order_validations() {
    //    this.isValid = true;

    //   if (!this.name) {
    //     this.nameError = "Il campo 'nome' è richiesto!";
    //     this.isValid = false;
    //   } else if (this.name.length < 2) {
    //     this.nameError = "Il campo 'nome' è troppo corto!";
    //     this.isValid = false;
    //   } else if (this.name.length > 50) {
    //     this.nameError = "Il campo 'name' non può superare i 50 caratteri!";
    //     this.isValid = false;
    //   }

    //   if (!this.phone) {
    //     this.phoneError = "Il campo 'N° 'telefono' è richiesto!";
    //     this.isValid = false;
    //   }

    //   else if (this.phone.length !== 10) {
    //     this.phoneError = "Il campo 'N° 'telefono' deve essere di 10 cifre!";
    //     this.isValid = false;
    //   }

    //   if (!this.idate) {
    //     this.dateError = "Seleziona una data!" ;
    //     this.isValid = false;
    //   }
    //   if (!this.timeSlot) {
    //     this.timeError = "Seleziona una fascia oraria!";
    //     this.isValid = false;
    //   }
    //   if (!this.nperson) {
    //     this.npersonError = "Seleziona una numero di ospiti!";
    //     this.isValid = false;
    //   }

    //   if (!this.isValid) {
    //     return;
    //   }
    // },

    sendOrder() {
      this.phoneError = "";
      this.nameError = "";
      this.timeError = "";
      this.dateError = "";
      this.npersonError = "";
      this.isValid = true;
      //this.order_validations();
      console.log(this.timeSlot);
      if (this.isValid) {
        this.loading = true;
        let data = {
          name: this.name,
          phone: this.phone,
          service: this.service,
          date_id: this.date_id,
          
        };

        console.log(data);

        console.log(JSON.stringify(this.state.arrQt));
        axios.post(state.baseUrl + "api/reservations", data).then((response) => {
          this.success = response;
          this.loading = false;
        });
        this.name = "";
        this.phone = "";
        this.date_id = "";
        this.service = "";

        this.state.arrId= [];
        this.state.arrQt= [];
        this.state.arrCart= [];
        this.arrTimesSlot= [];
        this.arrTimesSlotApi= [];
      }
    },



    inputTime(id){
    this.date_id=id
    }
  },
  created() {
   
    
      
    this.filterDate();
    this.state.actvPage = 6;
  },
};
</script>

<template>
  <div class="menu">
    <sh/>
    <div class="top-menu">
      <h1>Prenota il tuo tavolo</h1>
    </div>
   

    <div class="form" id="orderForm">
      <div class="sec-form">
          <label for="name">Nome e Cognome</label>
          <input v-model="name" type="text" placeholder="Nome e Cognome" id="name" />
          <div v-if="nameError" id="nameError">{{ nameError }}</div>
      </div>
      <div class="sec-form">
           <label for="phone">Numero di telefono</label>
            <input
            v-model="phone"
            type="text"
            onkeypress="return /[0-9]/i.test(event.key)"
            placeholder="N° telefono"
            id="phone"
          />
          <div v-if="phoneError" id="phoneError">{{ phoneError }}</div>
      </div>
      <div class="sec-form nperson">
        <label for="nperson">service</label>
        <input
            v-model="nperson"
            type="text"
            
            placeholder="service"
            id="nperson"
          />
        <div v-if="npersonError" id="npersonError">{{ npersonError }}</div>
      </div>


      <div class="sec-form date">
        <span>Seleziona una data </span>
        <div>
          <span @click="switchMonth(i)" class="mesi" v-for="(mese, i) in arrDateOk" :key="mese.mese">{{ nameMesi[mese.mese]  }}</span>
        </div>
        <div class="calendar">
      
          <div v-for="n in fillerday"  class="giorno">  </div>
          <div @click="selectday(i)" class="giorno" v-for="(giorno, i) in arrDateOk[selectedMonth].giorni" :key="i">
            {{ giorno.giorno }} 
            <div  :class="giorno.status ? 'orari' : ''">
              <div v-for="i in giorno.orari" >
                <span @click="inputTime(i.date_id)" :class="giorno.status ? 'orario' : 'orario-off'">
                  {{ i.orario }}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        
        <button v-if="!loading"
          class="btn-send"           
          @click.prevent="sendOrder"       
          data-action='submit'>conferma</button>
  
        <!--<span v-if="!loading" @click="sendOrder()" class="btn">Invia</span>-->
      </div>
    </div>



    <div v-if="loading" class="loop cubes">
      <div class="item cubes"></div>
      <div class="item cubes"></div>
      <div class="item cubes"></div>
      <div class="item cubes"></div>
      <div class="item cubes"></div>
      <div class="item cubes"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/styles/general.scss" as *;

.menu{
  .top-menu{
    h1{
      text-align: center;
      text-transform: uppercase;
      padding-top: 2rem;
      font-size: 30px;
    }
  }
}
.sec-form.date{
  @include dfc;
  flex-direction: column;
  gap: 3rem!important;
}
.calendar{
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border: solid 2px white;
  position: relative;
  background-color:rgb(157, 18, 18) ;
  .giorno{
    @include dfc;
    padding: 10px;
    width: calc(100% / 7);
    aspect-ratio: 1;
    border: solid 2px white;
    .orari{
      background-color: #fe4252;
      position: absolute;
      width: 50%;
      height: auto;
      bottom: 50%;
      transform: translate(-50%, 50%);
      left: 50%;
      z-index: 100;
      @include dfc;
      gap: 5px;
      flex-direction: column;
      padding: 10px;
      border: solid white 3px;
      .orario{
        display: block;
        padding: 3px 10px;
        border: solid white 3px;
        border-radius: 100px;
      }
    }
  }
}
.orario-off{
  display: none;
}
.mesi{
  padding: 10px 20px ;
  border: solid 2px white;
  margin: 5px;
  border-radius: 20px;
}
.actv{
  color: white;
  background-color: $c-header !important;;
}


.form{
  max-width: 450px;
  width: 100%;
  margin:  2rem auto;
  @include dfc;
  flex-direction: column;
  gap: 1rem;
  .sec-form{
    border-radius: 4px;
    width: 100%;
    border: 1px solid $c-nav-link;
    background-color: $c-footer-nav;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    input{
      background-color: #fe425200;
      border: 1px solid $c-nav-link;
      color: $c-nav-link;
      padding: 1rem;
      border-radius: .4em;
      
    }
    textarea{
      background-color:$c-footer-nav;
      resize: none;
      border-radius: .4em;
      border: 1px solid $c-nav-link;
      padding: 1rem;
    }
  }
  .sec-form{
    .nperson{
      
      width: 100%;
    }
  }
  .btn-send{
    border: 1px solid $c-nav-link;
    background-color: $c-header;
    max-width: 450px;
    width: 100%;
    padding: .4rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 20px;
    margin-top: 10px
  }
}

::placeholder {
  opacity: 1;
  color: white;
}

#nameError,
#phoneError,
#timeError,
#dateError,
#timeError,
#npersonError {
  text-align: center;
  font-size: 0.8em;
  color: red;
  margin-top: 0.3rem;
}


.btn_loading {
  cursor: wait;
}
.tag {
  display: flex;
  gap: 0.4em;
  background-color: $c-black-op-med;
  padding: 0.5em;
  border-radius: 30px;
}

.cart-mobile {
  display: flex;
  flex-direction: column;
  gap: 0.3em;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 70%;
  background-color: black;
  border: 2px solid white;
}
.sub-item-off {
  display: none;
}
.sub-item-on {
  display: inline-block;
}
.cart-on {
  margin: 1rem 1rem 3rem;
  @include dfj;
  flex-direction: column;
  height: 100%;
  gap: 0.4rem;
  transition: all linear 0.3s;
}
.carts-on {
  margin: 1rem 1rem 3rem;
  @include dfj;

  height: 100%;
  gap: 0.4rem;
  transition: all linear 0.3s;
}
.cart-off {
  height: 0%;
  margin: 0;
  transition: all linear 0.3s;
}
.item-on {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  border: 2px solid white;
  min-width: 300px;

  transition: all linear 0.3s;
}
.item-off {
  gap: 0rem;
  padding: 0rem;
  border: 0px solid white;
  //width: 0px;
  height: 0;
  transition: all linear 0.3s;
}
.icon-cart {
  margin: 1rem;
}

.cs {
  display: flex;
  flex-direction: column;
  width: 50%;
}

//loader
.cubes {
  position: absolute;
  top: 50%;
  left: 50%;
  transform-style: preserve-3d;
}

.loop {
  transform: rotateX(-35deg) rotateY(-45deg) translateZ(1.5625em);
}

@keyframes s {
  to {
    transform: scale3d(0.2, 0.2, 0.2);
  }
}

.item {
  margin: -1.5625em;
  width: 3.125em;
  height: 3.125em;
  transform-origin: 50% 50% -1.5625em;
  box-shadow: 0 0 0.125em currentColor;
  background: currentColor;
  animation: s 0.6s cubic-bezier(0.45, 0.03, 0.51, 0.95) infinite alternate;
}

.item:before,
.item:after {
  position: absolute;
  width: inherit;
  height: inherit;
  transform-origin: 0 100%;
  box-shadow: inherit;
  background: currentColor;
  content: "";
}

.item:before {
  bottom: 100%;
  transform: rotateX(90deg);
}

.item:after {
  left: 100%;
  transform: rotateY(90deg);
}

.item:nth-child(1) {
  margin-top: 6.25em;
  color: #fe1e52;
  animation-delay: -1.2s;
}

.item:nth-child(1):before {
  color: #ff6488;
}

.item:nth-child(1):after {
  color: #ff416d;
}

.item:nth-child(2) {
  margin-top: 3.125em;
  color: #fe4252;
  animation-delay: -1s;
}

.item:nth-child(2):before {
  color: #ff8892;
}

.item:nth-child(2):after {
  color: #ff6572;
}

.item:nth-child(3) {
  margin-top: 0em;
  color: #fe6553;
  animation-delay: -0.8s;
}

.item:nth-child(3):before {
  color: #ffa499;
}

.item:nth-child(3):after {
  color: #ff8476;
}

.item:nth-child(4) {
  margin-top: -3.125em;
  color: #fe8953;
  animation-delay: -0.6s;
}

.item:nth-child(4):before {
  color: #ffb999;
}

.item:nth-child(4):after {
  color: #ffa176;
}

.item:nth-child(5) {
  margin-top: -6.25em;
  color: #feac54;
  animation-delay: -0.4s;
}

.item:nth-child(5):before {
  color: #ffce9a;
}

.item:nth-child(5):after {
  color: #ffbd77;
}

.item:nth-child(6) {
  margin-top: -9.375em;
  color: #fed054;
  animation-delay: -0.2s;
}

.item:nth-child(6):before {
  color: #ffe49a;
}

.item:nth-child(6):after {
  color: #ffda77;
}
  
.badge{
  border: 2px solid white;
  border-radius: 300px;
  width: 70px;
  text-align: center;
  padding: 5px ;
  margin: 5px;
}
.badge-off{
  background-color: rgb(210, 32, 19);
  padding: 5px 10px;
  margin: 5px;
}


</style>
