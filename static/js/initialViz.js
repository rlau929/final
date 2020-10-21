
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
                   
            
    
            var config = {mapboxAccessToken: ""};
  
   
            Plotly.newPlot('dense', data, layout, config);
    
    },
    
        error: (function (xhr) {
        
            console.log(xhr.responseText); })            
    
    })

};