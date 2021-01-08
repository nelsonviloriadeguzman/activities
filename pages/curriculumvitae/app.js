new Vue({
    
    el: '#app',
    vuetify: new Vuetify(),
   
    data () {
        return {
          rowHeaderStyle:{
            backgroundColor:"#1976D2",
            color: 'white'
            },
          h2Style:{
              padding:"10px"
              },
          
          shortProfile: {
            fullName: 'Nelson V. de Guzman',
            mobileNumber: '+63 926 659 3763',
            emailAddress: 'nelsonviloriadeguzman@gmail.com',
            github: 'nelsonviloriadeguzman.github.io/activities',
            imagePath: 'img/defaultImage.png'
          },
          projectList: [
            {
              projectName: 'Inventory Management System',
              projectDate: '2020',
              projectRole: 'Programmer',
              HTMLCSSJavaScript: true,
              VueJS: true,
              Vuetify: true,
              Bootstrap: false,
              Materialize: false,
              CSharp: false,
              NodeJS: true,
              PHP: false,
              MagicXPA: false,
              MicrosoftAccess: false,
              SQLServer: false,
              mySQL: true,
              couchDB:  false
              
            },
            {
              projectName: 'Item Introduction Report (Remake)',
              projectDate: '2019',
              projectRole: 'Programmer',
              HTMLCSSJavaScript: true,
              VueJS: true,
              Vuetify: true,
              Bootstrap: false,
              Materialize: false,
              CSharp: false,
              NodeJS: true,
              PHP: false,
              MagicXPA: false,
              MicrosoftAccess: false,
              SQLServer: false,
              mySQL: false,
              couchDB:  true
              
            },
            {
              projectName: 'Item Introduction Report',
              projectDate: '2018',
              projectRole: 'Support',
              HTMLCSSJavaScript: false,
              VueJS: false,
              Vuetify: false,
              Bootstrap: false,
              Materialize: false,
              CSharp: false,
              NodeJS: false,
              PHP: false,
              MagicXPA: true,
              MicrosoftAccess: false,
              SQLServer: true,
              mySQL: false,
              couchDB:  false
            },
            {
              projectName: 'Truck Monitoring System',
              projectDate: '2018',
              projectRole: 'Programmer',
              HTMLCSSJavaScript: false,
              VueJS: false,
              Vuetify: false,
              Bootstrap: false,
              Materialize: false,
              CSharp: false,
              NodeJS: false,
              PHP: false,
              MagicXPA: true,
              MicrosoftAccess: false,
              SQLServer: true,
              mySQL: false,
              couchDB:  false
              
            },
            {
              projectName: 'NCST Alumni Portal',
              projectDate: '2017',
              projectRole: 'Programmer',
              HTMLCSSJavaScript: true,
              VueJS: false,
              Vuetify: false,
              Bootstrap: false,
              Materialize: true,
              CSharp: false,
              NodeJS: false,
              PHP: true,
              MagicXPA: false,
              MicrosoftAccess: false,
              SQLServer: false,
              mySQL: true,
              couchDB:  false
            },
            {
              projectName: 'Online Services Transaction Management System',
              projectDate: '2016',
              projectRole: 'Programmer',
              HTMLCSSJavaScript: true,
              VueJS: false,
              Vuetify: false,
              Bootstrap: true,
              Materialize: false,
              CSharp: false,
              NodeJS: false,
              PHP: true,
              MagicXPA: false,
              MicrosoftAccess: false,
              SQLServer: false,
              mySQL: true,
              couchDB:  false
              
            },
            {
              projectName: 'Payroll And Time Keeping System',
              projectDate: '2015',
              projectRole: 'Programmer',
              HTMLCSSJavaScript: false,
              VueJS: false,
              Vuetify: false,
              Bootstrap: false,
              Materialize: false,
              CSharp: true,
              PHP: false,
              MagicXPA: false,
              NodeJS: false,
              MicrosoftAccess: true,
              SQLServer: false,
              mySQL: false,
              couchDB:  false
              
            },
          ],

        }
      },
      methods:{
        goBack() {
          window.location.href = '../../index.html'
        },
      }
     

  })

  
 