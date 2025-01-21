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
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pgClient1 = new pg_1.Client("postgresql://neondb_owner:npg_d8vIt1sNhVug@ep-dark-credit-a8yllcmv.eastus2.azure.neon.tech/neondb?sslmode=require");
const pgClient2 = new pg_1.Client({
    user: "neondb_owner",
    password: "npg_d8vIt1sNhVug",
    port: 5432,
    host: "ep-dark-credit-a8yllcmv.eastus2.azure.neon.tech",
    database: "neondb",
    ssl: true
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield pgClient2.connect();
        // SQL string => SQL injection is possible
        const insertQuery = "INSERT INTO users (username, email, password) VALUES ('sushantbh','sushbhan','123456');";
        // better way
        const insertQuery2 = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3);';
        // const response1 = await pgClient2.query("SELECT * FROM users;")
        // const response2 = await pgClient2.query(insertQuery);
        const response3 = yield pgClient2.query("SELECT * FROM users;");
        const response = yield pgClient2.query(insertQuery2, ["amanji", "amanbhandari", "1234"]);
        const res = yield pgClient2.query("SELECT * FROM users;");
        console.log(res.rows);
    });
}
main();
