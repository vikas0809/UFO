// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
console.log(tableData);
var tbody = d3.select("tbody");
function buildTable(data) {
    // First, clear out any existing data
    console.log("In the buildtable function");
    tbody.html(" ");
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow)=>{
        // Append a row to the table body
        let row = tbody.append("tr");
        console.log("appending rows");
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            console.log("appending rows data");
            cell.text(val);
            console.log(val);
        });
        
    })

};
function handleClick() {
    console.log("buttonclick");
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
     // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  };
   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
};
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);