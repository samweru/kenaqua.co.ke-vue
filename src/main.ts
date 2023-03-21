import { createApp } from 'vue'
import App from './App.vue'
import { VueReCaptcha } from 'vue-recaptcha-v3'
import axios from 'axios'
import VueAxios from 'vue-axios'

import './assets/main.css'
// import $ from 'jquery'
// import "./assets/js/jquery.min.js"
// import "./assets/js/jquery.waypoints.min.js"
// import "./assets/js/jquery-ui.min.js"
// import "./assets/js/jquery.counterup.min.js"
// import "./assets/js/popper.min.js"
// import "./assets/js/bootstrap.min.js"
// import "./assets/js/owl.carousel.min.js"
// import "./assets/js/wow.min.js"
// import "./assets/js/script.js"
// import "./assets/js/validator.min.js"

// createApp(App).mount('#app')

const vue = createApp(App)
vue.use(VueAxios, axios)
vue.use(VueReCaptcha, {
	siteKey: '6Lew6CchAAAAAG2u41SxBEmAtBUbJ7xzOiJoJ5gW',
	loaderOptions: {
		
    	useRecaptchaNet: false
  	}
})
vue.mount('#fabtheme-body')
