function displayresult(){
    var city = document.getElementById("city").value;
    var apikey ='7d168072f7799dab74635867ceac15c4';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='
    +city+'&appid='+apikey+'&units=metric')
    .then(response=>response.json())
    .then(data =>{
        var t = data['main']['temp']
        document.getElementById("output").innerHTML = t+"&#176;"+"C";
    }
    )
}
