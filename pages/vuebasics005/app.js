function goBack() {
    window.location.href = '../../index.html'
}

const app = Vue.createApp({
    data(){
        return{
            myInput: '',
            isVisible: true,
            inputColor: ''
        }
    },
    methods:{
        hideOrShowTrigger(){
            this.isVisible = !this.isVisible
        }
    },
    computed:{
        classList(){
            return{
                user1: this.myInput === "user1",
                user2: this.myInput === "user2",
                visible: this.isVisible,
                hidden: !this.isVisible,
            }

        },
    }
})

app.mount('#assignment')