


const height_input = document.getElementById("inputHeight");  //gets the user input height
const width_input = document.getElementById("inputWidth");  //gets the user input width

var size = document.getElementById("sizePicker");  //get the size submitted by the user and call the makeGrid function when submit is clicked
size.addEventListener("submit", function(event) {
  event.preventDefault();
  makeGrid();
});
//makeGrid function - generates grid based on user input
function makeGrid() {
  var table = document.getElementById("pixelCanvas"); //assigns the empty table to a variable
  var colorInput =  document.getElementById("colorPicker"); //gets the value of user selected color
  let height = height_input.value;
  let width = width_input.value;

  table.innerHTML=""  //clears out the previous table if one is present

  for (var x=0; x<height; x++){  //for loop iterates through the user requested height and creates then appends that number of rows
    var newRow = document.createElement('tr');
    table.appendChild(newRow);
    for (var y=0; y<width; y++){  //inner nested for loop adds the user requested width as number of cells added to each row created in outer for loop
      var newCell = document.createElement('td');
      newRow.appendChild(newCell);
      }

    }
   table.addEventListener("click",function(event){   //adds event listener to table to watch for clicks
     event.preventDefault();
     var cell = event.target;
     let color = colorInput.value;
     if (cell.nodeName === 'TD'){
       cell.style.backgroundColor = color;  // if a cell is clicked, this will change the background color to the user selected color
     }

})

}
