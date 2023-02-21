const express=require('express');
const app= express();
const path= require('path');
const User= require('./models/usermsg');
const port= process.env.PORT ||2000;
require('./db/conn');
const hbs= require('hbs');


// setting the path
const staticPath= path.join(__dirname,"../public");
const viewsPath= path.join(__dirname,"../templates/views");
const partialsPath= path.join(__dirname,"../templates/partials");
// middelware
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use(express.static(staticPath))
app.use(express.urlencoded({extended:false}))
app.set('view engine', 'hbs');
app.set("views",viewsPath);
hbs.registerPartials(partialsPath);

app.get("/",(req, res)=>{
    res.render("index");
});



app.post("/contact",async(req, res)=>{
    try{
        const userData=new User(req.body);
        await userData.save();
        res.status(201).render("index");
    }catch(error){
        res.status(500).send(error);
    }
    
});
app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
}) 