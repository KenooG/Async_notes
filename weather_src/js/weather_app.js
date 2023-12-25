
async function getMyLocation() {

    return new Promise((resolve, reject) => {

        navigator.geolocation.getCurrentPosition(resolve, reject)

    })


}


const getCityBtnRef = document.querySelector('#find-me')


const apiKey = "be9d59508ab3b5ffd2ca55f1e1597464";

const searchBtn = document.querySelector('#cityButton')
const cityInput = document.querySelector('#city')
const weatherForm = document.querySelector('.weatherForm')



getCityBtnRef.addEventListener('click', async (ev) => {

    const {coords: {latitude, longitude}} = await getMyLocation()



    const {name} = await getCity(longitude, latitude)

    console.log(name)

    cityInput.value = name
})



weatherForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const city = cityInput.value

    if (city !== '') {
        // getLongLat(city).then((data) => console.log(data))   // sztuczka
        const {coord: {lon, lat}} = await getLongLat(city)

        const data = await getCurrentWeather(lon, lat)
        console.log(data)
    }
})

async function getLongLat(city) {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`, {})

    return await response.json()


}


async function getCity(lat, long){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`)

    return await response.json()

}


async function getCurrentWeather(long, lat) {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`)


    return await response.json()
}




