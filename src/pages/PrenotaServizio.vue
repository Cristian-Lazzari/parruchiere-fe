<script>
import { state } from "../state.js";
import axios from "axios";


export default {

  
  data() {
    return {
      state,
      
      nameMesi:['','gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno','luglio', 'agosto', 'settembre', 'ottobre', 'novembre ', 'dicembre'],
      nameGiorni : ['','lunedi','martedi','mercoledi','giovedi','venerdi','sabato','domenica'],
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
        {
          "mese":'',
          "giorni":[],
        },

      ],
      arrService: [],
      
      name: "",
      phone: "",
      date_id:'',
      service:'',
      
      nameError: "",
      phoneError: "",
      serviceError: "",
      dateError: "",
      
      selectedMonth: 0,   //puo essere solo 0 1 2
      selectedDay: {
        "day":'',
        "day_week":'',
        "year":'',
        "month":'',
        "time":[],
        "i":'0',
      },
      fillerday: 0,
      select :  false,
      
      isValid: true,
      loading: false,
      succes: false,
      DeltaMinuti: 30,
    };
  },
  methods: {

    getservice(){
      axios.get(this.state.baseUrl + "api/services")
      .then((response) => {
        this.arrService = response.data.results;})
    },

    filterDate(){
      axios.get(this.state.baseUrl + "api/dates")
      .then((response) => {
        this.arrDateApi = response.data.results;
        let oggi = new Date()
        let firstFilter = []
        let cOra = oggi.getHours()
        let cGiorno = oggi.getDate()
        let cMese = oggi.getMonth()+1
       // let cMese = 10
        let cYear = oggi.getFullYear()
        let otheryear= 0
  
        //1
        this.selectedMonth = 0
        
        let firstM={
          "mese":cMese,
          "giorni":[],
        };

        this.arrDateOk[0].mese=firstM.mese

        this.arrDateApi.forEach(element => {
          if(element.month == cMese && element.year == cYear && element.visible == 1){
            firstM.giorni.push(element)
            
          }
        });
        
        
        otheryear = 12 - firstM.giorni[0].month
        console.log(otheryear)
        for(let i = 0; i < firstM.giorni.length; i++){
          //console.log('ciao')
          let pmam = "am"
          let o = firstM.giorni[i].time.split('')
          o.length = o.length - 3
          o = o.join('')
          o = parseInt(o);
          if( o > 15){
            pmam = "pm"
          }
          console.log(pmam)
          let newgiorno = {
          "giorno" : firstM.giorni[i].day,
          "dayweek" : firstM.giorni[i].day_w,
          "orari" : [ 
              {
                "orario" : firstM.giorni[i].time,
                "pmam"  : pmam,
                "date_id" : firstM.giorni[i].id,
              }         
            ],
          "selected" : false,
          "year" : firstM.giorni[i].year,
          "month" : firstM.giorni[i].month,       
          }
   
          if(this.arrDateOk[0].giorni.length == 0 && newgiorno.giorno > cGiorno){
            this.arrDateOk[0].giorni.push(newgiorno)
            
          }else{
            if(newgiorno.giorno > cGiorno){
              if(this.arrDateOk[0].giorni[this.arrDateOk[0].giorni.length - 1].giorno == newgiorno.giorno){
                this.arrDateOk[0].giorni[this.arrDateOk[0].giorni.length - 1].orari.push(newgiorno.orari[0])
              }else{
                this.arrDateOk[0].giorni.push(newgiorno)
              }
            }
          }        
        }
        
        this.fillerday = this.arrDateOk[0].giorni[0].dayweek - 1
        
        console.log(this.arrDateOk[0].giorni[0].dayweek)

        if(otheryear == 0){
          //2
        let secondM={
          "mese": 1,
          "giorni":[],
        };

        this.arrDateOk[1].mese=secondM.mese

        this.arrDateApi.forEach(element => {
          if(element.month == 1 && element.year == cYear + 1 && element.visible == 1){
            secondM.giorni.push(element)
          }
        });
        
        
        for(let i = 0; i < secondM.giorni.length; i= i+1){
          //console.log('ciao')
          let pmam = "am"
          let o = secondM.giorni[i].time.split('')
          o.length = o.length - 3
          o = o.join('')
          o = parseInt(o);
          if( o > 15){
            pmam = "pm"
          }
          console.log(pmam)
          let newgiorno = {
          "giorno" : secondM.giorni[i].day,
          "dayweek" : secondM.giorni[i].day_w,
          "orari" : [ 
              {
                "orario" : secondM.giorni[i].time,
                "pmam"  : pmam,
                "date_id" : secondM.giorni[i].id,
              }         
            ],
          "selected" : false,
          "year" : secondM.giorni[i].year,
          "month" : secondM.giorni[i].month,      
          }

          if(this.arrDateOk[1].giorni.length == 0 ){
            this.arrDateOk[1].giorni.push(newgiorno)
            
          }else{
      
              if(this.arrDateOk[1].giorni[this.arrDateOk[1].giorni.length - 1].giorno == newgiorno.giorno){
                this.arrDateOk[1].giorni[this.arrDateOk[1].giorni.length - 1].orari.push(newgiorno.orari[0])
              }else{
                this.arrDateOk[1].giorni.push(newgiorno)
              }
            
          }      
        }

        //3
      let thirdM={
        "mese": 2,
        "giorni":[],
      };
  
      this.arrDateOk[2].mese=thirdM.mese
  
      this.arrDateApi.forEach(element => {
        if(element.month == 2 && element.year == cYear + 1 && element.visible == 1){
          thirdM.giorni.push(element)
        }
      });
      
      
      for(let i = 0; i < thirdM.giorni.length; i= i+1){

        let pmam = "am"
        let o = thirdM.giorni[i].time.split('')
        o.length = o.length - 3
        o = o.join('')
        o = parseInt(o);
        if( o > 15){
          pmam = "pm"
        }
        console.log(pmam)
        let newgiorno = {
        "giorno" : thirdM.giorni[i].day,
        "dayweek" : thirdM.giorni[i].day_w,
        "orari" : [ 
            {
              "orario" : thirdM.giorni[i].time,
              "pmam"  : pmam,
              "date_id" : thirdM.giorni[i].id,
            }         
          ],
        "selected" : false,
        "year" :  thirdM.giorni[i].year,
        "month" :  thirdM.giorni[i].month,      
        }
  
        if(this.arrDateOk[2].giorni.length == 0 ){
          this.arrDateOk[2].giorni.push(newgiorno)
          
        }else{
    
            if(this.arrDateOk[2].giorni[this.arrDateOk[2].giorni.length - 1].giorno == newgiorno.giorno){
              this.arrDateOk[2].giorni[this.arrDateOk[2].giorni.length - 1].orari.push(newgiorno.orari[0])
            }else{
              this.arrDateOk[2].giorni.push(newgiorno)
            }
          
        }      
      }
      }
        else if(otheryear == 1){
          //2
        let secondM={
          "mese": cMese + 1,
          "giorni":[],
        };

        this.arrDateOk[1].mese=secondM.mese

        this.arrDateApi.forEach(element => {
          if(element.month == 12 && element.year == cYear + 1 && element.visible == 1){
            secondM.giorni.push(element)
          }
        });
        
        
        for(let i = 0; i < secondM.giorni.length; i= i+1){
          //console.log('ciao')
          let pmam = "am"
          let o = secondM.giorni[i].time.split('')
          o.length = o.length - 3
          o = o.join('')
          o = parseInt(o);
          if( o > 15){
            pmam = "pm"
          }
          console.log(pmam)
          let newgiorno = {
          "giorno" : secondM.giorni[i].day,
          "dayweek" : secondM.giorni[i].day_w,
          "orari" : [ 
              {
                "orario" : secondM.giorni[i].time,
                "pmam"  : pmam,
                "date_id" : secondM.giorni[i].id,
              }         
            ],
          "selected" : false,
          "year" : secondM.giorni[i].year,
          "month" : secondM.giorni[i].month,      
          }

          if(this.arrDateOk[1].giorni.length == 0 ){
            this.arrDateOk[1].giorni.push(newgiorno)
            
          }else{
      
              if(this.arrDateOk[1].giorni[this.arrDateOk[1].giorni.length - 1].giorno == newgiorno.giorno){
                this.arrDateOk[1].giorni[this.arrDateOk[1].giorni.length - 1].orari.push(newgiorno.orari[0])
              }else{
                this.arrDateOk[1].giorni.push(newgiorno)
              }
            
          }      
        }

        //3
      let thirdM={
        "mese": 1,
        "giorni":[],
      };
  
      this.arrDateOk[2].mese=thirdM.mese
  
      this.arrDateApi.forEach(element => {
        if(element.month == 2 && element.year == cYear + 1){
          thirdM.giorni.push(element)
        }
      });
      
      
      for(let i = 0; i < thirdM.giorni.length; i= i+1){

        let pmam = "am"
        let o = thirdM.giorni[i].time.split('')
        o.length = o.length - 3
        o = o.join('')
        o = parseInt(o);
        if( o > 15){
          pmam = "pm"
        }
        console.log(pmam)
        console.log(o)
        let newgiorno = {
        "giorno" : thirdM.giorni[i].day,
        "dayweek" : thirdM.giorni[i].day_w,
        "orari" : [ 
            {
              "orario" : thirdM.giorni[i].time,
              "pmam"  : pmam,
              "date_id" : thirdM.giorni[i].id,
            }         
          ],
        "selected" : false,
        "year" : thirdM.giorni[i].year,
        "month" : thirdM.giorni[i].month,      
        }
  
        if(this.arrDateOk[2].giorni.length == 0 ){
          this.arrDateOk[2].giorni.push(newgiorno)
          
        }else{
    
            if(this.arrDateOk[2].giorni[this.arrDateOk[2].giorni.length - 1].giorno == newgiorno.giorno){
              this.arrDateOk[2].giorni[this.arrDateOk[2].giorni.length - 1].orari.push(newgiorno.orari[0])
            }else{
              this.arrDateOk[2].giorni.push(newgiorno)
            }
          
        }      
      }
      }
      else{
           //2
           let secondM={
          "mese": cMese + 1,
          "giorni":[],
        };

        this.arrDateOk[1].mese=secondM.mese

        this.arrDateApi.forEach(element => {
          if(element.month ==  cMese + 1 && element.year == cYear && element.visible == 1){
            secondM.giorni.push(element)
          }
        });
        
        
        for(let i = 0; i < secondM.giorni.length; i= i+1){
          //console.log('ciao')
          let pmam = "am"
          let o = secondM.giorni[i].time.split('')
          o.length = o.length - 3
          o = o.join('')
          o = parseInt(o);
          if( o > 15){
            pmam = "pm"
          }
          console.log(pmam)
          let newgiorno = {
          "giorno" : secondM.giorni[i].day,
          "dayweek" : secondM.giorni[i].day_w,
          "orari" : [ 
              {
                "orario" : secondM.giorni[i].time,
                "pmam"  : pmam,
                "date_id" : secondM.giorni[i].id,
              }         
            ],
          "selected" : false,
          "year" : secondM.giorni[i].year,
          "month" : secondM.giorni[i].month,      
          }

          if(this.arrDateOk[1].giorni.length == 0 ){
            this.arrDateOk[1].giorni.push(newgiorno)
            
          }else{
      
              if(this.arrDateOk[1].giorni[this.arrDateOk[1].giorni.length - 1].giorno == newgiorno.giorno){
                this.arrDateOk[1].giorni[this.arrDateOk[1].giorni.length - 1].orari.push(newgiorno.orari[0])
              }else{
                this.arrDateOk[1].giorni.push(newgiorno)
              }
            
          }      
        }

        //3
      let thirdM={
        "mese":cMese + 2,
        "giorni":[],
      };
  
      this.arrDateOk[2].mese=thirdM.mese
  
      this.arrDateApi.forEach(element => {
        if(element.month == cMese + 2 && element.year == cYear && element.visible == 1){
          thirdM.giorni.push(element)
        }
      });
      
      
      for(let i = 0; i < thirdM.giorni.length; i= i+1){

        let pmam = "am"
        let o = thirdM.giorni[i].time.split('')    
        o.length = o.length - 3
        o = o.join('')
        o = parseInt(o);
        if( o > 15){
          pmam = "pm"
        }
        console.log(pmam)
        let newgiorno = {
        "giorno" : thirdM.giorni[i].day,
        "dayweek" : thirdM.giorni[i].day_w,
        "orari" : [ 
            {
              "orario" : thirdM.giorni[i].time,
              "pmam"  : pmam,
              "date_id" : thirdM.giorni[i].id,
            }         
          ],
        "selected" : false,
        "year" : thirdM.giorni[i].year,
        "month" : thirdM.giorni[i].month ,      
        }
  
        if(this.arrDateOk[2].giorni.length == 0 ){
          this.arrDateOk[2].giorni.push(newgiorno)
          
        }else{
    
            if(this.arrDateOk[2].giorni[this.arrDateOk[2].giorni.length - 1].giorno == newgiorno.giorno){
              this.arrDateOk[2].giorni[this.arrDateOk[2].giorni.length - 1].orari.push(newgiorno.orari[0])
            }else{
              this.arrDateOk[2].giorni.push(newgiorno)
            }
          
        }      
      }
      }
      
      

      });  
    },
    
    order_validations() {
      this.isValid = true;
      
      if (!this.name) {
        this.nameError = "Il campo 'nome' è richiesto!";
        this.isValid = false;
      } else if (this.name.length < 2) {
        this.nameError = "Il campo 'nome' è troppo corto!";
        this.isValid = false;
      } else if (this.name.length > 50) {
        this.nameError = "Il campo 'name' non può superare i 50 caratteri!";
        this.isValid = false;
      }
      if (!this.service) {
        this.serviceError = "Il campo 'servizio' è richiesto!";
        this.isValid = false;
      }
      if (!this.phone) {
        this.phoneError = "Il campo 'N° telefono' è richiesto!";
        this.isValid = false;
      }
      // modificare quando verrà cambiato il tipo di dato per il telefono (numerico)
      else if (this.phone.length <= 10 && this.phone.length >= 12) {
        this.phoneError = "Inserire un numero di telefono valido senza spazi";
        this.isValid = false;
      }
      
      if (!this.date_id) {
        this.dateError = "Seleziona una data e un orario!" ;
        this.isValid = false;
      }
      
      
      if (!this.isValid) {
        return;
      }
    },
    sendOrder() {
      this.phoneError = "";
      this.nameError = "";
      this.timeError = "";
      this.dateError = "";
      this.npersonError = "";
      this.isValid = true;
      this.order_validations();
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
    
    switchMonth(i){
      this.selectedDay.i= 0
      this.selectedMonth = i
      if(this.arrDateOk[i].giorni[0].dayweek == 0){

        this.fillerday = 0
      }else{
        this.fillerday = this.arrDateOk[i].giorni[0].dayweek - 1
      }
      
    },
    selectday(giorno, giornos, mese, i, y){
      this.selectedDay.i = i
      this.selectedDay.day = giorno
      this.selectedDay.month = mese
      this.selectedDay.year = y
      this.selectedDay.day_week = giornos
      this.select = true
      this.date_id= ''
      
    },
    selectTime(dateid){
      this.date_id =dateid 
      console.log(this.date_id)   
    },
    inputservice(s){
      this.service= s
    },
    inputTime(id){
    this.date_id=id
    }
  },
  created() {
   
    
    this.getservice();  
    this.filterDate();
    this.state.actvPage = 6;
  },
};
</script>

