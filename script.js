var temperatureInput = document.getElementById("temperature");
var fromUnit = document.getElementById("fromUnit");
var toUnit = document.getElementById("toUnit");
var convertButton = document.getElementById("convertButton"); 
var resultDiv = document.getElementById("result"); 
var enableButton = function() { 
    if (temperatureInput.value !== '' && fromUnit.value && toUnit.value) { 
        convertButton.disabled = false; 
    } else { 
        convertButton.disabled = true; 
    } 
}; 

temperatureInput.addEventListener("input", enableButton); 
fromUnit.addEventListener("change", enableButton); 
toUnit.addEventListener("change", enableButton); 

var convertTemperature = function() { 
    var temperature = parseFloat(temperatureInput.value); 
    var from = fromUnit.value; 
    var to = toUnit.value; 
    var result; 
    
    if (isNaN(temperature)) { 
        resultDiv.textContent = "Please enter a valid number!"; 
        resultDiv.style.display = "block"; 
        return; 
    } 
    
    if (from === to) { 
        result = temperature; 
    } else if (from === "celsius") { 
        result = to === "fahrenheit" ? (temperature * 9/5) + 32 : temperature + 273.15; 
    } else if (from === "fahrenheit") { 
        result = to === "celsius" ? (temperature - 32) * 5/9 : ((temperature - 32) * 5/9) + 273.15; 
    } else if (from === "kelvin") { 
        result = to === "celsius" ? temperature - 273.15 : (temperature - 273.15) * 9/5 + 32; 
    } 
    
    resultDiv.textContent = temperature.toFixed(2) + " " + from.charAt(0).toUpperCase() + from.slice(1) + " is " + result.toFixed(2) + " " + to.charAt(0).toUpperCase() + to.slice(1); 
    resultDiv.style.display = "block";
};