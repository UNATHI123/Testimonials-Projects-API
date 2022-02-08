const express = require('express');
const { request } = require('express');
const app = express.Router();

let testimonials=[
   {
       id:"1",
       name:"Alex Sexwale",
       img:"https://i.postimg.cc/CLFjpZmX/alex.jpg",
       text:"Unathi doesn't talk much she is always focused on her work,and she is hard working as well as determined",

   },
   {
    id:"2",
    name:"Ammarah January",
    img:"https://i.postimg.cc/Mpk8drVm/Amaarah2-min.jpg",
    text:"Unathi is a hardworking, patient individual. She works extremely well with others and is a natural born leader. Her personality is so unique and she will be a great asset to have in any work environment.",

},
{
    id:"3",
    name:"Bongani Nomangola",
    img:"https://i.postimg.cc/Hx0Jkymf/Bongani2-min.jpg",
    text:"Unathi is a vision-focused individual that is determined to learn more and gain more experience from her surroundings.She is dedicated to given assignments and strives to be the best that she can be.",

},
{
    id:"4 ",
    name:"Kyle Mc'Bryant",
    img:"https://i.postimg.cc/3wB0FG4Y/Kyle1-min.jpg",
    text:"Unathi pays attention to improve the aesthetics of the site as well as the functionality. Throughout the entire process she is responsive, and willing to work through issues as they arise. It’s obvious she takes tremendous pride in her work, and I wouldn’t hesitate to recommend or work with her again.",

},
{
    id:"5",
    name:"Kago Pooe",
    img:"https://i.postimg.cc/kgSpGJVx/kago-min.jpg",
    text:"Unathi does a remarkable job of quickly identifying errors in a project, and can easily brainstorm ideas on how it can be improved. She is really amazing.",

},
{
    id:"6",
    name:"Zanele Moni",
    img:"https://i.postimg.cc/3wB0FG4Y/Kyle1-min.jpg",
    text:"I met Unathi from life choices academy, she is a smart, hard working individual who is always keen to learn. Unathi is a very interesting person to work with, She is always happy and give positive energy to the team.",

},

];

app.get('/', (req, res)=>{
    res.send(testimonials)
});


 app.get('/:id',(req,res)=>{
     const testimonial= testimonials.find((testimonial) => testimonial.id == req.params.id);
     if(!testimonial)res.status(404).send({msg:"Requested testimonial not found"});
     res.send(testimonial);
 });


 app.post("/",(req, res)=>{
let {name,img,text }=req.body;
if (name||img||text);
res.status(400).send({msg:"Not All information sent"});
let newTestimonials ={
    id:testimonials.length +1,
    name,
    img,
    text,
};
projects.push(newTestimonials);
res.send(newTestimonials)
 });



 app.put('/:id',(req, res)=>{
let testimonial=testimonials.findIndex((testimonial)=> testimonial.id == req.params.id);
if(!testimonial) res.status(404).send({msg:" Requested testimonials Not Found"});
let {name,img, text } =req.body;
 if(name) testimonials[testimonial].name;
 if(img) testimonials[testimonial].img;
 if(text) testimonials[testimonial].text;
 res.send(testimonial);
});



 app.delete('/:id', (req, res)=>{
testimonial=testimonials.filter((testimonial)=> testimonial.id !=req.params.id);
fixArrayId(testimonials);
res.send({msg:"item Removed"});
 });


module.exports = app