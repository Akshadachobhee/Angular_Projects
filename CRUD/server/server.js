express = require('express'); // To load express
 
eobj = express(); // object creation

eobj.use(express.json()); // json prakarcha data use karnar aahot he sangto 

port = 5100; // can consider as variable 

eobj.listen(port , function(){
    console.log("Marvellous server is listening on port number 5100....");
}); 

eobj.get('/',function(req,res){
res.send("Marvellous server is started successfully and this is the ROOT");
});

batches = [ // array
{id : 1, name : "PPA", duration : "4 months"},
{id : 2, name : "LB", duration : "3 months"},
{id : 3, name : "PYTHON", duration : "4.5 months"},
{id : 4, name : "LSP", duration : "5 months"},
];

//Read the data from database (GET)
eobj.get('/getbatches',ReadData); // Routing ***getbatches = it is key***

function ReadData(req,res)
{
    res.send(batches);
}

eobj.get('/getBatches/:id',ReadDataID/*CALL BACK FUNCTION */); //***getbatches = it is key***

function ReadDataID(req,res) 
{
    var icnt = 0;

    for(icnt = 0; icnt < batches.length; icnt++)
    {
        if(batches[icnt].id == req.params.id)
        {
            break;
        }
    }
    if(icnt == batches.length)
    {
        res.status(400).send("There is no such batch");
    }
    else
    {
        res.send(batches[icnt]);
    }
}
// delete using fat arrow (DLETE)
eobj.delete('/batches/:id',(req,res)=> //***batches = it is key***
{

        var icnt = 0;

        for(icnt = 0; icnt < batches.length ; icnt++)
        {
            if(batches[icnt].id == req.params.id)
            {
                break;
            }
        }

        if(icnt == batches.length)
        {
            res.status(404).send("There is no such batch to delete");
        }
        else 
        {
            batches.splice(icnt,1);
            res.send(batches);
        }

});

//Create the data (POST)

eobj.post('/batches',function(req,res){  //***batches = it is key***
   const newdata = { // json object creation
    id : batches.length+1,
    name : req.body.name,
    duration : req.body.duration
   };

   batches.push(newdata); 
   res.send(batches);

});

// Updating the data from database (PUT)

eobj.put('/getbatches/:id', function(req,res){  //***getbatches = it is key***

    var icnt = 0;

    for(icnt =0 ; icnt <  batches.length ; icnt++)
    {
        if(batches[icnt].id == req.params.id)
        {
            break;
        }
    }
    if(icnt == batches.length)
    {
        res.status(404).send("There is no record to update");
    }
    else
    {
        batches[icnt].name = req.body.name;
        batches[icnt].durartion = req.body.duration;

        res.send(batches[icnt]);
    }
});