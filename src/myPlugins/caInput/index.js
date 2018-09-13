import caInput from './caInput.vue'

const install = function(Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
        Vue = window.Vue
    }
    Vue.component('caInput', caInput)
}

const VueCaInput = {
    install
}

export default VueCaInput
export { caInput }
