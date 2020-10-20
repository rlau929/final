function zip_test() {

    var zip_input = document.getElementById('inputZip').value;

    if (typeof zip_input === "string" && zip_input.length == 5) {

        flushed_zip = zip_input;

        console.log(typeof flushed_zip);

        console.log(flushed_zip)

        runAll()

    } else {
        
        console.log("Zip is not of a valid format")

        }
    };

function runAll() {
        chart1(),
        chart2()
        chart3()
        
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
