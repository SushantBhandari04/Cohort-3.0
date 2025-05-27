import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import  GoogleProvider  from "next-auth/providers/google";
import { prisma } from "./prisma";
import bcrypt from "bcrypt"

export const authOptions: NextAuthOptions= {
    adapter: PrismaAdapter(prisma),
    secret: process.env.AUTH_SECRET, 
    pages: {
        signIn: "/signin"
    },
    session: {
        strategy: 'jwt'
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        CredentialsProvider({
          name: 'Credentials',
          credentials: {
            email: { label: "Email", type: "email", placeholder: "abc@gmail.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            if(!credentials?.email || !credentials.password ){
                return null
            }

            const existingUser = await prisma.user.findUnique({
                where: {
                    email: credentials.email
                }
            })

            if(!existingUser){
                return null;
            }

            if(existingUser.password){
                const passwordMatch = await bcrypt.compare(credentials.password, existingUser.password)

                if(!passwordMatch){
                    return null;
                }
            }
            else{
                return null;
            }
            
            return {
                id: `${existingUser.id}`,
                email: existingUser.email,
                username: existingUser.username
            }
          },
          
        })
      ],
      callbacks: {
        async jwt({ token, user }){
            console.log(token, user)
            if (user) {
                token.id = user.id;
                token.username = user.username;
                token.email = user.email;
            }
            return token; 
        },
        async session({session, user, token}){
            return {
                ...session,
                user: {
                    ...session.user,
                    username: token.username
                }
            }
        }
      }
}