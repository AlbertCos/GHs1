const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/", function(req,res){

  var num1 = Number(req.body.weight);
  var num2 = Number(req.body.height);

  var result = num1 + num2;

  res.send("your BMI is the following " + result);
});

app.listen(3000, function(){
  console.log("Server 3000 is running");
});