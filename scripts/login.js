function login() {
    var valid = true;

    document.getElementById("e_error").innerHTML = "";
    document.getElementById("pass_error").innerHTML = "";
    let email = document.getElementById("email-input").value;
    let password = document.getElementById("password").value;

    if(email === "")
    {
      document.getElementById("e_error").innerHTML = "Enter your email";
      valid = false;
    }
    if(password === "")
    {
      document.getElementById("pass_error").innerHTML = "Enter your password";
      valid = false;
    }

    if(valid === true)
    {
      let currentUser = {
      "email": email,
      "password": password
    };
    fetch('https://localhost:3000/user/login', {
        method: 'POST',
        body: JSON.stringify(currentUser),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.message === 'Success') {
          let jwtToken = json.data.user.token;
          sessionStorage.setItem("jwtToken", jwtToken);
          sessionStorage.setItem('userEmail', email);
          location.href = './dashboard.html';
        } else {
          alert('Invalid Credentials');
        }
      });
    return;
    }
    
  }