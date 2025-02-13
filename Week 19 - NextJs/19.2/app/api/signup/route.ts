import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function POST(req:NextRequest){
    
    const {username, password} = await req.json();

    const response = await prisma.user.create({
        data:{
            username,
            password
        } 
    })

    return NextResponse.json({
        message: "Signed up."
    })
}