const signupForm = document.getElementById('signupForm');
if (signupForm){
    signupForm.addEventListener('submit',function(e){
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        if (!name || !email || !password)
            return alert("Kindly fill all the feilds");
        const user = {name, email, password};
        localStorage.setItem("user",JSON.stringify(user));
        alert("Signup sucessfull! Now you can login.");
        window.location.href= "login.html";

    });
}

const loginForm = document.getElementById('loginform');
if (loginForm){
    loginForm.addEventListener('submit', function(e){
        e.preventDefault();
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        const storedUserDetails = JSON.parse(localStorage.getItem('user'));

        if (storedUserDetails && storedUserDetails.email === email && storedUserDetails.password === password){
            alert('Login sucessful');
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = "index.html";

        }else{
            alert('Invalid email or password!');
        }
    });
}