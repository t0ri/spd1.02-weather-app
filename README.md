# Weather/Mood App
Weather/Mood React app using the OpenWeatherMap API, made for a 2-day take home challenge for SPD 1.02 at Make School.

## Start App


## Challenge
"Use React.js to build the OpenWeatherMap API to create a weather app. Allow anonymous users to input their mood each day corresponding to the weather."

## Planning
![Planning](https://lh3.googleusercontent.com/fQ7dq6d-iq0PTVjE1wF3-jEM2HC9Nx6sJvmBpmkQnhkXwBxoyb0-E3Kko1BDiAbMO2RR1Wxj2WPra-qf56POgha--5a2T30qhHMARH7Phc5NWNtQSBAHSRWTbqomm-Vz9SeHk-cTTp78YT3EKR2SmALbrAf7Vxf1Hwti0ETlu8uOo2nhCsAx_2gym8t78bwUFGC6fYClFxSrV1kyqZ_2sB6D3gcgNmIjHCmaot20GuGo8EQ3Rj8wPUtjuf0oLm8IJIJm_8RlPa3slA0Pv1VH_dwwxngJ3ypbV5sCxEECD3UfKJ7LZdCEwLUA-i3VCheaKkzuh0FypTFubQeUKyaNoHBB_0I9WoW3myTr-wfLuqQ7st07e2bo-wNsFqr_2oAbbuXEQzS4aswrSQRzFLNQIUDzsnADAndaCmbwe74nTrREYvHX5Bl04KXCW-mDI6Rq5ixTH4ThAEgeO1DF7dU_pkrRx22u65JEAtAOloxSLzvrdvfucpZi5NU3I4O9tpyVU9Te9r10HM5euYEz-vbLUukb9LDFGQuXymz5TS-UudOO-GDnezmdg3Qk8AIvYQeFf8y6-Io5yP2Ncp_0qa0E7HUoD4asyxyV8UkD_GARcrjXmJu3VV-dwbjv56gWzZt2gBpayjzNagCo76jhXgn1rzzf6n1c22Cw=w2483-h1617-no)
Components
- InputMood
  - zip and mood input
  - saveMood() method to save data appropriately in browser storage?
- ShowMoods
  - retrieves ShowMood data from browser storage,
  - maps to many sub-ShowMood components
  - ShowMood
   - mood, simplified weather data (from InputMood.saveMood()), and date

## To Do
Bugs:
- Click delay onSubmit?
Refactoring:
- ShowMood as functional component
- Clean Sass files
- Fix all CSS/SCSS file structure
- Add CSS comments?
- Continue to add comments throughout if needed
Stretch Goals:
- Geolocation API to autodetect where you are
- Alternative to localStorage
