import  express, {Request,Response}  from "express";
import { Client } from "pg";
const app = express();
app.use(express.json());

const pgClient = new Client("postgresql://neondb_owner:npg_d8vIt1sNhVug@ep-dark-credit-a8yllcmv.eastus2.azure.neon.tech/neondb?sslmode=require")


app.post("/signup",async (req:Request, res:Response)=>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;


    try{
        await pgClient.connect();

        const inputQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3);"
        const inputValues = [username, email, password];
    
        const response = await pgClient.query(inputQuery,inputValues);
        console.log(response);
    
        res.json({
            message: "Signed up successfully."
        })
    }
    catch(e){
        res.json({
            message: "Error occured!"
        })
    }  
})

app.listen(3000);