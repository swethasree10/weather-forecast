const api = {
    key: '56be0998cb0e4508ae98d39533d32532',
    base: "http://api.openweathermap.org/data/2.5/"

}

async function loadFunc(){

    var cityName = "Chennai";
    var url = api.base+"weather?q="+cityName+"&units=metric&APPID="+api.key;

    var response = await fetch(url);
    var weather = await response.json();
    //console.log(weather);

    displayWeather(weather);

}
    

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt){

    if(evt.keyCode == 13){ //enter key
        fetchWeather(searchbox.value);//passing the value from searchbox to fetchWeather()
        //console.log(searchbox.value);
    }
}

async function fetchWeather(cityName){

    var url = api.base+"weather?q="+cityName+"&units=metric&APPID="+api.key;

    var response = await fetch(url);
    var weather = await response.json();
    console.log(weather);

    displayWeather(weather);

}

function displayWeather(weather){

    var city = document.querySelector('.location .city');
    city.innerHTML = weather.name+", "+weather.sys.country;


    const months = {"Jan":"January", "Feb":"February",
                    "Mar":"March", "Apr":"April",
                    "May":"May", "Jun":"June",
                    "Jul":"July", "Aug":"August", 
                    "Sep":"September", "Oct":"October", 
                    "Nov":"November", "Dec":"December"};

    const days = {"Sun":"Sunday","Mon":"Monday",
                  "Tue":"Tuesday","Wed":"Wednesday", 
                  "Thu":"Thursday", "Fri":"Friday",
                  "Sat":"Saturday"};
    
    //var now = new Date();

    var day = new Date().toString().slice(0,3); 
    // alert(day);
    // alert(days[day]);

    var month = new Date().toString().slice(4,7); 
    // alert(month);
    // alert(months[month]);

    var date = new Date().toString().slice(8,10); 
    // alert(date);

    var year = new Date().toString().slice(11,15); 
    // alert(year);

    var displayDate = days[day]+" "+date+" "+months[month]+" "+year;
    var today = document.querySelector('.location .date');
    today.innerHTML = displayDate;


    var temp = document.querySelector('.current .temp');
    temp.innerHTML = Math.round(weather.main.temp)+"<span>°c</span>";
    
    var summary = document.querySelector('.current .weather');
    summary.innerHTML = weather.weather[0].main;

    var highlow = document.querySelector('.high-low');
    highlow.innerHTML = Math.round(weather.main.temp_min)+"°c / "+Math.round(weather.main.temp_max)+"°c";


}

    
