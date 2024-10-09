// JWTs assignment
// Write a function that takes in a username and password and returns a JWT token with the username encoded. Should return null if the 
// username is not a valid email or if the password is less than 6 characters. Try using the zod library here
// Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise
// Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewise
// To test, go to the 02-jwt folder and run npx jest ./tests

const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod');

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password){
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);

    if(!usernameResponse.success || !passwordResponse.success ){
        return null;
    }

    const signature = jwt.sign({
        username
    },jwtPassword);

    return signature;
}

function decodeJwt(token){
    const decoded = jwt.decode(token);

    if(decoded){
        return true;
    }
    else{
        return false;
    }
}

function verifyJwt(token){
    try{
        jwt.verify(token,jwtPassword);
        return true;
    }
    catch(e){
    }
    return false;
}

// console.log(signJwt("Sushant@gmail.com","1234567"));
console.log(verifyJwt("yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlN1c2hhbnRAZ21haWwuY29tIiwiaWF0IjoxNzI4NDQ0NjIxfQ.OcjFAKPxLEWo8qjbQRr8zYxSWw1rx610ukkKldjoCuE"))