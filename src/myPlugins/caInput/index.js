import CaInputPc from './caInput.vue'

const install = function(Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
        Vue = window.Vue
    }
    Vue.component('ca-input-pc', caInputPc)
}

const VueCaInput = {
    install
}

export default VueCaInput
export { CaInputPc }
