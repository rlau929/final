// // - zip code color of US
// // - severity gage
// // - box plot (weather type, quanitities) whisker plot
// // - weekday vs weekend
// // - time of the day concentration
// // - percentage of attributes
// // - 

// this function holds the zipcode, with constraints, as a variable to be used later

// function county_test() {

//     var county_url = ("http://127.0.0.1:5000/countyquery?")

//     $.get(county_url);

//     $.ajax({

//         type: "GET",
        
//         contentType: "application/json; charset=utf-8",
        
//         url: county_url,
        
//         dataType: 'json',
        
//         async: true,
        
//         data: [], 

//         success: function successZip(data) {

//             var county_input = document.getElementById('County').value;

//             if (county_input === data) {

//                 flushed_zip = county_input

//                 console.log(county_input);

//                 runAll()

//             } else {
        
//                 console.log("County Data not Available.  Drive Somewhere Else")

//             }
//         },

//         error: (function (xhr) {
    
//         console.log(xhr.responseText); }) // When Service call fails             

//     })
// };


function county_start() {

    var test_ctInput = document.getElementById('county_select').value;

    ctInput = test_ctInput

    console.log(ctInput);

    runAll()

};




function runAll() {
        chart1(),
        chart2(),
        chart3(),
        chart4()
        // prediction()
        
};

function chart1() {

    var ct_url = ("http://127.0.0.1:5000/ctsevquery?get_sev=" + ctInput)

    $.get(ct_url);

    $.ajax({

        type: "GET",
        
        contentType: "application/json; charset=utf-8",
        
        url: ct_url,
        
        dataType: 'json',
        
        async: true,
        
        data: {}, 

        success: function successZip(data) {
            // console.log("first " + data);         
                
            var jsonkeyary = [] 
            var jsonvalary = [] 

            for (var item in data.result) {
                jsonkeyary.push(data.result[item].Severity);
                jsonvalary.push(data.result[item].count);
                }
                 
            var dataTrace = [
                    {
                    x: jsonkeyary,
                    y: jsonvalary,
                    type: 'bar'
                    }   
                ];
            var layout = 
                {
                title: 'Count of Severity in ' + ctInput + ' County',
                showlegend: false,
                xaxis: {
                    title: 'Severity Levels',
                    tickformat: (",d")
                },
                yaxis: {
                    zeroline: false,
                    gridwidth: 2,
                    title: "Accidents in " + ctInput + ' County'
                },
                bargap :0.05
            }
         
        Plotly.newPlot('bar', dataTrace, layout)

    },

        error: (function (xhr) {
    
            console.log(xhr.responseText); })           

    })
};
 
function chart2() {

    var ct_url = ("http://127.0.0.1:5000/ctmonquery?get_count=" + ctInput)

    $.get(ct_url);

    $.ajax({

        type: "GET",
        
        contentType: "application/json; charset=utf-8",
        
        url: ct_url,
        
        dataType: 'json',
        
        async: true,
        
        data: {}, 

        success: function successZip(data) {
                      
            var jsonkeyary = [] 
            var jsonvalary = [] 

            for (var item in data.result) {
                jsonkeyary.push(data.result[item].Month);
                jsonvalary.push(data.result[item].count);
                }
             
            var dataTrace = [
                {
                x: jsonkeyary,
                y: jsonvalary,
                type: 'bar'
                }   
            ];
            var layout = 
                {
                title: 'Monthly Accidents in ' + ctInput + ' County',
                showlegend: false,
                xaxis: {
                    title: "Months" 
                },
                yaxis: {
                    zeroline: false,
                    gridwidth: 2,
                    title: 'Accidents in ' + ctInput + ' County' 
                },
                bargap :0.05
            }
         
            Plotly.newPlot('months', dataTrace, layout)

    },

        error: (function (xhr) {
    
            console.log(xhr.responseText); })

    })
};
    

