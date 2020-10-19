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

    if (typeof zip_input === "string" && zip_input.length == 5) {

        flushed_zip = zip_input;

        console.log(typeof flushed_zip);

        console.log(flushed_zip)

    } else {
        
        console.log("Zip is not of a valid format")

    }

    var zip_url = ("http://127.0.0.1:5000/zipquery?get_zip=" + flushed_zip)
    
    // $.get(zip_url);

    $.post(zip_url);

    $.ajax({

        type: "POST",
        
        contentType: "application/json; charset=utf-8",
        
        url: zip_url,
        
        dataType: 'json',
        
        async: true,
        
        data: "{}", 

        success: function successZip(data) {
                    // console.log("first " + data);         
                    
                    var zipcount = [] 
                    var sevcount = [] 

                    for (var item in data.result) {
                        zipcount.push(data.result[item].Severity);
                        sevcount.push(data.result[item].count);
                      }
                    
                    console.log(sevcount);
                    
                    
                        var dataTrace = [
                            {
                            x: zipcount,
                            y: sevcount,
                            type: 'bar'
                            }   
                        ];
                    var layout = [
                        {
                            title: 'Count of Severity in ' + flushed_zip,
                            showlegend: false,
                            xaxis: {
                                tickangle: -45
                            },
                            yaxis: {
                                zeroline: false,
                                gridwidth: 2
                            },
                            bargap :0.05
                        }
                    ] 
                    Plotly.newPlot('bar', dataTrace)


                   





        

            },
    
        error: (function (xhr) {
        
            console.log(xhr.responseText); }) // When Service call fails             


    })

};     
 // // Loading gauge chart
                    // var data = [
                    //     {
                    //     domain: { x: [0, 1], y: [0, 1] },
                    //     value: result.wfreq,
                    //     title: { text: "<b>Car Accident Severity</b> <br>by Zipcode</br>" },
                    //     type: "indicator",
                    //     mode: "gauge+number",
                    //     rotation: 90,
                    //     gauge: {
                    //         axis: { range: [0, 9] },
                    //         bar: { color: "red" },
                    //         steps: [
                    //         { range: [0, 1], color: "rgba(232, 226, 202, .5)" },
                    //         { range: [1, 2], color: "rgba(210, 206, 145, .5)" },
                    //         { range: [2, 3], color: "rgba(190, 190, 120, .5)" },
                    //         { range: [3, 4], color: "rgba(180, 190, 120, 1)" },
                    //         { range: [4, 5], color: "rgba(150, 206, 60, 1)" },
                    //         { range: [5, 6], color: "rgba(120, 190, 50, 1)" },
                    //         { range: [6, 7], color: "rgba(80, 160, 42, 1)"  },
                    //         { range: [7, 8], color: "rgba(40, 147, 22, 1)" },
                    //         { range: [8, 9], color: "rgba(14, 127, 0, 1)" },
                    //         { range: [""], color: "rgba(255, 255, 255, 0)" },
                    //         ],
                    //         textinfo: "text",
                    //         textposition: "inside",
                    //         threshold: {
                    //         line: { color: "red", width: 4 },
                    //         thickness: 0.75,
                    //         value: 9
                    //         },

                    //     }
                    // }
                    // ];
                    
                    // var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
                    // Plotly.newPlot('gauge', data, layout);  
   
// function zip_func_ml() {

//     var zip_input = document.getElementById('inputZip').value;

//     if (typeof zip_input === "string" && zip_input.length == 5) {

//         flushed_zip = zip_input;

//         console.log(typeof flushed_zip);

//         console.log(flushed_zip)

//     } else {
        
//         console.log("Zip is not of a valid format")

//     }


//     var zip_ml_url = ("http://127.0.0.1:5000/zip_ml?get_zip_ml=" + flushed_zip)







// }



































// for (let i = 0; i < data.result[0].length; i++) {
                    //     sevcount.push(data.result[0][i].Severity);   }
    
    




// success: function (msg) {//On Successfull service call   
    //         console.log(msg);
    //     },
    //     error: function (xhr) { console.log(xhr.responseText); } // When Service call fails             
    // });




// success: function (msg) {//On Successfull service call   
//             console.log(msg);
//         },
//         error: function (xhr) { console.log(xhr.responseText); } // When Service call fails             
//     });
        



// var dataZip = datajson.result[0];

// var HTMLtag = d3.select("#bar");

// HTMLtag.html("");

// var month_count = dataZip.Month;

// var month_name = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]

// var y1 = []

// for (var i=0; i< month_count.length; i++){
//     // xl.push(data[i][0])
//     yl.push(data[i][1]) }

// var trace1 = {
//     x: month_name,
//     y: y1,
//     // (Object.values(month_count.forEach(count => month_name.append(count)++)))
//     mode: 'markers',
//     type: 'bar',
//     orientation:'v'
// };

// var layout = {
//     xaxis: {title:"Months"},
//     yaxis: {title:("Count of Accidents in " + flushed_zip), type: 'category'},
//     title: ("Count of Accidents in " + flushed_zip + "monthly in 3.5 years")

// };

// Plotly.newplot('bar', [trace1], layout);















// };
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
