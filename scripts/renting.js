let btn = document.querySelector("button");
btn.addEventListener("click", async function (e) {
  var valid = true;

  const equipment = document.getElementById("equipments").value;
  const date = document.getElementById("date").value;
  const address = document.getElementById("location").value;
  const duration = document.getElementById("duration").value;
  const budget = document.getElementById("budget").value;

  if (equipment === "not") {
    document.getElementById("equipment_err").innerHTML = "Select option";
    valid = false;
  }

  if (date === "") {
    document.getElementById("date_err").innerHTML = "enter date";
    valid = false;
  }

  if (address === "") {
    document.getElementById("loc_err").innerHTML = "Enter your address";
    valid = false;
  }

  if (duration === "") {
    document.getElementById("duration_err").innerHTML = "Enter a value";
    valid = false;
  }

  if (budget === "") {
    document.getElementById("budget_err").innerHTML = "Enter a value";
    valid = false;
  }

  if (valid) {
    let newPost = {
      "equipment": equipment,
      "date": date,
      "duration": duration,
      "address": address,
      "budget": budget
    }

    fetch('http://localhost:3000/rent/createPost', {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: "Bearer " + sessionStorage.getItem("jwtToken")
      }
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        location.href = './farmer.html';
      });
  }

});