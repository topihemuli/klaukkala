var fs = require("fs");
var path = require("path");
var cors = require("cors");
var express = require("express");
var app = express();
app.use(cors());

//app.get("/url", (req, res, next) => {
//    res.json(["test1", "test2", "test3"]);
//});
app.get("/arvot", (req, res, next) => {
    var tiedosto = bufferFile ("arvot.txt");
    res.send(tiedosto);
});
app.listen(3000, ()=>{

});

function bufferFile(relPath){
    return fs.readFileSync(path.join(__dirname, relPath),"utf8"); //palauttaa stringin
}