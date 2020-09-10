import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
  duration: 1000,
  easing: [0.19, 1, 0.22, 1],
  offset: -100
})