<template>
  <main >
    <div class="container">
      <section>
        <span class="fs-s sec-title">Inserisci i tuoi dati</span>
        <div class="name card">
          <label class="fs-xs" for="name">Nome e Cognome</label>
          <input v-model="name" type="text" placeholder="Nome e Cognome" id="name" />
          <div v-if="nameError" id="nameError">{{ nameError }}</div>
        </div>
        <div class="phone card">
            <label class="fs-xs" for="phone">Numero di telefono</label>
              <input
              v-model="phone"
              type="text"
              onkeypress="return /[0-9]/i.test(event.key)"
              placeholder="N° telefono"
              id="phone"
            />
            <div v-if="phoneError" id="phoneError">{{ phoneError }}</div>
        </div>
        <div class="c-mesi card">
          <label class="fs-xs">Srvizio</label>
          <span 
            v-for="(s, i) in arrService" 
            @click="inputservice(s.name)" 
            :class="i == arrService.length - 1  ? 'last-mese' : '', i == 0 ? 'first-mese' : '', service == s.name ? 'mese-on' : ''" 
            class="mesi" 
            :key="i"
            >{{ s.name  }} - €{{ s.price / 100 }}
          </span>
          <div v-if="serviceError" id="serviceError">{{ serviceError }}</div>
        </div> 
      </section>
      <section>
        <span class="fs-s sec-title">scegli una data</span>

        <div class="c-mesi card">
          <label class="fs-xs">Mese</label>
          <span @click="switchMonth(i)" class="mesi" :class="i == 2 ? 'last-mese' : '', i == 0 ? 'first-mese' : '', selectedMonth == i ? 'mese-on' : ''" v-for="(mese, i) in arrDateOk" :key="mese.mese">{{ nameMesi[mese.mese]  }}</span>
        </div> 
        <div class="calendar card">
          <label class="fs-xs">Giorno</label>
          <div class="dayweek">
            <span>lun</span>
            <span>mar</span>
            <span>mer</span>
            <span>gio</span>
            <span>ven</span>
            <span>sab</span>
            <span>dom</span>
          </div>
          <div class="main-calendar">

            <div v-for="n in fillerday" :key="n" class="giorno">  </div>
            <span class="giorno" :class="selectedDay.i == i ? 'day-on' : ''" v-for="(giorno, i) in arrDateOk[selectedMonth].giorni" :key="i" @click="selectday(giorno.giorno, giorno.dayweek, giorno.month, i, giorno.year)">
              {{ giorno.giorno }} 
            </span>
          </div>
        </div>
          
   
      </section>
      <section>
        <span class="fs-s sec-title">scegli un orario</span>
        <div class="orari card">
          <label class="fs-xs">Mattina</label>
          <div class="main-orari">
            <div class="orario" 
            v-for="n in arrDateOk[selectedMonth].giorni[selectedDay.i].orari " 
            :class="n.pmam == 'am' ? '' : 'orario-off', n.date_id == date_id ? 'o-on' : ''"  
            :key="n.date_id" 
            @click="selectTime(n.date_id)">
            <span 
            :class="n.date_id == date_id ? 'orario-on' : ''"
  
               >{{ n.orario }}</span> 
            </div>

          </div>
        </div>
        <div class="orari card">
          <label class="fs-xs">Pomeriggio</label>
          <div class="main-orari">
            <div class="orario" 
            v-for="n in arrDateOk[selectedMonth].giorni[selectedDay.i].orari " 
            :class="n.pmam == 'pm' ? '' : 'orario-off', n.date_id == date_id ? 'o-on' : ''"  
            :key="n.date_id" 
            @click="selectTime(n.date_id)">
            <span 
            :class="n.date_id == date_id ? 'orario-on' : ''"
  
               >{{ n.orario }}</span> 
            </div>

          </div>
        </div>
        <div v-if="dateError" id="dateError">{{ dateError }}</div>
    
     
        <button v-if="!loading"
            :class="state.sideMenuValue ? 'btn-off':'button'"           
            @click.prevent="sendOrder"       
            data-action='submit'>conferma
            
        </button>
      </section>


    </div>
    
      


  

  </main>
