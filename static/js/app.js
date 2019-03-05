// from data.js
var tableData = data;


// Define behavior for Date Filter button
filterButton = d3.select("#filter-btn");
filterButton.on("click", function () {
    // Prevent page reloading on button click
    d3.event.preventDefault();

    // Get the value property of the input element
    var filterDate = ''
    filterDate = d3.select(".form-control").property("value")
    console.log("Filtering by date:", filterDate)

    // Clear existing table
    var tbody = d3.select("tbody");
    tbody.html('')  

    // Append to table entries with appropriate date
    data.forEach(function (dataRow) {
        if (filterDate == dataRow.datetime) {
            var newRow = tbody.append("tr")
            newRow.append("td").text(dataRow.datetime);
            newRow.append("td").text(dataRow.city);
            newRow.append("td").text(dataRow.state);
            newRow.append("td").text(dataRow.country);
            newRow.append("td").text(dataRow.shape);
            newRow.append("td").text(dataRow.durationMinutes);
            newRow.append("td").text(dataRow.comments);
        }
    });
}); // End define filterButton()




// Define behavior for Reset Filters button
resetButton = d3.select("#reset-btn");
resetButton.on("click", function () {
    console.log("Resetting plot");
    d3.event.preventDefault();

    var tbody = d3.select("tbody");
    data.forEach(function (dataRow) {
        var newRow = tbody.append("tr")
        newRow.append("td").text(dataRow.datetime);
        newRow.append("td").text(dataRow.city);
        newRow.append("td").text(dataRow.state);
        newRow.append("td").text(dataRow.country);
        newRow.append("td").text(dataRow.shape);
        newRow.append("td").text(dataRow.durationMinutes);
        newRow.append("td").text(dataRow.comments);
    });
}); // End define resetButton.on()
