function goBack() {
    window.location.href = '../../index.html'
}

const app = Vue.createApp({
    data(){
        return{
            taskInput: '',
            taskList: ['HTML','CSS','Javascript'],
            taskVisibility: true
        }
    },
    computed:{
        showOrHideText(){
            return this.taskVisibility ? 'Hide' : 'Show';
        }
    },
    methods:{
        addTask(){
            this.taskList.push(this.taskInput);
        },
        removeTask(index){
            this.taskList.splice(index,1);
        },
        showOrHideTask(){
            this.taskVisibility = !this.taskVisibility;
        }
    }
})

app.mount('#assignment')