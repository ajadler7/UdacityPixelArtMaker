


//get the size submitted by the user and call the makeGrid function when submit is clicked
var size = document.getElementById("sizePicker");
size.addEventListener("submit", function(event) {
  event.preventDefault();
  makeGrid();
});
//actual makeGrid function
function makeGrid() {
  var table = document.getElementById("pixelCanvas"); //assigns the empty table to a variable
  var color =  document.getElementById("colorPicker").value; //gets the value of user selected color
  var height = document.getElementById("inputHeight").value;  //gets the user input height
  var width = document.getElementById("inputWidth").value;  //gets the user input width

  table.innerHTML=""  //clears out the previous table if one is present

  for (var x=0; x<height; x++){
    var newRow = document.createElement('tr'); //adds the number of rows the user requested via height
    table.appendChild(newRow);
    for (var y=0; y<width; y++){
      var newCell = document.createElement('td');
      newRow.appendChild(newCell);  //adds the number of cells per row the user requested via width
      }

    }
   table.addEventListener("click",function(event){   //adds event listening to table to watch for clicks
     event.preventDefault();
     var cell = event.target;
     if (cell.nodeName === 'TD'){
       cell.style.backgroundColor = color;  // a cell is clicked, this will change the background color to the user selected color
     }

})

}
