fetch("http://localhost:3000/sale/getFarmerPost/" + sessionStorage.getItem('userId'), {
  method: "GET",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: "Bearer " + sessionStorage.getItem("jwtToken"),
  },
})
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    document.querySelector(".Produce").innerHTML = json.quantity + " Kgs";
    document.querySelector(".Sale").innerHTML = json.price + " ₹";
  });

fetch("http://localhost:3000/rent/getBorrowerPost/" + sessionStorage.getItem('userId'), {
  method: "GET",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: "Bearer " + sessionStorage.getItem("jwtToken"),
  },
})
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    document.querySelector(".Renting").innerHTML = json.budget + " ₹";
    
  });
