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
  - retrieves ShowMood data from browser storage,
  - maps to many sub-ShowMood components
  - ShowMood
    - mood, simplified weather data (from InputMood.saveMood()), and date

![Planning](https://lh3.googleusercontent.com/gLfyDkbvsRhraYVulRlNA6yhn8EXfyAXKnRO6lRy77EfycBGT7GzGBiGujidOPWX8WS9jY07DmN7E3_-DN096cRYa0riEl__4hpSFKI1tA2a73RJljozOE0k9n7lvKHihFmSEZKxMLA_-uMAUs3K4P9GOyEP4jXVtA-qmlc17InwU89VW8xSyN_K8zG1kJ_xA4ntU7lxO3AtwnNY3x6_zGZjuhHn4cAry6dMCQUTSrJiIB7zD2DsHYSeA4ok-yUsKjkd2c3nPzROkj7s6S-RSxO1s_kWSk3qWzrBe--hK1G9LbUQzwtXf-WLfMyurGko40nFuGY7s1FD18J65N-0K-pp5t8-y0SKiJ_x1UX-SlJKGiN3BH6xuxo9DUQRe82jsiK2fRLWebs10QOaLQWt3eOQZ46XO7-ZAXimuMQ43rSlUa48qqH7XPQ4a6k8WO7qBssb0CgXsuW8UzjCjWufPDqjtGOv_3-wX1zyavDvJKwO363WAWCJlAkoa9JSj5tYEanwqwx2CDtY94wxm_2uAosF2DZEzqXymCGKGe4I0KjbS148iFySvd1OfNTdfYObYyMVvz0EBVMtEkOpS1NchQu-45qb8PwnJ5KpreQV0f88SSfH-LjGkyi293X-PJauqJPoCa6cM-t10zT4TYxLLOjwrlfqYHvy=s1878-no)