function chart3() {

    var ct_url = ("http://127.0.0.1:5000/cttimequery?get_all=" + ctInput)
    
    $.get(ct_url);
    
    $.ajax({
    
        type: "GET",
            
        contentType: "application/json; charset=utf-8",
            
        url: ct_url,
            
        dataType: 'json',
            
        async: true,
            
        data: {}, 
    
        success: function successZip(data) {
            // console.log("first " + data);         
                    
            var jsonkeyary = [] 
            var jsonvalary = [] 
    
            for (var item in data.result) {
                jsonkeyary.push(data.result[item].Time_of_Day);
                jsonvalary.push(data.result[item].count);
                }   
                    
            var dataTrace = [{
                x: jsonkeyary,
                y: jsonvalary,
                type: 'scatter',
                }];
            
            var layout = {
                title: 'Time of Day Accidents in ' + ctInput + ' County',
                showlegend: false,
                xaxis: {
                    title: "Time of Day" 
                },
                yaxis: {
                    title: 'Accidents in ' + ctInput + ' County' 
                },
                height: 500,
                width: 1000
            };
        
            Plotly.newPlot('scatter', dataTrace, layout)
    
    },
    
        error: (function (xhr) {
        
            console.log(xhr.responseText); }) // When Service call fails             
    
    })
};

function prediction() {

    var prediction_url = ("http://127.0.0.1:5000/predict?")
        
    $.get(prediction_url);
        
    $.ajax({
        
        type: "GET",
                
        contentType: "application/json; charset=utf-8",
                
        url: prediction_url,
                
        dataType: 'json',
                
        async: true,
                
        data: [], 
        
        success: function successZip(data) {
            
            var image1 =    document.getElementById('image1');
            var image2 =    document.getElementById('image2');

            if(data == 1) {
                image1.style.display = 'block';
                image2.style.display = 'none';
                image3.style.display = 'none';
                image4.style.display = 'none';
                
            if(data == 2) {
                image2.style.display = 'block';
                image1.style.display = 'none';
                image3.style.display = 'none';
                image4.style.display = 'none';
            }
            if(data == 3) {
                image3.style.display = 'block';
                image1.style.display = 'none';
                image2.style.display = 'none';
                image4.style.display = 'none';
        }
             else {
                image4.style.display = 'block';
                image1.style.display = 'none';
                image2.style.display = 'none';
                image3.style.display = 'none';
            }
    }

        },
        
            error: (function (xhr) {
            
                console.log(xhr.responseText); }) // When Service call fails             
        
        
        })
};




function chart4() {

    var ct_url = ("http://127.0.0.1:5000/mapboxctquery?get_map=" + ctInput)
    
    $.get(ct_url);
    
    $.ajax({
    
        type: "GET",
            
        contentType: "application/json; charset=utf-8",
            
        url: ct_url,
            
        dataType: 'json',
            
        async: true,
            
        data: {}, 
    
        success: function successZip(data) {
            console.log(data);         
                    
            // var jsonkeyary = [] 
            // var jsonvalary = []
            var lats_ct = []
            var lng_ct = []
            var sev_ct = []
    
            for (var item in data.result) {
                lats_ct.push(data.result[item].Latitude);
                lng_ct.push(data.result[item].Longitude);
                sev_ct.push(data.result[item].Severity);
                }

            function arrayAverage(arr){
                var sum = 0;
                for(var i in arr) {
                    sum += arr[i];}
                return (sum / arr.length);
            }
                    
            var data = [{
                
                type: "densitymapbox",
                    
                lon: lng_ct,
                
                lat: lats_ct,
                
                z: sev_ct,  
                
                radius: 8,

                // coloraxis: 'coloraxis',

                colorscale: "Viridis",
                
                colorbar: {
                    y: 1,
                    yanchor: 'top',
                    len: 0.45,
                    // color: "purple",
                    title: {
                        side:'top',
                        text:"Severity Gradient"
                    }
                } 
            
            }];
  
    
            var layout = {
                
                mapbox: {
                    style: 'outdoors',
                    center: {
                        lon: arrayAverage(lng_ct),
                        lat: arrayAverage(lats_ct)                    
                    },
                    zoom: 8
                   },
                // coloraxis: {colorscale: "turbid"},
                title: {text: "Accident Severity Gradient in " + ctInput + " County"},
                width: 1000,
                height: 600,
            };
                   
            
    
            var config = {mapboxAccessToken: mpAPI};
  
   
            Plotly.newPlot('dense', data, layout, config);
    
    },
    
        error: (function (xhr) {
        
            console.log(xhr.responseText); })            
    
    })

};


// Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/earthquakes-23k.csv',
//   function(err, rows){function unpack(rows, key) {return rows.map(function(row){ return row[key];
// })};

// var data = [{
//     lon: unpack(rows, 'Longitude'),
//     lat: unpack(rows, 'Latitude'), 
//     radius:10,
//     z: unpack(rows, 'Magnitude'),
//     type: "densitymapbox",
//     coloraxis: 'coloraxis',
//     hoverinfo: 'skip'}];

// var layout = {
//     mapbox: {
//         center: {lon: 60, lat: 30}, 
//         style: "outdoors", 
//         zoom: 2},
//     coloraxis: {colorscale: "Viridis"},
//     title: {text: "Earthquake Magnitude"},
//     width: 600,
//     height: 400, 
//     margin: {t: 30, b: 0}};

// var config = {mapboxAccessToken: "your access token"};

// Plotly.newPlot('myDiv', data, layout, config);
// })
    













































































// function zip_test() {

//     var zip_input = document.getElementById('inputZip').value;

//     if (typeof zip_input === "string" && zip_input.length == 5) {

//         flushed_zip = zip_input;

//         console.log(typeof flushed_zip);

//         console.log(flushed_zip)

//         runAll()

//     } else {
        
//         console.log("Zip is not of a valid format")

//         }
//     };


//     function runAll() {
//         chart1(),
//         chart2(),
//         chart3(),
//         chart4()
        
// };

// function chart1() {

//     var zip_url = ("http://127.0.0.1:5000/queryzip?get_zip=" + flushed_zip)

//     $.post(zip_url);

//     $.ajax({

//         type: "POST",
        
//         contentType: "application/json; charset=utf-8",
        
//         url: zip_url,
        
//         dataType: 'json',
        
//         async: true,
        
//         data: {}, 

//         success: function successZip(data) {     
                
//             var zipcount = [] 
//             var sevcount = [] 

//             for (var item in data.result) {
//                 zipcount.push(data.result[item].Severity);
//                 sevcount.push(data.result[item].count);
//                 }
                
//             console.log(sevcount);
                
                
//                 var dataTrace = [
//                     {
//                     x: zipcount,
//                     y: sevcount,
//                     type: 'bar'
//                     }   
//                 ];
//             var layout = 
//                 {
//                 title: 'Count of Severity in ' + flushed_zip,
//                 showlegend: false,
//                 xaxis: {
//                     title: "Severity Levels",
//                     tickformat: (",d")
//                 },
//                 yaxis: {
//                     zeroline: false,
//                     gridwidth: 2,
//                     title: "Accidents in " + flushed_zip
//                 },
//                 bargap :0.05
//             }
//         Plotly.newPlot('bar', dataTrace, layout)

//     },

//         error: (function (xhr) {
    
//             console.log(xhr.responseText); }) // When Service call fails             


//     })
// };
 
// function chart2() {

//     var zip_url = ("http://127.0.0.1:5000/monthquery?get_month=" + flushed_zip)

//     $.post(zip_url);

//     $.ajax({

//         type: "POST",
        
//         contentType: "application/json; charset=utf-8",
        
//         url: zip_url,
        
//         dataType: 'json',
        
//         async: true,
        
