import { reactive } from 'vue';

export const state = reactive({
    sideMenuValue: 0,

    infomenu: 0,
    arrCart:[],
    arrId:[],
    arrQt:[],
    totCart:0,
    //setting:[],
    setting:[
        {status: 1},
        {status: 1},
        {status: 1},
    ],
    actvPage: 1,
    //baseUrl: 'https://db.dashboardristorante.it/',
    baseUrl: 'http://127.0.0.1:8000/',
    getImageUrl(image) {
		return image
			? this.baseUrl + 'public/storage/' + image
			: this.baseUrl + 'public/storage/default.png';
	},

    openside(){
        if(this.sideMenuValue){
            this.sideMenuValue = 0
        }else{
            this.sideMenuValue = 1
            
        }
    },
    updateActvPage(page){
        this.sideMenuValue = 0
        this.actvPage = page;
    },
    infoside() {
        if (this.infomenu) {
            this.infomenu = 0
        } else {
            this.infomenu = 1
        }
    },
    
});