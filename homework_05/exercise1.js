var express = require('express');
var axios = require('axios');
var app = express();
var port =5555;

app.enable('case sensitive routing');


app.get('*',function (request, response){
    response.status(200);
   // response.set('Content-Type', text/html);
  //  response.send('Hello Peter');
  response.get(result.data);
    response.end();
});
result = axios.get('https://randomuser.me/api/?results=10')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

//   app.get(async (req,resp)=>{
  
//     try{
//         result = await axios.get('https://randomuser.me/api/?results=10') ;
//         resp.send(result.data);
//     }catch(error){
//         console.log(error);
//     }

// })

app.listen(port, function(){
    console.log('The server is Running on port', port);
});