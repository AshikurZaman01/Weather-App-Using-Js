const apiKey = '4dc37895bfee1119f4f7d6ecb397adad';
const apiUrl =  'https://api.openweathermap.org/data/2.5/weather';



const searchBtn = document.getElementById('search-button');
searchBtn.addEventListener('click',()=>
{
    const cityName = document.getElementById('search-input');
    const city = cityName.value;

    if(city)
    {
        const chechWeather = async() =>
        {
            const response = await  fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
            let data = await response.json();
        
            console.log(data);
            const temperature = document.getElementById('temparature');
            temperature.innerText = data.main.temp;
            const displayCityName = document.getElementById('city-name');
            displayCityName.innerText = data.name;
            const country = document.getElementById('country');
            country.innerText = data.sys.country;
        
        
            const humidity = document.getElementById('humidity');
            humidity.innerText = data.main.humidity;
            const wind = document.getElementById('wind');
            wind.innerText = data.wind.speed;
        }
      

        chechWeather();
    }  else
        {
            alert("Enter City Name");
        }

        cityName.value = ''
})