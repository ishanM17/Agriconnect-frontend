let btn = document.querySelector("button");
btn.addEventListener("click", async function (e) {
    var valid = true;
    const source = document.getElementById("source").value;
    const destination = document.getElementById("destination").value;
    const fair = document.getElementById("fair").value;
    const quantity = document.getElementById("quantity").value;
    const five = document.getElementById("five").value;

    if(source === "")
    {
        document.getElementById("source_err").innerHTML = "Enter source";
    }

    if(destination === "")
    {
        document.getElementById("destination_err").innerHTML = "Enter destination";
    }

    if(fair === "")
    {
        document.getElementById("fair_err").innerHTML = "Enter a value";
    }

    if(quantity === "")
    {
        document.getElementById("quantity_err").innerHTML = "Enter a value";
    }

    if(five === "")
    {
        document.getElementById("five_err").innerHTML = "Enter date";
    }


});