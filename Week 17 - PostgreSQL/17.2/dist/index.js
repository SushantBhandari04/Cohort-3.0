"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pgClient = new pg_1.Client("postgresql://neondb_owner:npg_d8vIt1sNhVug@ep-dark-credit-a8yllcmv.eastus2.azure.neon.tech/neondb?sslmode=require");
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const street = req.body.street;
    const country = req.body.country;
    const city = req.body.city;
    const pincode = req.body.pincode;
    try {
        yield pgClient.connect();
        yield pgClient.query(`
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
        yield pgClient.query("BEGIN;");
        const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;";
        const response = yield pgClient.query(insertQuery, [username, email, password]);
        const userKiId = response.rows[0].id;
        const addressQuery = `INSERT INTO addresses (street, country, city, pincode, userId) VALUES ($1, $2, $3, $4, $5);`;
        const addResponse = yield pgClient.query(addressQuery, [street, country, city, pincode, userKiId]);
        console.log(addResponse.rows);
        yield pgClient.query("COMMIT;");
        res.json({
            message: "Signed up successfully."
        });
    }
    catch (e) {
        console.log(e);
        res.json({
            message: "Error!"
        });
    }
}));
app.get("/meta-data", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield pgClient.connect();
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
        const response = yield pgClient.query(query, [id]);
        console.log(response);
        res.json(response.rows);
    }
    catch (e) {
        console.log("error");
    }
}));
app.listen(3000);
