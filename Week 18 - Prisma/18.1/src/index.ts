import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function addUser(){
    const user = await prisma.user.create({
        data: {
            username: "Aman",
            password: "1234",
            city: "Uttarkashi",
            age: 21
        }
    })

    console.log("User created ", user)
}

async function addTodo(){
    const todo = await prisma.todo.create({
        data: {
            title: "Gym",
            description: "Go to gym",
            done: false,
            userId: 4
        }
    })
    console.log(todo)

}

async function getTodos(){
    const todos = await prisma.todo.findMany({
        where: {
            userId: 4
        }
    })
    console.log(todos);
}

// addTodo();
// addUser();
getTodos();