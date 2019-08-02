import React, { Component } from 'react'
import './InputMood.css'
import { getDateObj, getWeatherObj } from './../../utils'

export default class InputMood extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zip: '',
      mood: '',
      weatherData: undefined,
    }

    this.submit = this.submit.bind(this)
    this.getAPIData = this.getAPIData.bind(this)
  }

  getAPIData(zip) {
    const key = '150d08ec845e46d771bfc2e74380f543'
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${key}`
    // Fetch OpenWeatherMap Data from given zip code
    // set data to `this.state.weatherData`
    fetch(url)
      .then(res => res.json())
      .then(json => { this.setState({ weatherData: json }) })
  }

  submit() {
    const { zip, mood, weatherData } = this.state
    const { onSubmit } = this.props
    let data // controls waiting on API data, scoping
    // Get `this.state.weatherData` from API response
    this.getAPIData(zip)
    if (weatherData) {
      // if `this.state.weatherData` is defined, set entry data
      // using imported helper functions
      data = {
        "weather": getWeatherObj(weatherData),
        mood,
        "date": getDateObj().dateDisplay
      }
    }
    if (data) {
      // once data is defined, pass to parent component (App.js)
      onSubmit(data)
    }
  }

  render() {
    // Conditional rendering control for submit button
    let button = undefined
    if (this.state.zip && this.state.mood) {
      button = <button onClick={this.submit}>submit!</button>
    }

    return (
      <section id="input-mood">


        {/* Zip Code Input */}
        <label>
          <h1><span role="img" aria-label="Hand Waving Emojis">👋👋👋</span></h1>
          <h1>where are ya? <span role="img" aria-label="Earth Globe Americas Emoji">🌎</span></h1>
          <input
            value={this.state.zip}
            onChange={e => this.setState({ zip: e.target.value })}
            type="text"
            pattern="(\d{5}([\-]\d{4})?)"
            placeholder="my usa zip"
          />
        </label>

        {/* Mood Input */}
        <label>
          <h1>what's the mood? <span role="img" aria-label="Hot Tea Emoji">☕</span></h1>
          <select
            name="mood"
            value={this.state.mood}
            onChange={e => this.setState({ mood: e.target.value })}
          >
            {/* Mood Options */}
            <option value="" defaultValue disabled hidden>my mood</option>
            <option value="happy">happy</option>
            <option value="confident">confident</option>
            <option value="energized">energized</option>
            <option value="fine">fine</option>
            <option value="inspired">inspired</option>
            <option value="focused">focused</option>
            <option value="flirty">flirty</option>
            <option value="playful">playful</option>
            <option value="angry">angry</option>
            <option value="bored">bored</option>
            <option value="embarrassed">embarrassed</option>
            <option value="sad">sad</option>
            <option value="tense">tense</option>
            <option value="uncomfortable">uncomfortable</option>
          </select>
        </label>
        
        {/* Conditionally rendered submit button */}
        {button}
      </section>
    )
  }
}
