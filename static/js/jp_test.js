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

    $.post(zip_url);
}
function requestDataforChart1() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: zip_url,
        dataType: 'json',
        async: true,
        data: "{}", 
        success: chart1(data),
        error: (function (xhr) {
            console.log(xhr.responseText); })    
    })
}
function chart1() {
    var zipcount = [] 
    var sevcount = [] 
    for (var item in data.result) {
        zipcount.push(data.result[item].Severity);
        sevcount.push(data.result[item].count);}
    console.log(sevcount);
    var dataTrace = [
        {
        x: zipcount,
        y: sevcount,
        type: 'bar',
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
}
    