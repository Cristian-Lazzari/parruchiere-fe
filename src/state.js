import { reactive } from 'vue';

export const state = reactive({
    sideMenuValue: 0,

    infomenu: 0,
    arrCart: [],
    arrId: [],
    arrQt: [],
    fakeArrgallery: [
        {
            "id": 0,
            "name": "Leonard",
            "image": "/src/assets/img/posts.png",
            "link": false
        },
        {
            "id": 1,
            "name": "Faulkner",
            "image": "/src/assets/img/posts.png",
            "link": true
        },
        {
            "id": 2,
            "name": "Campbell",
            "image": "/src/assets/img/posts.png",
            "link": false
        },
        {
            "id": 3,
            "name": "Porter",
            "image": "/src/assets/img/posts.png",
            "link": false
        },
        {
            "id": 4,
            "name": "Mcdonald",
            "image": "/src/assets/img/posts.png",
            "link": true
        },
        {
            "id": 5,
            "name": "Sosa",
            "image": "/src/assets/img/posts.png",
            "link": true
        },
        {
            "id": 6,
            "name": "Cardenas",
            "image": "/src/assets/img/posts.png",
            "link": true
        },
        {
            "id": 7,
            "name": "Herman",
            "image": "/src/assets/img/posts.png",
            "link": true
        },
        {
            "id": 8,
            "name": "Gilmore",
            "image": "/src/assets/img/posts.png",
            "link": false
        },
        {
            "id": 9,
            "name": "Dale",
            "image": "/src/assets/img/posts.png",
            "link": true
        }
        ,
    ],
    totCart: 0,
    //setting:[],
    setting: [
        { status: 1 },
        { status: 1 },
        { status: 1 },
    ],
    actvPage: 1,
    baseUrl: 'https://dashboard-ce.future-plus.it/',
    //baseUrl: 'http://127.0.0.1:8000/',
    getImageUrl(image) {
        return image
            ? this.baseUrl + 'public/storage/' + image
            : this.baseUrl + 'public/storage/default.png';
    },

    openside() {
        if (this.sideMenuValue) {
            this.sideMenuValue = 0
        } else {
            this.sideMenuValue = 1

        }
    },
    updateActvPage(page) {
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