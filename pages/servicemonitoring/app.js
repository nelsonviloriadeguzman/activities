new Vue({
    
    el: '#app',
    vuetify: new Vuetify(),
    computed:{
      imageSize(){
        return { height: '75px', width: '75px', padding: '3px'}
      },
      nameHeaderStyle(){
        return { width: '175px'}
      }
    },
    data () {
        return {
          itemList: [
            {
              name: 'Nelson de Guzman',
              imagePath: 'img/defaultImage.png'
              
            },
          ],

        }
      },
      methods:{
        goBack() {
          window.location.href = '../../index.html'
        },
        addNew(){
          this.itemList.push({
            name: 'Click to update',
            imagePath: 'img/defaultImage.png'
          })
        },
        removeItem(itemIndex){
          this.itemList.splice(itemIndex,1);
        },
      }
     

  })

  
 