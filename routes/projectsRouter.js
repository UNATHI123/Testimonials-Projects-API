const express = require('express');
const { request } = require('express');
const app = express.Router();
const fixArrayId =require('../helpers');

let projects=[
    {"id":1,"title":"Point of Sales Project", "details":"Vue Js", "img":"/home/lifechoices/UNATHI2/unathi-portfolio/src/assets/img-p/Screenshot 2022-02-02 at 15-56-12 Page Title.png","live":"https://wizardly-mayer-23a308.netlify.app/","github":"https://github.com/UNATHI123/POS.git"} ,  
        {"id":2,"title":"Vue Calculator", "details":"Vue Js", "img":"" ,"live":"","github":"https://github.com/UNATHI123/VUECALC2.git"},
        {"id":3,"title":"Reaction Game", "details":"Vue Js", "img":"" ,"live":"","github":"https://github.com/UNATHI123/Reaction-Game.git"},
        {"id":4,"title":"BMI", "details":" Js", "img":"","live":"","github":""},
        {"id":5,"title":"Mock Portfolio", "details":"Bootsrap","img":"","live":"","github":"https://github.com/UNATHI123/unathi.git"},
        {"id":6,"title":"Flip Cards", "details":"HTML/CSS", "img":"","live":"","github":"https://github.com/UNATHI123/flip-cards.git"}
       
];
///// GET ALL PROJECTS ///
app.get('/', (req, res)=>{
    res.send(projects)
});
//// GET PROJECTS BY ID /////
 app.get('/:id',(req,res)=>{
     const project= projects.find((project) => project.id == req.params.id);
     if(!project)res.status(404).send({msg:"Project not found"});
     res.send(project);
 });
// ADD NEW PROJECT//
 app.post("/",(req, res)=>{
let {title,details,img,github ,live }=request.body;
if (title||img||details||img||github ||live);
res.status(400).send({msg:"Not All information sent"});
let newProject ={
    id:projects.length +1,
    title,
    details,
    img,
    live,
    github,
};
projects.push(newProject);
res.send(newProject)
 });

// PROJECT UPDATE//
 app.put('/:id',(req, res)=>{
let project=projects.findIndex((project)=> project.id == req.params.id);
if(!project) res.status(404).send({msg:"Poject Not Found"});
// //
let {title,details,img,github ,live } =req.body;

 if(title) projects[project].title;
 if(details) projects[project].details;
 if(img) projects[project].img;
 if(live) projects[project].live;
 if(github) projects[project].github;
//  //
 res.send(project);
});

// DELETE PROJECT//
 app.delete('/:id', (req, res)=>{
projects=projects.filter((project)=> project.id !=req.params.id);
fixArrayId(projects);
res.send({msg:"item Removed"});
 });
module.exports = app