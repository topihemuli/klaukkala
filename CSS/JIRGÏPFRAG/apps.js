varfs=require("fs");
varpath=require("path");
varcors=require("cors");
varexpress=require("express");
varapp=express();
app.use(cors());

app.get("/arvot",(req,res,next)=>{
    vartiedosto=bufferFile("arvot.txt");
    res.send(tiedosto);
});
app.listen(3000,()=>{

});
function bufferFile(relPath){
    returnfs.readFileSync(path.join(__dirname,relPath),"utf8");//palauttaastringin
}