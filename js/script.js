import { } from './utility.js';
import { slides } from './data.js';

const { createApp } = Vue;
createApp({
    data() {
        return {
            slides,
            activeId: 0
        }
    },
    methods: {

    },
    mounted() {

    }
}).mount('#app');
