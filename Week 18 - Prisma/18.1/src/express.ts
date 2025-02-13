import express from "express";
import { PrismaClient } from "@prisma/client";
const app = express();
app.use(express.json());
const prisma = new PrismaClient();

app.get("/users", async (req,res)=>{
    const users = await prisma.user.findMany();
    res.json({
        users
    })
})
app.get("/todos/:id", async (req, res) => {
    const id = req.params.id;
    const users = await prisma.user.findFirst({
        where: {
            id: parseInt(id)
        },
        select: {
            todos: true,
            username: true,
            password: true
        }
    });
    res.json(users);
});

app.listen(3000);