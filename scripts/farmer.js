let totSales = 0;

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
    let totProd = 0;
    let totRev = 0;
    let soldQuant = 0;
    json.forEach((ele) => {
      totProd += ele.quantity;
      if (ele.buyer !== undefined) {
        totRev += ele.price;
        soldQuant += ele.quantity;
      }
    });
    totSales = soldQuant;
    document.querySelector(".Produce").innerHTML = totProd + " Kgs";
    document.querySelector(".Sale").innerHTML = totRev + " ₹";
    const ctx = document.getElementById("myChart");

      var myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Sold", "Total Produce"],
          datasets: [
            {
              label: "quantity in kg",
              data: [soldQuant, totProd],
              borderWidth: 1,
              backgroundColor: ["rgb(0,128,0)", "rgb(197,236,197)"],
            },
          ],
        },
        options: {
          responsive: true,
        },
      }); 
    

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
    let totRent = 0;
    json.forEach((ele) => {
      if (ele.lender !== undefined) {
        totRent += ele.budget;
      }
    })

    const ctx = document.getElementById("myChart");
    const renting = document.getElementById("Revenue_renting");

    var myChart = new Chart(renting, {
      type: "doughnut",
      data: {
        labels: ["Rent", "Sale"],
        datasets: [
          {
            label: "Rupees",
            data: [totRent, totSales],
            borderWidth: 1,
            backgroundColor: ["rgb(99,250,144)", "rgb(128,220,105)"],
          },
        ],
      },
      options: {
        responsive: true,
      },
    });


    document.querySelector(".Renting").innerHTML = totRent + " ₹";

  });