</template>

<style scoped lang="scss">
@use "../assets/styles/general.scss" as *;
main{
  .container{
    height: 100%;
    @include dfc;
    justify-content: space-between;
    overflow: auto;
    background: radial-gradient(419.75% 336% at 100% 102.97%, #333 0%, #808080 30.34%, #322B2B 41.15%, #FFF 81.23%);
    section{
      @include dfa;
      flex-direction: column;
      justify-content: flex-start;
      gap: 3%;
      width: calc((100% - 6rem) / 3);
      background: rgba(112, 99, 79, 0.45);
      height: 100%;
      padding: 20px;
      padding-bottom: 4px;

      .sec-title{
        color: #C1AA88;
        text-align: center;
        white-space: nowrap;
        margin-bottom: 15px;
        font-weight: 700;
        letter-spacing: 2.7px; 
        text-transform: uppercase;
      }
      label{
        width: 100%;
        color: white;
        font-family: Athiti;

        text-align: center;
        font-weight: 700;
        letter-spacing: 2.7px; 
      }
      .card{
        @include dfc;
        flex-direction: column;
        width: 100%;
        justify-content: space-between;
        background-color: #C1AA88; 
        border-radius: 7px;
        overflow: hidden;
        height: auto;
        input{
          width: 100%;
          height: 40px;
          border-radius:  0px 0px 7px 7px;
          border: 4px solid rgba(255, 255, 255, 0.57);
          background: #A99B86;
          color: white;
          font-family: Athiti;

          text-align: center;
        }
        ::placeholder{
          color: white;
          font-family: Athiti;

          margin-left: 10px;
          text-align: center;
        }
      }
      .c-mesi{
        display: flex;
        flex-direction: column;
        .mesi{
          width: 100%;
          border: 4px solid rgba(255, 255, 255, 0.57);
          border-top: 2px solid rgba(255, 255, 255, 0.57);
          border-bottom: 2px solid rgba(255, 255, 255, 0.57);
          background: #A99B86;
          color: white;
          font-family: Athiti;

          font-weight: 700;
          text-align: center;
          text-transform: uppercase;
          transition: all 300ms ease-in-out;
        }
        .mesi:hover{
          padding: 10px 0;
          transition: all 300ms ease-in-out;
          background-color: #e9e1d5;

        }
        .mese-on{
          padding: 10px 0;
          transition: all 300ms ease-in-out;
          background-color: #e9e1d5;
          color: black;

        }
        .last-mese{
          border-radius:  0px 0px 7px 7px;
          border-bottom: 4px solid rgba(255, 255, 255, 0.57);

        }
        .first-mese{
          border-top: 4px solid rgba(255, 255, 255, 0.57);

        }

      }
      .calendar{
        padding: 0 20px 10px;
        .dayweek{
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;
          margin: 10px 0 15px;
          color: #FFF;
          text-align: center;
          font-family: Athiti;
          font-weight: 700;
          width: 100%;
          max-width: 230px ;
        }
        .main-calendar{
          max-width: 230px ;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;
          row-gap:3px;
          column-gap:3px;
          .giorno{
            @include dfc;
            color: #FFF;
            text-align: center;
            font-family: Athiti;
            font-weight: 700;
            letter-spacing: 2.25px; 
            border: 2px solid rgba(190, 163, 97, 0.46);
            background: rgba(255, 255, 255, 0.57);
            border-radius: 7px;
            width: 100%;
            aspect-ratio: 1;
            transition: all 300ms ease-in-out;
          }
          .giorno:hover{
            scale: 1.06;
            border: 2px solid rgba(190, 163, 97, 0.46);
            transition: all 300ms ease-in-out;
          }
          .day-on{
            scale: 1.06;
            border: 2px solid rgba(255, 255, 255, 0.765);
            color: black;

          }
        }
      }
      .main-orari{
        @include dfc;
        width: 100%;
        flex-wrap: wrap;
        gap: 5px;
        padding: 5px;
        background-color: rgba(255, 255, 255, 0.57);
      }
      .orario{
        width: calc((100% - 5px) / 2);
        
        background: #A99B86;
        color: white;
        font-family: Athiti;

        font-weight: 700;
        text-align: center;
        text-transform: uppercase;
        transition: all 300ms ease-in-out;
        span{
          //width: 100%;

        }
      
        
      }
      .orario:hover{
        background-color: white;
        color: black;
      }
      .o-on{
        background-color: white;
        border: 5px solid rgba(255, 255, 255, );
        background-color: #e9e1d5;

      }
      .orario-on{
  
        transition: all 300ms ease-in-out;
        color: black;

      }
      .orario-off{
        display: none;
        width: 0 !important;
      }
    }
    section:hover{
      background: #70634F;
    }
    input::selection{
      border: none;
      color: white;
    }
  }

  
}
.btn-off{
  display: none;
}
@media (max-width:900px) {
  main{
    .container{

      flex-direction: column;
      
      gap: 20px;
      padding: 20px 0 ;
      section{
        width: 80%;
        height: auto;
        padding: 20px;
        gap: 15px;
        .sec-title{
          white-space: wrap;
        }
      }
    }
  }
}
#nameError,
#dateError,
#serviceError,
#phoneError{
 color: rgb(192, 19, 19);
 text-shadow: 0 0 10px rgba(235, 195, 195, 0.779);
}
</style>
