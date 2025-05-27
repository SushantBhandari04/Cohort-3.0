import { PrismaClient } from "@prisma/client/extension";
import NextAuth, { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import  GithubProvider  from "next-auth/providers/github";
const prisma = new PrismaClient();

// export const authConfig: NextAuthOptions = {
//     providers: [
//         CredentialsProvider({
//             name: "Sign In",
//             credentials: {
//                 email: {
//                     label: "Email",
//                     type: "email",
//                     placeholder: "example@gmail.com"
//                 },
//                 password: {
//                     label: "Password",
//                     type: "password"
//                 }
//             },
//             async authorize(credentials){
//                 if(!credentials || !credentials.email || !credentials.password ){
//                     return null;
//                 }

//                 const dbUser = await prisma.user.findUnique({
//                     where: {
//                         email: credentials.email
//                     }
//                 })

//                 if(dbUser && dbUser.password === credentials.password){
//                     return dbUser
//                 }
//                 else{
//                     throw new Error("Password Incorrect!")
//                 }
//             }
//         })
//     ],
//     callbacks:{
//         async jwt({ token, user }){
//             if(user){
//                 token.id = user.id
//                 token.isVerified = user.isVerified
//                 token.isAcceptingMessages = user.isAcceptingMessages
//                 token.email = user.email
//             }
//             return token
//         },
//         async session({session, token}){
//             if(token){
//                 session.user.id = token.id
//                 session.user.isVerified = token.isVerified
//                 session.user.isAcceptingMessages = token.isAcceptingMessages
//                 session.user.email = token.email
//             }
//             return session
//         }
//     },
//     pages: {
//         signIn: "/signin"
//     },
//     session: {
//         strategy: "jwt"
//     },
//     secret: process.env.AUTH_SECRET
// }


// const handler = NextAuth({
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_CLIENT_ID,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET,
//     }),
//   ],
// });

// export { handler as GET, handler as POST };
