let users = [];

const showLogin = () => {
    let str=`
    <div class='App-Container'>
    <h1>Login Form</h1>
    <p><input type="text" id="txtEmail" placeholder="email"></p>
    <p><input type="password" id="txtPass" placeholder="password"></p>
    <p><button onclick='loginUser()'>Log In</button></p>
    <p><button onclick='showRegister()'>Create Account</button></p>
    </div>
    `
    root.innerHTML = str
}

const showRegister = () => {
    let str=`
    <div class='App-Container'>
    <h1>Register Form</h1>
    <p><input type="text" id="txtName" placeholder="name"></p>
     <p><input type="text" id="txtEmail" placeholder="email"></p>
    <p><input type="password" id="txtPass" placeholder="password"></p>
    <button onclick='registerUser()'>Register</button>
    <button onclick='showLogin()'>already have an account</button>
    </div>
    `
    root.innerHTML = str
}

function registerUser() {
    const name = document.getElementById('txtName').value;
    const email = document.getElementById('txtEmail').value;
    const pass = document.getElementById('txtPass').value;
    if(name && email && pass) {
        users.push({ name, email, pass });
        alert('Registration successful! Please login.');
        showLogin();
    } else {
        alert('Please fill all fields');
    }
}

function loginUser() {
    const email = document.getElementById('txtEmail').value;
    const pass = document.getElementById('txtPass').value;
    const user = users.find(u => u.email === email && u.pass === pass);
    if(user) {
        showHome();
    } else {
        alert('Invalid email or password');
    }
}

const showHome = () => {
    let str=`
    <div class='App-Container'>
    <h1>Welcome</h1>
    <button onclick='showLogin()'>Log Out</button>
    </div>
    `
    root.innerHTML = str
}