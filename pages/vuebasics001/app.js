function goBack() {
     window.location.href = '../../index.html'
}

const app = Vue.createApp({
    data(){
        return {
            myData: {
                myName: 'Nelson de Guzman',
                myAge: 21,
                myImage: 'https://scontent.fmnl6-1.fna.fbcdn.net/v/t1.30497-1/c59.0.200.200a/p200x200/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&ccb=2&_nc_sid=7206a8&_nc_ohc=PyOX5rS6bScAX-FaYml&_nc_ht=scontent.fmnl6-1.fna&tp=27&oh=9aa2aeac6891e4f8fcc0aee69152a5a7&oe=600E4B84'}
        }
    },
    methods:{
        RandomNumberBetweenOneAndZero(){
            return Math.round(Math.random())
        }
    }
})

app.mount('#assignment')