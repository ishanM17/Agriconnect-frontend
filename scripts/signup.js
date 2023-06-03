let btn = document.querySelector("button");
btn.addEventListener("click", async function (e) {

    e.preventDefault();

    let valid = true;
    let fName = document.querySelector("input[name=fName]").value;
    let email = document.querySelector("input[name=email]").value;
    let password = document.querySelector("input[name=password]").value;
    let confirmPassword = document.querySelector("input[name=confirmPassword]").value;
    let role = document.getElementById("role").value;

    document.getElementById("f_error").innerHTML = "";
    document.getElementById("e_error").innerHTML = "";
    document.getElementById("pass_error").innerHTML = "";
    document.getElementById("cf_error").innerHTML = "";

    // validation
    var name_p = /^[a-z A-Z]+$/;
    if (!fName.match(name_p)) {
        document.getElementById("f_error").innerHTML = "enter a valid name";
        valid = false;
    }

    check = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
    if (email.match(check)) {
        document.getElementById("e_error").innerHTML = "";
    }
    else {
        document.getElementById("e_error").innerHTML = "enter a valid email";
        valid = false;
    }


    if (password.length < 6) {
        document.getElementById("pass_error").innerHTML = "Enter more than 6 characters";
        valid = false;
    }

    if (password == confirmPassword) {
        document.getElementById("cf_error").innerHTML = "";
    }
    else {
        document.getElementById("cf_error").innerHTML = "password does not match ";
        valid = false;
    }


    if (valid) {
        btn.disabled = true;
        let newUser = {
            "name": fName,
            "email": email,
            "password": password,
            "role": role
        };

        fetch('http://localhost:3000/user/register', {
            method: 'POST',
            body: JSON.stringify(newUser),
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
                } else if (json.status === 'User already exists') {
                    alert("user already exists");
                    location.href = './login.html';
                }
            });

    }
    else return;

});