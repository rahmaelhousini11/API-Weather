let icon =document.getElementById("icon-city");
let input = document.getElementById('search');

async function api(city){
    let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=dafa45cf6bb848baa5e02108221901&q=${city}&days=3&lang=en`);
    let finalResponse = await response.json();
    console.log(finalResponse);
  return finalResponse ;
}

input.addEventListener('keyup' , function(){
    displayDays(this.value)
})

if(input.value == "" )
{
    displayDays('cairo')
}
else
{
    displayDays(x)
}
async function displayDays(x){
    let data = await api(x);
     // day one 
    document.querySelector(".date").innerHTML= data.forecast.forecastday[0].date;
    document.querySelector(".location").innerHTML = data.location.name; 
    document.querySelector(".num").innerHTML = data.current.temp_c;
    document.querySelector(".low").innerHTML = data.forecast.forecastday[0].day.mintemp_c;
    icon.setAttribute('src' , `https:${data.current.condition.icon}`) ;
    document.querySelector(".stat").innerHTML = data.current.condition.text ;
    // day two 
    document.querySelector("#date1").innerHTML= data.forecast.forecastday[1].date;
    document.querySelector(".num1").innerHTML = data.forecast.forecastday[1].day.maxtemp_c;
    document.querySelector(".low1").innerHTML = data.forecast.forecastday[1].day.mintemp_c;
    document.getElementById('icon1').setAttribute('src' ,`https:${data.forecast.forecastday[1].day.condition.icon}` );
    document.querySelector(".custom1").innerHTML = data.forecast.forecastday[1].day.condition.text ;
    // day three 
    document.querySelector(".date2").innerHTML= data.forecast.forecastday[2].date;
    document.querySelector(".num3").innerHTML = data.forecast.forecastday[2].day.maxtemp_c;
    document.querySelector(".low2").innerHTML = data.forecast.forecastday[2].day.mintemp_c;
    document.getElementById('icon3').setAttribute('src' ,`https:${data.forecast.forecastday[2].day.condition.icon}` );
    document.querySelector(".custom3").innerHTML = data.forecast.forecastday[2].day.condition.text ;
}
