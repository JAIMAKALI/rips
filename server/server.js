var express=require('express');
var hbs=require('hbs');
var path=require('path');


var port=process.env.PORT || 3000;

var app=express();
//set engine
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/../views/partials');
//middleware
app.use(express.static(path.join(__dirname,"/../views")));

app.get('/',(req,res)=>{
  res.render('home');
}) ;

app.get('/about',(req,res)=>{
  res.render('about');
});

app.get('/contact',(req,res)=>{
  res.render('contactus');
})


app.get('/library',(req,res)=>{
  res.render('library');
})

app.get('/transports',(req,res)=>{
  res.render('transports');
})
app.get('/computerlab',(req,res)=>{
  res.render('computerlab');
})
app.get('/director',(req,res)=>{
  res.render('director');
})

app.get('/hostels',(req,res)=>{
  res.render('hostel');
})
app.get('/playground',(req,res)=>{
  res.render('playground');
})

app.listen(port,()=>{
  console.log('server is listening on port 3000');
})
