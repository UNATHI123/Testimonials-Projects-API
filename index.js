const express = require('express');
const app = express();
const projectRouter = require ('./routes/projectsRouter')
const testimonialsRouter =require('./routes/testimonialsRouter')

app.get('/', (req, res) =>{
    res.send({msg:"Welcome to Unathi Qolweni's Backend"})
})
app.use('/projects', projectRouter);
app.use('/testimonials',testimonialsRouter);
const port = process.env. PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));