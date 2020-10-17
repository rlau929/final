// // - zip code color of US
// // - severity gage
// // - box plot (weather type, quanitities) whisker plot
// // - weekday vs weekend
// // - time of the day concentration
// // - percentage of attributes
// // - 

// this function holds the zipcode, with constraints, as a variable to be used later

// definition zip_thro():
    
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

    // return flushed_zip;
    
    // var month_input = "March"

    // var zip_url = ("localhost:9090/zip_query?" + flushed_zip);

    var zip_url = ("http://127.0.0.1:5000/zipquery?get_zip=" + flushed_zip)

    // var zip_url = ("localhost:9090/zip_query?" + month_input);


    // $.get("http://127.0.0.1:5000/zip_query?get_zip=" + flushed_zip);

    $.get(zip_url);

    // function for loading the json
    // d3.request(zip_url)

    // .mimeType("application/json")

    // .response(function(xhr) {

    //         return JSON.parse(xhr.responseText);

    //     }
    // )
    // .then((data) => {
        
    //     console.log(data);

    // })

    // d3.json(zip_url, function(error, response) {
    //     // Now use response to do some d3 magic
    //     console.log("test_response " + response);
    //     console.log("error my ass " + error);
    // })


    
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: zip_url,
        dataType: 'json',
        async: true,
        data: "{}", 
        success: function (msg) {//On Successfull service call   
            console.log(msg);
        },
        error: function (xhr) { console.log(xhr.responseText); } // When Service call fails             
    });
        
        

    // draw_histogram(div_name, pos_data);

    //     },
    //     error: function (result) {



    // }
    // })

}


// var xhttp;
// if (str == "") {
//   document.getElementById("txtHint").innerHTML = "";
//   return;
// }
// xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//   document.getElementById("txtHint").innerHTML = this.responseText;
//   }
// };
// xhttp.open("GET", "getcustomer.php?q="+str, true);
// xhttp.send();
// }














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

