new Vue({
    
    el: '#app',
    vuetify: new Vuetify(),
   
    data () {
        return {
          btnStyle : { 'margin-left': '-20px'},
          iFrameStyle: { width: '100%', height: '100%'},
          isActive: false,
          defaultVideoTitle: 'Server Side Installation',
          defaultVideoPath: 'https://www.youtube.com/embed/ib3-pmIJh4g',
          videoList: [
            { title: 'Server Side Installation',                          path: 'https://www.youtube.com/embed/ib3-pmIJh4g',  isActive: true },
            { title: 'Client Side Installation',                          path: 'https://www.youtube.com/embed/t-V3LbvXgcI',  isActive: false },
            { title: 'Custom Plugins and .env',                           path: '', isActive: false },
            { title: 'Installing moment.js package globally',             path: '', isActive: false },
            { title: 'Installing axios package globally',                 path: '', isActive: false },
            { title: 'Installing mdi icon package to work even offline',  path: '', isActive: false},
            { title: 'Installing pdfmake package',                        path: '', isActive: false },
            { title: 'Installing pdfmake fonts package',                  path: '', isActive: false },
            { title: 'Deploying Server',                                  path: '', isActive: false },
            { title: 'Deploying Client',                                  path: '', isActive: false },
          ],
        }
      },
      methods:{
        goBack() {
          window.location.href = '../../index.html'
        },
        changeVideo(videoTitle,videoPath, clickedButtonIndex){
          
          let counter = 0
          this.videoList.map(rec=>{
            if (counter === clickedButtonIndex){
              rec.isActive = true
            } 
            else{
              rec.isActive = false
            }
            counter+=1
          })

          this.defaultVideoTitle = videoTitle
          this.defaultVideoPath = videoPath
        }
      }
     

  })

  
 