//         data: {}, 

//         success: function successZip(data) {
//             // console.log("first " + data);         
                
//             var zipcount = [] 
//             var sevcount = [] 

//             for (var item in data.result) {
//                 zipcount.push(data.result[item].Month);
//                 sevcount.push(data.result[item].count);
//                 }
                
//             console.log(sevcount);
                
                
//             var dataTrace = [
//                 {
//                 x: zipcount,
//                 y: sevcount,
//                 type: 'bar'
//                 }   
//             ];
//             var layout = 
//                 {
//                 title: 'Monthly Accident Counts in ' + flushed_zip,
//                 showlegend: false,
//                 xaxis: {
//                     title: "Months",
//                     tickformat: ("%B")
//                 },
//                 yaxis: {
//                     zeroline: false,
//                     gridwidth: 2,
//                     title: "Accidents in " +flushed_zip

//                 },
//                 bargap :0.05
//             }
        
//         Plotly.newPlot('months', dataTrace, layout)

//     },

//         error: (function (xhr) {
    
//             console.log(xhr.responseText); }) // When Service call fails             

//     })

// };

// function chart3() {

//     var zip_url = ("http://127.0.0.1:5000/timequery?get_time=" + flushed_zip)
    
//     $.get(zip_url);
    
//     $.ajax({
    
//         type: "GET",
            
//         contentType: "application/json; charset=utf-8",
            
//         url: zip_url,
            
//         dataType: 'json',
            
//         async: true,
            
//         data: {}, 
    
//         success: function successZip(data) {
//             // console.log("first " + data);         
                    
//             var zipcount = [] 
//             var sevcount = [] 
    
//             for (var item in data.result) {
//                 zipcount.push(data.result[item].Time_of_Day);
//                 sevcount.push(data.result[item].count);
//                 }
                    
//             // console.log("chart 3" + zipcount);
//             // console.log("chart 3.a " + sevcount);
                    
                    
//             var dataTrace = [{
//                 x: zipcount,
//                 y: sevcount,
//                 type: 'scatter',
//                 }];
            
//             var layout = {
//                 title: 'Time of Day Accidents in ' + flushed_zip,
//                 xaxis: {
//                     title: 'Time of Day'
//                 },
//                 yaxis:{
//                     title: 'Accidents in ' + flushed_zip
//                 },
//                 showlegend: false
//                 // height: 500,
//                 // width: 1000
//             }
        
//         Plotly.newPlot('scatter', dataTrace, layout)
    
//     },
    
//         error: (function (xhr) {
        
//             console.log(xhr.responseText); }) // When Service call fails             
    
//     })

// };




// function chart4() {

//     var zip_url = ("http://127.0.0.1:5000/timequery?get_time=" + flushed_zip)
    
//     $.get(zip_url);
    
//     $.ajax({
    
//         type: "GET",
            
//         contentType: "application/json; charset=utf-8",
            
//         url: zip_url,
            
//         dataType: 'json',
            
//         async: true,
            
//         data: {}, 
    
//         success: function successZip(data) {
//             // console.log("first " + data);         
                    
//             var zipcount = [] 
//             var sevcount = [] 
    
//             for (var item in data.result) {
//                 zipcount.push(data.result[item].Time_of_Day);
//                 sevcount.push(data.result[item].count);
//                 }
                    
//             // console.log("chart 3" + zipcount);
//             // console.log("chart 3.a " + sevcount);
                    
                    
//             var data = [
//                 {type: "densitymapbox", lon: [10, 20, 30], lat: [15, 25, 35], z: [1, 3, 2],
//                  radius: 50, colorbar: {y: 1, yanchor: 'top', len: 0.45}},
//                 {type: 'densitymapbox', lon: [-10, -20, -30], lat: [15, 25, 35],
//                  radius: [50, 100, 10],  colorbar: {y: 0, yanchor: 'bottom', len: 0.45}
//                 }];
              
