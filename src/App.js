import React, { Component } from 'react'

import InputMood from './Components/InputMood/InputMood'
import ShowMood from './Components/ShowMood/ShowMood'

import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      entries: undefined
    }

    this.appendNewEntry = this.appendNewEntry.bind(this)
    this.deleteEntries = this.deleteEntries.bind(this)
  }
  
  componentDidMount() {
    const { entries } = this.state
    if (entries === undefined) {
      if (localStorage.getItem('entries') === null) {
        // if `this.state.entries` is undefined and localStorage's entries is null
        // set localStorage's entries to `this.state.entries` (aka [])
        this.setState({ entries: [] })
        localStorage.setItem('entries', entries)
      } else {
        // if `this.state.entries` is undefined but localStorage's entries is not null
        // and set `this.state.entries` to localStorage's entries
        const data = localStorage.getItem('entries')
        this.setState({ entries: JSON.parse(data) })
      }
    } else {
      // if `this.state.entries` is not undefined
      // set localStorage's entries to that array
      localStorage.removeItem('entries')
      localStorage.setItem('entries', JSON.stringify(entries))
    }
  }

  componentDidUpdate() {
    // re-set localStorage's entries with each render
    const { entries } = this.state
    localStorage.removeItem('entries')
    localStorage.setItem('entries', JSON.stringify(entries))
  }

  appendNewEntry(entry) {
    // statefully update `this.state.entries`
    this.setState({ entries: [...this.state.entries, entry] })
  }

  deleteEntries() {
    // deletes all entries from state and localStorage
    this.setState({ entries: [] })
    localStorage.removeItem('entries')
  }

  mapEntriesToComponents() {
    const { entries } = this.state
    if (entries) {
      if (entries.length > 0) {
        // if `this.state.entries` is defined (not initial render) and
        // longer than 0 entries, render ShowMood component for each entry
        return entries.map(entry => <ShowMood key={entry} entry={entry} />)
      }
    }
  }

  render() {
    return (
      <div className="App">
        {/* Input Component */}
        <InputMood onSubmit={this.appendNewEntry} />
        
        {/* Entries Components */}
        <section id="show-mood">
          {this.mapEntriesToComponents()}
        </section>

        {/* Delete Button */}
        <p id="delete-entries" onClick={this.deleteEntries}>Delete My Entries</p>
        <p id="tori">made by <a href="http://www.github.com/t0ri">tori</a> ✨💖 in 2019</p>
      </div>
    )
  }
}
