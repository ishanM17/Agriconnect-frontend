let btn = document.querySelector("button");
btn.addEventListener("click", async function (e) {
  var valid = true;
  const crop = document.getElementById("crops").value;
  const quantity = document.getElementById("quantity").value;
  const location = document.getElementById("location").value;
  const price = document.getElementById("price").value;
  const doh = document.getElementById("doh").value;
  console.log("value: " + quantity); 

  if(crop === "not")
  {
    document.getElementById("crop_err").innerHTML = "Select option";
    valid = false;
  };

  if(quantity === "")
  {
    document.getElementById("qnt_err").innerHTML = "Enter a value";
    valid = false;
  }

  if(location === "")
  {
    document.getElementById("loc_err").innerHTML = "Enter your location";
    valid = false;
  }

  if(price === "")
  {
    document.getElementById("price_err").innerHTML = "Enter a value";
    valid = false;
  }

  if(doh === "")
  {
    document.getElementById("doh_err").innerHTML = "Enter Date";
    valid = false;
  }
  
});