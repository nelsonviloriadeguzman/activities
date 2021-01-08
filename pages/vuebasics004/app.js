function goBack() {
     window.location.href = '../../index.html'
}

const app = Vue.createApp({
    data(){
        return{
            counter: 0,
        }
    },
    methods:{
        addCounter(val){
            this.counter += val
        },
    },
    computed:{
        result(){
            if (this.counter <= 37){
                return 'Not there yet';
            }else{
                return 'Too much!';
            }
        },
    },
    watch:{
        result(){
            setTimeout(()=> {
                this.counter = 0
            }, 5000);
        }
    }
})

app.mount('#assignment')