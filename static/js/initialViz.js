// // - zip code color of US
// // - severity gage
// // - box plot (weather type, quanitities) whisker plot
// // - weekday vs weekend
// // - time of the day concentration
// // - percentage of attributes
// // - 

// this function holds the zipcode, with constraints, as a variable to be used later

function zip_test() {

    var zip_input = document.getElementById('inputZip').value;

    
    // check if its string, and 5 letters(?), else return false,

    if (typeof zip_input === "string" && zip_input.length == 5) {

        flushed_zip = zip_input;

        console.log(typeof flushed_zip);

        console.log(flushed_zip)

    } else {
        
        console.log("Zip is not of a valid format")

    }

    return flushed_zip;
    
}




// function zip_save(form) {


//     form.action =


    // var zip_select = d3.select("#catch_zip");

    // zip_select.append("a")
    //     .text("#input")

    

// d3.select("").on("click", function() {
//     var html_zip = d3.select("input").value
//     console.log(html_zip);


    // then convert to integer
    
    // var parse_zip = parseInt(flushed_zip, 10);

    // console.log("skipped through " + parse_zip)
    // console.log(typeof parse_zip);
    
    
    
    
    
    
    
    
    
    
    
    
    // console.log(zip_input);

    // console.log(typeof zip_input);
    
    // if (typeof zip_input === "number") {
        
    //     flushed_zip = zip_input

    //     console.log(flushed_zip)
        
    // } else {
        
    //     console.log("False, Zip Code is not number")
    
    
    // console.log(zip_input);



// })


// // d3.csv("/resources/Cleaned_Accidents_Data.csv").then(function(data) {
// //     console.log(data);
// //   });

// // const { WSASERVICE_NOT_FOUND } = require("constants");


// // import papaparse from ‘papaparse’;


// var selCSV = "../Cleaned_Accidents_Data.csv";
// var apexTest = "apex_test.CSV"
// // Papa.parse(selCSV, {config:{header:true}});


// // Papa.parse(selCSV.files[0], {
// //     header: true,
// // 	complete: function(parsedOutput) {
// // 		console.log(parsedOutput);
// // 	}
// // });


// // Papa.parse(apexTest, {
// // 	step: function(row, parser) {
// // 		console.log("Row:", row.data);
// // 	},
// // 	complete: function() {
// //         // console.log(row.length)
// // 		console.log("All done!");
// // 	}
// // });

// Plotly.d3.csv(apexTest, function(err, row) {
//     console.log(row);
// })










//   // ).then((dc) => {
// //     console.log(dc.length)});

// // d3.csv("resources/Cleaned_Accidents_Data.csv",function(data){
// //     console.log(data);
// // },function(error, rows){
// //    console.log(rows); 
// // });

// // d3.csv("/resources/Cleaned_Accidents_Data.csv")

// // d3.csv.parse(string[, accessor])


// // d3.dsv(",", "/resources/Cleaned_Accidents_Data.csv").then(function(data) {
// //     console.log(data);
// //   });
// // d3.csv("resources/Cleaned_Accidents_Data.csv").then(function(data) {
// //     for (var i = 0; i < data.length; i++) {
// //         console.log(data[i].Severitssssy);
// //         console.log(data[i].Zipcodeeeee);
// //     }
// // })

