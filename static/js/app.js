// import the data from data.js
const tableData = data;
//  Create a variable to keep track of all the filters as an object.
var filter={};
// Reference the HTML table using d3
var tbody = d3.select("tbody");
function buildTable(data) {
    // First, clear out any existing data
    tbody.html(" ");
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow)=>{
        // Append a row to the table body
        let row = tbody.append("tr");
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
    }

// Function to update the filters. 
function updateFilters() {
    //  Save the element that was changed as a variable.
    let changedElement=d3.select(this);
    //  Save the value that was changed as a variable.
    let elementValue=changedElement.property("value");
     // Save the id of the filter that was changed as a variable.
    let filterId=changedElement.attr("id");
     // If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (elementValue) {
        filter[filterId]=elementValue;
    }
    else {
        delete filter[filterId];
    }
// Call function to apply all filters and rebuild the table
filterTable(filter);
};

 // Use this function to filter the table when data is entered.
function filterTable(filterarray) {
     // Set the filtered data to the tableData.
    let filteredData=tableData;
    // Loop through all of the filters and keep any data that
    // matches the filter values
    for (const [key, value] of Object.entries(filterarray)) {
        filteredData = filteredData.filter(row => row[key] === value);
      };
      
// Finally, rebuild the table using the filtered data   
buildTable(filteredData);
};
// Attach an event to listen for changes to each filter
d3.selectAll("input").on("change", updateFilters);
// Build the table when the page loads
buildTable(tableData);