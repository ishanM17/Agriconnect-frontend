fetch("", {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + sessionStorage.getItem("jwtToken"),
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      document.querySelector(".card-detail .Sale").innerHTML = json.price;
      document.querySelector(".card-detail .Renting").innerHTML = json.quntity;
    });
  
  fetch("", {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + sessionStorage.getItem("jwtToken"),
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      document.querySelector(".card-detail .Renting").innerHTML = json.budget;
      
    });
  