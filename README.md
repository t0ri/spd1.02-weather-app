# Weather/Mood App
Weather/Mood React app using the OpenWeatherMap API, made for a 2-day take home challenge for SPD 1.02 at Make School.

## Challenge
"Use React.js to build the OpenWeatherMap API to create a weather app. Allow anonymous users to input their mood each day corresponding to the weather."

## Planning
Components
- InputMood
  - zip and mood input
  - saveMood() method to save data appropriately in browser storage?
- ShowMoods
  - maps many sub-ShowMood components
  - ShowMood
    - mood, simplified weather data (from InputMood.saveMood()), and date

