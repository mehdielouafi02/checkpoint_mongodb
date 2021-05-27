const express =require("express");

const app = express();
app.use(express.json())



app.set('view engine' , 'pug') ;

app.get('/' , (req , res) => {

    // http://localhost:4000/

res.send('hello everybody!!')



} )
console.log(__dirname)

app.get('/home' , (req , res) => {

    // http://localhost:4000/home


res.sendFile(__dirname+'/views/home.html')




})

app.get('/contact' , (req,res) => {


    res.render('contact' , {title : "contact" , message : "Welcome to contact page"})
    
    
    
    })


    const uuid = require ('uuid')

    var users = [
      {id:uuid.v4(),  Lastname: "Ben Lahmer", Firstname: "Fares", Email: "fares@gmail.com", age:"26"   },
      {id:uuid.v4(),Lastname: "Kefi", Firstname: "Seif", Email: "kefi@gmail.com", age:"15"},
      {id:uuid.v4(),Lastname: "Fatnassi", Firstname: "Sarra", Email: "sarra.f@gmail.com", age:"40"},
      {id:uuid.v4(),Lastname: "Ben Yahia", Firstname: "Rym", age:"4"},
      {id:uuid.v4(),Lastname: "Cherif", Firstname: "Sami", age:"3"},
      
    ]
    app.get('/users' , (req,res) => {

        // http://localhost:4000/users
        
        res.status(200).send(users) 
        
        
        
        })

        app.get('/users/:id' , (req,res) => {


            let user = users.filter ((el) =>  el.id === req.params.id ) 
            
            
            res.status(200).send(user)
            
            
            
            
            })
            
app.post('/users' , (req,res) => {


    users = [...users , {id:uuid.v4() , ...req.body}]
    
    
    res.send({msg : "user added" , users}) 
    
    
    
    })


           

                app.put('/users/:userID' ,  (req,res) => {

                    users = users.map (el => el.id === req.params.userID ? el = {...el , ...req.body} : el)
                    
                    res.send({msg:"user Updated" , users})
                    
                    }  )
                    app.delete('/users/:userID' , (req , res) => {


                        users = users.filter(el => el.id !== req.params.userID)
                        
                        res.send({msg:"user deleted" , users})
                        
                        
                        })
                        app.delete('/users/:userID' , (req , res) => {


                            users = users.filter(el => el.id !== req.params.userID)
                            
                            res.send({msg:"user deleted" , users})
                            
                            
                            })
                        

                
                
               

            
        

app.listen(4000, (err) => {
    err
      ? console.log("server error")
      : console.log("server is running on port 4000");
    
     });