let btn = document.querySelector("button");
btn.addEventListener("click", async function (e) {
  var valid = true;

  document.getElementById("e_error").innerHTML = "";
  document.getElementById("pass_error").innerHTML = "";
  let email = document.getElementById("email-input").value;
  let password = document.getElementById("password").value;

  if (email === "") {
    document.getElementById("e_error").innerHTML = "Enter your email";
    valid = false;
  }
  if (password === "") {
    document.getElementById("pass_error").innerHTML = "Enter your password";
    valid = false;
  }

  if (valid === true) {

    btn.disabled = true;

    let currentUser = {
      "email": email,
      "password": password
    };

    fetch('http://localhost:3000/user/login', {
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
          let userId = json.data.user._id;
          let role = json.data.user.role;
          sessionStorage.setItem("jwtToken", jwtToken);
          sessionStorage.setItem("userId", userId);
          sessionStorage.setItem("role", role);

          if (role === 'Farmer') {
            location.href = './farmer.html';
          } else if (role === 'Industry Buyer') {
            location.href = './buyer.html';
          } else if (role === 'Transport Facilitator') {
            location.href = './Transport.html';
          }

        } else {
          alert('Invalid Credentials');
          btn.disabled = false;
        }
      });
    return;
  }
});