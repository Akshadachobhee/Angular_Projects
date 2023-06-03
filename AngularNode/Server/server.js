const express = require('express');

const app = express();

app.listen(5100, function(req,res){
    console.log("Marvellous Server is started successfully")
});

app.get('/',MArvellousGet);

function MArvellousGet(req,res)
{
    res.send("MarvellousServer is ON");
}

app.get('/getBatches',MarvellousGetBatches);

function MarvellousGetBatches(req,res)
{
    res.json({"batch":"PPA","Fees":18500});
}