var myArray = [];

buildTable(myArray)

// $.ajax({
//     method : 'GET',
//     url : 'https://jsonplaceholder.typicode.com/todos/1',
//     success : function(res){
//         myArray = res;
//         console.log(myArray);
//     }
// })

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

      console.log(json.id);

function buildTable(data)
{
    var table = document.getElementById("mytable");
    for(var i = 0 ; i<= 3 ; i++){
        var row = `<tr> 
        <td>[i]</td> 
        <td>test1</td> 
        <td>test2</td> 
        </tr>`
        table.innerHTML += row;
    }
}