function county_test() {

    var county_url = ("http://127.0.0.1:5000/countyquery?")

    $.get(county_url);

    $.ajax({

        type: "GET",
        
        contentType: "application/json; charset=utf-8",
        
        url: county_url,
        
        dataType: 'json',
        
        async: true,
        
        data: [], 

        success: function successZip(data) {

            var county_input = document.getElementById('County').value;

            if (county_input === data) {

                flushed_zip = county_input

                console.log(county_input);

                runAll()

            } else {
        
                console.log("County Data not Available.  Drive Somewhere Else")

            }
        },

        error: (function (xhr) {
    
        console.log(xhr.responseText); }) // When Service call fails             

    })
};


function runAll() {
        chart1(),
        chart2(),
        chart3(),
        prediction()
        
};

function chart1() {

    var zip_url = ("http://127.0.0.1:5000/zipquery?get_zip=" + flushed_zip)

    $.get(zip_url);

    $.ajax({

        type: "GET",
        
        contentType: "application/json; charset=utf-8",
        
        url: zip_url,
        
        dataType: 'json',
        
        async: true,
        
        data: {}, 

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
        Plotly.newPlot('bar', dataTrace, layout)

    },

        error: (function (xhr) {
    
            console.log(xhr.responseText); }) // When Service call fails             


    })
    }
 
function chart2() {

    var zip_url = ("http://127.0.0.1:5000/zipcount?get_count=" + flushed_zip)

    $.get(zip_url);

    $.ajax({

        type: "GET",
        
        contentType: "application/json; charset=utf-8",
        
        url: zip_url,
        
        dataType: 'json',
        
        async: true,
        
        data: {}, 

        success: function successZip(data) {
            // console.log("first " + data);         
                
            var zipcount = [] 
            var sevcount = [] 

            for (var item in data.result) {
                zipcount.push(data.result[item].Month);
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
        Plotly.newPlot('months', dataTrace, layout)

    },

        error: (function (xhr) {
    
            console.log(xhr.responseText); }) // When Service call fails             


    })
    }

function chart3() {

    var zip_url = ("http://127.0.0.1:5000/zipall?get_all=" + flushed_zip)
    
    $.get(zip_url);
    
    $.ajax({
    
        type: "GET",
            
        contentType: "application/json; charset=utf-8",
            
        url: zip_url,
            
        dataType: 'json',
            
        async: true,
            
        data: {}, 
    
        success: function successZip(data) {
            // console.log("first " + data);         
                    
            var zipcount = [] 
            var sevcount = [] 
    
            for (var item in data.result) {
                zipcount.push(data.result[item].Time_of_Day);
                sevcount.push(data.result[item].count);
                }
                    
            console.log(sevcount);
                    
                    
            var dataTrace = {
                x: zipcount,
                y: sevcount,
                type: 'scatter',
                };
            
            var layout = {
                title: ' ' + flushed_zip,
                showlegend: false,
                height: 500,
                width: 1000}
        
        Plotly.newPlot('scatter', dataTrace, layout)
    
    },
    
        error: (function (xhr) {
        
            console.log(xhr.responseText); }) // When Service call fails             
    
    
    })
    };

function prediction() {

    var prediction_url = ("http://127.0.0.1:5000/prediction?")
        
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