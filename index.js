import express from 'express';
import fs from 'fs';
import { dirname } from 'path';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import reader from 'xlsx'
const _dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000


app.get('/',(req,res)=>{
    res.sendFile(_dirname+"/public/index.html");

});
app.use(bodyParser.urlencoded({extended : true}));

app.post('/submit',(req,res)=>{
    fs.appendFile("data.txt",JSON.stringify(req.body)+"\n",(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("File created");
        }
    })
    res.sendFile(_dirname+"/public/submit.html");
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});