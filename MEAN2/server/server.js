express = require('express');

eobj = express();

eobj.listen(5100,function(){
    console.log("In ");
});

function GetMethod(request,response)
{
    response.send("Marvellous server is live -  Becauase of GET method");
}

eobj.get('/',GetMethod);