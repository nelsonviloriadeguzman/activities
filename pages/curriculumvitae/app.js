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
          imgStyle:{
            border: '1px solid black'
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
          
      getBase64Image(imgr) {
          var img = new Image()
          img.src = imgr
          // Create an empty canvas element
          var canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;

          // Copy the image contents to the canvas
          var ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);

          // Get the data-URL formatted image
          // Firefox supports PNG and JPEG. You could check img.src to
          // guess the original format, but be aware the using "image/jpg"
          // will re-encode the image.
          var dataURL = canvas.toDataURL("image/png");

          return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
        }
        
        printPDF(PrintOrDownload){

          var dd = {
            content: [
                
                //WORK EXPERIECE
              
                {
                    layout: 'noBorders',
                table: {
                    widths:['15%','45%','40%'],
                  body: [[	{text: 'data:image/png;base64,'+ getBase64Image('https://media-exp1.licdn.com/dms/image/C4E03AQH9D_Ke8XwipQ/profile-displayphoto-shrink_200_200/0/1610450121668?e=1616025600&v=beta&t=CTHPJYC0NTNPV3rM2vXoWVGU7oApRJCnSbKjKzq6QH0')},
                          {
                              style: 'infoStyle',
                                    layout: 'noBorders',
                                table: {
                                    widths:['*'],
                                  body: [[{ text: `${this.shortProfile.fullName}
                                                  ${this.shortProfile.mobileNumber}
                                                  ${this.shortProfile.emailAddress}
                                                  ${this.shortProfile.github}`}]]
                                    },
                                  
                                },
                          {
                                    layout: 'noBorders',
                                table: {
                                    widths:['*'],
                                  body: [[{ text: 'Work Experience', style: 'headerStyle',}],
                                          [{ text: '\nH.R.D. Singapore Pte., Ltd.', style:"miniTitleStyle",}],
                                          [{ text: 'Blk 3, Cavite Eco Zone II Gen. Trias, Cavite\n(046) 476-0545 / (046) 476-0465 / (02) 857-8210\nOffice Staff / Programmer\nJune 2018 - September 2020\n\n'}]
                                      ]
                                    },
                                  
                                }
                              ]]
                },
                  
                },
                
              //DUTIES AND RESPONSIBILITIES
                {
                    layout: 'noBorders',
                    style: 'headerStyle',
                table: {
                    widths:['*'],
                  body: [[{ text: 'Duties and Responsibilities',}]]
                },
                  
                },
                {
                    layout: 'noBorders',
                table: {
                    widths:['*','*'],
                  body: [[{ text: '\nDaily', style:"miniTitleStyle"},
                          { text: '\nPeriodic/Occational', style:"miniTitleStyle"},
                          ],
                          
                          [{ text: "Analyze system flow and the process of all handled system\nModify existing system for improvement\nFixing system troubles\nTracing of missing data or if there's data discrepancy\nMonitor server activities and performace\nAct as support for system user for their system inqueries\nData modification for correction as request by user\nPerforms data extraction as requested by user\n\n"},
                          { text: 'Update of master tables if needed as users request\nSupport and attends to co-members queries in technial aspects\nSuggest improvement for lessen manual checking\n Develop the approved requested system\nAdminister the newly developed system from trial deployment up to actual impementation\nAttend meeting with requester as part of system development and system modification if needed\nTrainer of newly hired staffs\n\n'},
                          ],
                          
                          [{},{}]
                          ],
                          
                },
                  
                },
                //EDUCATION
                {
                    layout: 'noBorders',
                    style: 'headerStyle',
                table: {
                    widths:['*'],
                  body: [[{ text: 'Education',}]]
                },
                  
                },
                {
                    layout: 'noBorders',
                table: {
                    widths:['*','*'],
                  body: [[{ text: '\nNational College of Science and Technology', style:"miniTitleStyle"},
                          { text: '\nManalo Academy School', style:"miniTitleStyle"},
                          ],
                          [{ text: 'Amafel Building Aguinaldo Highway, Dasmariñas City, Cavite \n (046) 416-NCST (6278) \n B.S in Information Technology \n 2013 - 2017'},
                          { text: 'Gen. Trias, Cavite \n High School \n 2003 - 2007'},
                          ],
                          [{},{}]
                          ]
                },
                  
                },
                
            ],
            styles: {
              headerStyle: {
                  borderColor: 'white',
                  fillColor: '#1976D2',
                  color: 'white',
                fontSize: 14,
                bold: true
              },
              miniTitleStyle: {
                bold: true
              },
              infoStyle: {
                  bold: true,
                  fontSize: 15,
              }
              
            },
            pageOrientation: 'landscape',
            
          }

          PrintOrDownload === 1 ? createPdf(dd).download('CV - Nelson V. de Guzman') : createPdf(dd).open()
      
        }
      }
     

  })

  
 
