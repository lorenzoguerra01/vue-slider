import {} from './utility.js';
import {slides} from './data.js';

const {createApp} = Vue;
createApp({
    data(){
        return{
            message : 'Hello world!!!'
        }
    },
    methods :{

    }
}).mount('#app');
