// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");




function buildTable(data) {
// First, clear out any existing data
    tbody.html("");
  }
//Looped through each object in the array
  data.forEach((dataRow) => {
//append a row and cells for each value in the row
    let row = tbody.append("tr");
//object.values refer to one object from the array of ufo sightingg
//(datarow) we want the values to go into the datarow and "forEach(val)" to specify we want one object per row
    Object.values(dataRow).forEach((val) => {

//we'll append each value of the object to a cell in the table
      let cell = row.append("td");
// we will ad the values
      cell.text(val);
     }
    );
  });
}

