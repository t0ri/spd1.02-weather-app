export const getDateObj = (newDate=undefined) => {
  // Returns dateObj, an Object containing a date in various forms
  // Date can be an argument or be created new on function call without arguments
  const date = newDate ? new Date(newDate) : new Date()   // create a `newDate(newDate)`, or create a `new Date()`
  const dateDisplay = date.toDateString().substr(0, date.toDateString().length - 5)
  const dateUniform = date.toLocaleDateString().substr(0,10).split('/').join('-')
  const dateObj = {
    date,          // 1998-02-19T20:14:01.042Z
    dateUniform,   // 02-19-98
    dateDisplay,   // Thu Feb 19
  }

  return dateObj
}

export const getWeatherObj = (weather) => {
  // Returns necessary data from API response
  const weatherObj = {
    "temp": Math.floor((weather.main.temp - 273) * (9/5) + 32), // convert Kelvin to F
    "desc": weather.weather[0].main // "Rain"
  }
  return weatherObj
}
