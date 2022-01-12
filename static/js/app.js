// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");




function buildTable(data) {
// First, clear out any existing data
    tbody.html("");
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

// Aadding a button to the table

function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

   // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
