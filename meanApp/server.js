var express=require("express"),
    app=express(),
   bodyParser=require("body-parser");

   app.use(bodyParser.urlencoded({extended:true}));
   app.use(bodyParser.json());

   app.use(express.static("public"));

   app.post("/count",function(req,res){

      function x(a,b){

            res.json(req.body.data.length);
            //us can use res.send(req.body.data) for sending string values but not numeric
            //values so I have used res.json

      };
      x();

   });

   app.listen(3000,function(){
     console.log("server started..");
   });
