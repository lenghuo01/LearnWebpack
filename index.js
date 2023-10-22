import {createApp,ref} from 'vue/dist/vue.esm-bundler.js'
createApp({
    setup(){
        const message = ref('hello')
        return {
            message
        }
    }
}).mount('#app')