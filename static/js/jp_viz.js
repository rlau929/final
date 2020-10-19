function zip_test2() {

  var zip_input2 = document.getElementById('inputZip').value;

  
  // check if its string, and 5 letters(?), else return false,

  if (typeof zip_input2 === "string" && zip_input2.length == 5) {

      flushed_zip2 = zip_input2;

      console.log(typeof flushed_zip2);

      console.log(flushed_zip2)

  } else {
      
      console.log("Zip is not of a valid format")

  }

  var count_url = ("http://127.0.0.1:5000/zipcount?get_count=" + flushed_zip2)

  $.post(count_url);

  
  $.ajax({
      type: "POST",
      contentType: "application/json; charset=utf-8",
      url: count_url,
      dataType: 'json',
      async: true,
      data: "{}", 
      Success: function successZip2(data) {
        // console.log("first " + data);         
        
        var zipcount2 = [] 
        var sevcount2 = [] 

        for (var item in data.result) {
            zipcount2.push(data.result[item].Month);
            sevcount2.push(data.result[item].count);
          }
        
        console.log(sevcount2);
        
        
            var dataTrace = [
                {
                x: zipcount2,
                y: sevcount2,
                type: 'bar'
                }   
            ];
        var layout = [
            {
                title: 'Accidents by Month in ' + flushed_zip2,
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




        // Plotly.newPlot("bar", figure.data, figure.layout);

  },

      error: (function (xhr) {

      console.log(xhr.responseText); }) // When Service call fails             


  })

};     
