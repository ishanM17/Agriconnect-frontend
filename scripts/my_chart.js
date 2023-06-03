const ctx = document.getElementById("myChart");
const renting = document.getElementById("Revenue_renting");
const produce = document.getElementById("Total_Produce");

function updateChart() {
  async function fetchData() {
    const url = "C:\Users\User\Desktop";
    const response = await fetch(url);
    const datapoints = await response.json();
    console.log(datapoints);
    return datapoints;
  }

  fetchData().then((datapoints) => {
    const produce = datapoints.map((index) => {
      return index.quantity;
    });

    myChart.data.datasets[0].data=produce;
  });
}

var myChart = new Chart(produce, {
  type: "line",
  data: {
    labels: ["Sold", "Total Purchase"],
    datasets: [
      {
        label: "# of Votes",
        data: [2, 3],
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
    labels: ["Sold", "Total Purchase"],
    datasets: [
      {
        label: "# of Votes",
        data: [2, 2],
        borderWidth: 1,
        backgroundColor: ["rgb(0,128,0)", "rgb(235, 254, 235)"],
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
    labels: ["Rent", "Sell"],
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
