
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?appid=a7767b2995dc98b4cc0be0d07f714d30&units=metric&q=';
// const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=a7767b2995dc98b4cc0be0d07f714d30&units=metric';




const weatherBtn = document.getElementById('weatherBtn');
const weatherInfo = document.getElementById('mainInfo');
const weatherAddInfo = document.getElementById('additonalinfo');
const weatherInput = document.getElementById('weatherInput')

function clickOrKeyPress(event) {
    //function for clikc and enter key
    if (event.type === 'click' || event.key === 'Enter') {
        loaderStart();
        const city = weatherInput.value;
        fetchWeather(city);
        weatherInput.value = ''; 
    }
}

function fetchWeather(city) {
    // replace text in link on city
    // const newWeatherUrl = weatherUrl.replace('{city name}', city);
    const newWeatherUrl = weatherUrl + encodeURIComponent(city);

    // encodeURIComponent() в JavaScript используется для кодирования строки в формате URL, 
    // делая её безопасной для передачи через сеть или в качестве части URL. Она заменяет определенные символы в строке специальными кодами, 
    // чтобы они могли быть интерпретированы правильно сервером при обработке запроса.

    // Например, если вы вводите город с пробелами или специальными символами (например, "New York"), 
    // encodeURIComponent() заменит пробелы на %20 и другие специальные символы на их коды. Это позволяет вам использовать строку в URL 
    // без риска ошибок из-за неправильного формата.

    console.log(newWeatherUrl);

    return fetch(newWeatherUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('error. response not ok');
            }
            return response.json();

        }).then(data => {

            displayWeatherData(data);

        }).catch(error => {
            displayError(error.message);
        }).finally(() => {
            loaderStop();
        })

}

function clearWeatherBlock() {
    weatherInfo.innerHTML = '';
}

function parseTemp(temp) {
    return newTemp = parseInt(temp);
}
function displayWeatherData(data) {
    clearWeatherBlock();


    weatherInfo.innerHTML = `
       
                        <div class="cityTemp"><span class="tempDeg">${parseTemp(data.main.temp)}</span><img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon"></div>
                        <div class="city"> ${data.name}, ${data.sys.country} </div>
                        <span class="localTime"></span> 
                        <div class="tempLevel">H : ${parseTemp(data.main.temp_max)}°C / L : ${parseTemp(data.main.temp_min)}°C</div>`;
    weatherAddInfo.innerHTML = `
                    
                        <div class="weatherDescr">${data.weather[0].main}</div>
                        <div class="weatherHumidity">${data.main.humidity} %</div>
                        <div class="windSpeed">${data.wind.speed} m/s</div>
                    `;
        
}
function displayError(errorMessage) {
    clearWeatherBlock();
    const errorText = document.createElement('p');
    errorText.classList.add('error');
    errorText.textContent = errorMessage;
    weatherInfo.appendChild(errorText);
}
const loader = document.getElementById('loader');

function loaderStart() {
    weatherBtn.disable = true;
    loader.classList.add('active');
}
function loaderStop() {
    weatherBtn.disable = false;
    loader.classList.remove('active');
}


weatherBtn.addEventListener('click', clickOrKeyPress);
weatherInput.addEventListener('keydown', clickOrKeyPress);