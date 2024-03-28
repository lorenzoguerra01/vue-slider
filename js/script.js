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
        prevImg() {
            if (this.activeId > 0) {
                this.activeId--
            } else {
                this.activeId = slides.length - 1
            }
        },
        nextImg() {
            if (this.activeId < slides.length - 1) {
                this.activeId++
            } else {
                this.activeId = 0
            }
        },
        currentImg(index) {
            this.activeId = index
        }
    },
    mounted() {

    }
}).mount('#app');
