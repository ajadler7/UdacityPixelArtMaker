


const height_input = document.getElementById("inputHeight"); //gets the user input height
const width_input = document.getElementById("inputWidth"); //gets the user input width

var size = document.getElementById("sizePicker"); //get the size submitted by the user and call the makeGrid function when submit is clicked
size.addEventListener("submit", function(event) {
    event.preventDefault();  //prevents refresh of page on clicking submit
    makeGrid();  //calls the makeGrid function, defined below
});
//makeGrid function - generates grid based on user input
function makeGrid() {
    var table = document.getElementById("pixelCanvas"); //assigns the empty table to a variable
    var colorInput = document.getElementById("colorPicker"); //gets the value of user selected color
    let height = height_input.value;  //assigns user input height to a variable
    let width = width_input.value;  //assigns user input width to a variable

    table.innerHTML = "" //clears out the previous table if one is present

    for (var x = 0; x < height; x++) { //for loop iterates through the user requested height and creates then appends that number of rows
        var newRow = document.createElement('tr');  //creates a new table row
        table.appendChild(newRow);   //appends new row to the table
        for (var y = 0; y < width; y++) { //inner nested for loop adds the user requested width as number of cells added to each row created in outer for loop
            var newCell = document.createElement('td');  //creates new table cell
            newRow.appendChild(newCell);  //appends new cell to the table
        }

    }
    table.addEventListener("click", function(event) { //adds event listener to table to watch for clicks
        event.preventDefault();  //prevents default action on clicking table
        var cell = event.target;   //sets target of a click to a variable
        let color = colorInput.value;  //assigns color selected by user to a variable
        if (cell.nodeName === 'TD') {   //checks to see if a table cell is clicked so we can change the color of that cell
            cell.style.backgroundColor = color; // if a cell is clicked, this will change the background color to the user selected color
        }

    })

}
