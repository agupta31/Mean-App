var express=require("express"),
    app=express(),
    bodyParser=require("body-parser");

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(express.static(__dirname+"/public"))

    app.post("/findCount",function(req,res){
            res.setHeader("content-type","application/json");
            res.json(req.body.data.length);
    });
    app.listen(1321,function(){
       console.log("server started..");
    });
