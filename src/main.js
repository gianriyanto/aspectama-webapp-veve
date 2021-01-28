import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faFacebook, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { init } from 'emailjs-com';

Vue.use(VueScrollTo)
init("user_QRtMhtGACRk9EF2dvew9l");
library.add(faInstagram, faFacebook, faWhatsapp, faGlobe, faEnvelope);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
