express = require('express');

eobj = express();

port = 5100;

//Annoynonimous method //
//eobj.listen(port, function(){
  //  console.log("Marvellous server started successfully");s
//}); // je koni request takel teva listen

//or//

function StartServer()
{
    console.log("Marvellous server started successfully - Becauase it has listen method");
}

eobj.listen(port,StartServer);

function GetMethod(request,response)
{
    response.send("Marvellous server is live -  Becauase of GET method");
}

eobj.get('/',GetMethod);