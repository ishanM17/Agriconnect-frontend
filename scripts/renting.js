let btn = document.querySelector("button");
btn.addEventListener("click", async function (e) {
  var valid = true;

  const equipment = document.getElementById("equipments").value;
  const date = document.getElementById("date").value;
  const location = document.getElementById("location").value;
  const duration = document.getElementById("duration").value;
  const budget = document.getElementById("budget").value;

  if(equipment === "not")
  {
    document.getElementById("equipment_err").innerHTML = "Select option";
  }

  if(date === "")
  {
    document.getElementById("date_err").innerHTML = "enter date";
  }

  if(location === "")
  {
    document.getElementById("loc_err").innerHTML = "Enter your location";
  }

  if(duration === "")
  {
    document.getElementById("duration_err").innerHTML = "Enter a value";
  }

  if(budget === "")
  {
    document.getElementById("budget_err").innerHTML = "Enter a value";
  }

});