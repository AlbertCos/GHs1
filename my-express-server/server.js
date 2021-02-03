const express = require ("express");
const app = express();

app.get("/", function(request, response){
  response.send("<h1>Hello, world!</h1>");
});

app.get("/about", function(request, response){
  response.send("<h1>I am programer</h1> <p> Texting de information regarding request and response with connection to local server</p>");
})

app.listen(3000, function(){
  console.log("server started on port 3000");
});
