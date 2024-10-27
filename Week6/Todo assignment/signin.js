const axios = require('axios');
async function signin(){
    const username = document.getElementById("signin-username").value;
    const password = document.getElementById("signin-password").value;
    await axios.post("http://localhost:3000/signin",{
        username: username,
        password: password
    })
    alert("Signed in successfully.")
    // window.location.href = 'signin.html';
}