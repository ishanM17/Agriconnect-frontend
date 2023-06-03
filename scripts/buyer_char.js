const ctx = document.getElementById("myChart");
const renting = document.getElementById("Revenue_renting");
const produce = document.getElementById("Total_Produce");

var myChart = new Chart(produce, {
  type: "line",
  data: {
    labels: ["Wheat", "Paddy"],
    datasets: [
      {
        label: "# of Votes",
        data: [2, 6],
        borderWidth: 1,
        backgroundColor: ["rgb(0,128,0)", "rgb(235, 254, 235)"],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

var myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Wheat", "Qunatity "],
    datasets: [
      {
        label: "# of Votes",
        data: [2, 2, 2],
        borderWidth: 1,
        backgroundColor: ["rgb(0,128,0)", "rgb(235, 254, 235)", "#479752"],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

var myChart = new Chart(renting, {
  type: "doughnut",
  data: {
    labels: ["Transport", "Purchase"],
    datasets: [
      {
        label: "# of Votes",
        data: [2, 3],
        borderWidth: 1,
        backgroundColor: ["rgb(99,250,144)", "rgb(128,220,105)"],
      },
    ],
  },
  options: {
    responsive: true,
  },
});