//             var layout = {mapbox: {style: 'light', center: {lat: 20}}, width: 600, height: 400};
              
//             var config = {mapboxAccessToken: mpAPI};
              
//             Plotly.newPlot('mapBox', data, layout, config);
    
//     },
    
//         error: (function (xhr) {
        
//             console.log(xhr.responseText); }) // When Service call fails             
    
//     })

// };
























// var data = [
//     {type: "densitymapbox", lon: [10, 20, 30], lat: [15, 25, 35], z: [1, 3, 2],
//      radius: 50, colorbar: {y: 1, yanchor: 'top', len: 0.45}},
//     {type: 'densitymapbox', lon: [-10, -20, -30], lat: [15, 25, 35],
//      radius: [50, 100, 10],  colorbar: {y: 0, yanchor: 'bottom', len: 0.45}
//     }];
  
//   var layout = {mapbox: {style: 'light', center: {lat: 20}}, width: 600, height: 400};
  
//   var config = {mapboxAccessToken: "your access token"};
  
//   Plotly.newPlot('myDiv', data, layout, config);



























// function chart4() {
    
//     Plotly.d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/2015_06_30_precipitation.csv",
        
//         function(err, rows) {
            
//             function unpack(rows, key) {
                
//                 return rows.map(function(row) {
                    
//                     return row[key];
                
//                 });
//             }

//             var data = [
//                 {
//                     type: "scattermapbox",
//                     text: unpack(rows, "Globvalue"),
//                     lon: unpack(rows, "Lon"),
//                     lat: unpack(rows, "Lat"),
//                     marker: { color: "fuchsia", size: 4 }
//                 }
//             ];

//             var layout = {
//                 dragmode: "zoom",
//                 mapbox: { style: "open-street-map", center: { lat: 38, lon: -90 }, zoom: 3 },
//                 margin: { r: 0, t: 0, b: 0, l: 0 }
//             };

//             Plotly.newPlot("testMap", data, layout);
//         }
//     )

// };



















































// function zip_test() {

//     var zip_input = document.getElementById('inputZip').value;

//     if (typeof zip_input === "string" && zip_input.length == 5) {

//         flushed_zip = zip_input;

//         console.log(typeof flushed_zip);

//         console.log(flushed_zip)

//     } else {
        
//         console.log("Zip is not of a valid format")

//     }

//     var zip_url = ("http://127.0.0.1:5000/zipquery?get_zip=" + flushed_zip)
    
//     // $.get(zip_url);

//     $.post(zip_url)

//     $.ajax({

//         type: "POST",
        
//         contentType: "application/json; charset=utf-8",
        
//         url: zip_url,
        
//         dataType: 'json',
        
//         async: true,
        
//         data: "{}", 

//         success: (function successZip(data) { 
                    
//             var zipcount = [] 
//             var sevcount = [] 

//             for (var item in data.result) {
//                 zipcount.push(data.result[item].Severity);
//                 sevcount.push(data.result[item].count);
//                 }
            
//             var dataTrace = [
//                 {
//                 x: zipcount,
//                 y: sevcount,
//                 type: 'bar'
//                 }   
//             ];
//             var layout = {
//                 title: 'Count of Severity in ' + flushed_zip,
//                 showlegend: false,
//                 xaxis: {
//                     title: "Severity Levels"
//                 },
//                 yaxis: {
//                     title: "Accidents in " + flushed_zip,
//                     zeroline: false,
//                     gridwidth: 1
//                 },
//                 bargap :0.05
//             }; 
//             Plotly.newPlot('bar', dataTrace, layout)

//         }),
    
//         error: (function (xhr) {
        
//             console.log(xhr.responseText); }
            
//         )

//     })

// };

























































 // // Loading gauge chart
                    // var data = [
                    //     {
                    //     domain: { x: [0, 1], y: [0, 1] },
                    //     value: result.wfreq, use output value with getdocument, ez?
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
   
