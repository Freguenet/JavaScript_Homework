// from data.js
var tableData = data;

// Append the data using d3
var tbody = d3.select("tbody");
data.forEach(function(UFO_report) {
    // console.log(UFO_report);
    var row = tbody.append("tr");
    Object.entries(UFO_report).forEach(function([key, value]){
        // console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    });   
});
// Listen for events and search
// Filter
var filter = d3.select("#filter-btn");
filter.on("click", function() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var filteredData = tableData.filter(searched_data => searched_data.datetime === inputValue);
    console.log(filteredData);
// Display Filtered
    tbody.html("");
    filteredData.forEach(function(filteredUFO_report) {
        var row = tbody.append("tr");
        Object.entries(filteredUFO_report).forEach(function([key, value]){
            var cell = row.append("td");
            cell.text(value);
        });
    });
    
});