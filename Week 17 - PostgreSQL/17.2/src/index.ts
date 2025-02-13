import express from "express"
import {Client} from "pg"
const app = express();
app.use(express.json());

const pgClient = new Client("postgresql://neondb_owner:npg_d8vIt1sNhVug@ep-dark-credit-a8yllcmv.eastus2.azure.neon.tech/neondb?sslmode=require")

app.post("/signup", async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const street = req.body.street;
    const country = req.body.country;
    const city = req.body.city;
    const pincode = req.body.pincode;

    try{
        await pgClient.connect();

        await pgClient.query(`
            CREATE TABLE IF NOT EXISTS addresses (
                id SERIAL PRIMARY KEY,
                userId INTEGER NOT NULL,
                street VARCHAR(50) NOT NULL,
                country VARCHAR(50) NOT NULL,
                city VARCHAR(50) NOT NULL,
                pincode INTEGER NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE 
            );
        `);

        await pgClient.query("BEGIN;");

        const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;"
        const response = await pgClient.query(insertQuery,[username, email, password]);
        const userKiId = response.rows[0].id;

        

        const addressQuery = `INSERT INTO addresses (street, country, city, pincode, userId) VALUES ($1, $2, $3, $4, $5);`
        const addResponse = await pgClient.query(addressQuery, [street, country, city, pincode, userKiId]);
        console.log(addResponse.rows);

        await pgClient.query("COMMIT;");


        res.json({
            message: "Signed up successfully."
        })
    }
    catch(e){
        console.log(e);
        res.json({
            message: "Error!"
        })
    }
})

app.get("/meta-data", async (req, res)=>{
    

    try{

        await pgClient.connect();
        const id = req.query.id;

        const query = `
            SELECT 
                users.id, 
                users.username,
                users.email,
                addresses.city,
                addresses.country,
                addresses.street,
                addresses.pincode
            FROM users
            JOIN addresses ON users.id = addresses.userid
            WHERE users.id = $1;
        `;

        const response = await pgClient.query(query,[id]);
        console.log(response);

        res.json(response.rows)
    }
    catch(e){
        console.log("error");
    }
})

app.listen(3000);