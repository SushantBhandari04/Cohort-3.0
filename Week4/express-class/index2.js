/////////////////////////////   Backend of hospital game  //////////////////////////////////////////

const express = require('express');
const app = express();

const users = [{
    name : "John",
    kidneys : [{
        healthy : false
    },
    {
        healthy : true
    }]
}]

app.use(express.json());

app.get("/",function(req,res){
    const johnKidneys = users[0].kidneys;
    const totalKidneys = johnKidneys.length;
    // let healthyKidneys = 0;

    // for(let i=0;i<johnKidneys.length;i++){
    //     if(johnKidneys[i].healthy){
    //         healthyKidneys++;
    //     }
    // }


    // using filter
    const healthyKidneys = users[0].kidneys.filter((kidney) => {
        return kidney.healthy
    }).length



    const unhealthyKidneys = totalKidneys - healthyKidneys;
    res.json({
        totalKidneys,
        healthyKidneys,
        unhealthyKidneys
    })
})

app.post("/", function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", function(req,res){

    if(users[0].kidneys.filter((kidney) => {
        return !kidney.healthy
    }).length == 0){
        res.status(411).json({
            msg : "No unhealthy kidney"
        })
    }
    else{
        for(let i=0;i<users[0].kidneys.length;i++){
            users[0].kidneys[i].healthy = true;
        }
        res.json({})
    }
    
})

// Removing all the unhealthy kidneys
app.delete("/", function(req,res){
    // show 411 if there is no unhelathy kidneys

    if(isThereAtleastOneUnhealthyKidney()){
        // const newKidneys = [];
        // for(let i=0;i<users[0].kidneys.length;i++){
        //     if(users[0].kidneys[i].healthy){
        //         newKidneys.push({
        //             healthy: true
        //         })
        //     }
        // }


        // using filter
        users[0].kidneys = users[0].kidneys.filter((kidney) => {
            return kidney.healthy
        })

        users[0].kidneys = newKidneys;
        res.json({
            msg: "Done!"
        })
    }
    else{
        res.status(411).json({
            msg: "No unhealthy kidney"
        })
    }
    
})

function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;

    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }

    return atleastOneUnhealthyKidney;
}

app.listen(3000);

