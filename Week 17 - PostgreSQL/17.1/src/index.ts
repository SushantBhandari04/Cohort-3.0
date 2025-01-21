import { Client } from "pg"
const pgClient1 = new Client("postgresql://neondb_owner:npg_d8vIt1sNhVug@ep-dark-credit-a8yllcmv.eastus2.azure.neon.tech/neondb?sslmode=require")

const pgClient2 = new Client({
    user: "neondb_owner",
    password: "npg_d8vIt1sNhVug",
    port: 5432,
    host: "ep-dark-credit-a8yllcmv.eastus2.azure.neon.tech",
    database: "neondb",
    ssl: true
})

async function main(){
    await pgClient2.connect();

    // SQL string => SQL injection is possible
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ('sushantbh','sushbhan','123456');"
    
    // better way
    const insertQuery2 = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3);'
    
    // const response1 = await pgClient2.query("SELECT * FROM users;")
    // const response2 = await pgClient2.query(insertQuery);
    const response3 = await pgClient2.query("SELECT * FROM users;")
    

    const response = await pgClient2.query(insertQuery2,["amanji","amanbhandari","1234"])
    const res = await pgClient2.query("SELECT * FROM users;")
    console.log(res.rows);
}   

main();