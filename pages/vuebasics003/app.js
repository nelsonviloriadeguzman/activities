function goBack() {
     window.location.href = '../../index.html'
}
const app = Vue.createApp({
    data(){
        return{
            output1: 'This output will change by typing above',
            output2: 'This output will change by pressing enter'
        }
    },
    methods:{
        alertText(){
            alert('Hello World!')
        },
        displayOutputByKeyPress(event){
            this.output1 = event.target.value
        },
        displayOutputByEnter(event){
            this.output2 = event.target.value
        },
        
    }
})

app.mount('#assignment');