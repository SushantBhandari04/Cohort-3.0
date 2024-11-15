const express = require('express')
const app = express();

const users = [{
    name : "john",
    kidneys : [{
        healthy : true
    },
    {
        healthy : false
    }]
}]

app.use(express.json());

app.get("/", function(req,res){
    const johnKidneys = users[0].kidneys;
    const totalKidneys = johnKidneys.length;
    let healthyKidneys = 0;

    for(let i=0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            healthyKidneys++;
        }
    }

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
        healthy : isHealthy
    })

    res.json({
        msg : "Done"
    })
})

app.put("/", function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
       users[0].kidneys[i].healthy = true;
    }
    res.json({})
})

app.delete("/", function(req,res){
    // let allHealthy = [];
    // for(let i=0;i<users[0].kidneys.length;i++){
    //     if(users[0].kidneys[i].healthy){
    //         allHealthy.push(users[0].kidneys[i])
    //     }
    // }

    // users[0].kidneys = allHealthy;

    users[0].kidneys = users[0].kidneys.filter(function(kidney){
        return kidney.healthy
    })
    res.json({})
})

app.listen(3001);