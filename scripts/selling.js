let btn = document.querySelector("button");
btn.addEventListener("click", async function (e) {
  var valid = true;
  const crop = document.getElementById("crops").value;
  const quantity = document.getElementById("quantity").value;
  const farmer_address = document.getElementById("location").value;
  const price = document.getElementById("price").value;
  const doh = document.getElementById("doh").value;

  if (crop === "not") {
    document.getElementById("crop_err").innerHTML = "Select option";
    valid = false;
  };

  if (quantity === "") {
    document.getElementById("qnt_err").innerHTML = "Enter a value";
    valid = false;
  }

  if (farmer_address === "") {
    document.getElementById("loc_err").innerHTML = "Enter your address";
    valid = false;
  }

  if (price === "") {
    document.getElementById("price_err").innerHTML = "Enter a value";
    valid = false;
  }

  if (doh === "") {
    document.getElementById("doh_err").innerHTML = "Enter Date";
    valid = false;
  }

  if (valid) {
    let newPost = {
      "crop": crop,
      "quantity": quantity,
      "farmer_address": farmer_address,
      "price": price,
      "date_of_harvest": doh
    }

    fetch('http://localhost:3000/sale/createPost', {
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
        location.href='./farmer.html'
      });
  }
});