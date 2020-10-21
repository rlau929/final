function updateTempInput(val) {
    document.getElementById('Temperature_F').value=val; 
  }

function updateVisInput(val) {
document.getElementById('Visibility_mi').value=val; 
}

function updatePrecInput(val) {
    document.getElementById('Precipitation_in').value=val; 
}

function myFunction() {
    var val = document.getElementById("slider").value //gets the oninput value
    document.getElementById('Temperature_F').innerHTML = val //displays this value to the html page
    console.log(val)
 }