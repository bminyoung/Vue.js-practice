import Vue from 'vue';
import NumberBaseball from './NumberBaseball';
//import NumberBaseball from './NumberBaseball.vue';인데 resolve의 extension 설정때문에 알아서함

//Vue의 el 역할
new Vue(NumberBaseball).$mount('#root');