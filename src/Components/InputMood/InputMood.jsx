import React, { Component } from 'react'
import './InputMood.css'

export default class InputMood extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zip: '',
      mood: '',
    }
  }

  render() {
    return (
      <section id="input-mood">
        <div>
          <label>
            <h2>what's your zip? <span role="img" aria-label="Earth Globe Americas Emoji">🌎</span></h2>
            <input
              type="text"
              pattern="(\d{5}([\-]\d{4})?)"
              placeholder="enter your zip!"
              className="form-elements">
            </input>
          </label>
          <label>
            <h2>how ya feelin'? <span role="img" aria-label="Woman Health Worker">👩‍⚕️</span></h2>
            <select name="mood">
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
              <option value="dazed">dazed</option>
              <option value="embarrassed">embarrassed</option>
              <option value="sad">sad</option>
              <option value="tense">tense</option>
              <option value="uncomfortable">uncomfortable</option>
            </select>
          </label>
          <button>submit!</button>
        </div>
      </section>
    )
  }
}
