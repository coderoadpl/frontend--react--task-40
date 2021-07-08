import React from 'react'

class App extends React.Component {
  constructor () {
    super()
    console.log('1. constructor')
    // WARNING! Just an example, do not mess with real DOM nodes in React
    console.log(document.querySelector('h1'))
  }

  // WARNING! Not Deprecated, but rare use case
  // static getDerivedStateFromProps () {
  //   console.log('2. getDerivedStateFromProps')
  //   // WARNING! Just an example, do not mess with real DOM nodes in React
  //   console.log(document.querySelector('h1'))
  // }

  // WARNING! Deprecated!
  // UNSAFE_componentWillMount () {
  //   console.log('3. UNSAFE_componentWillMount')
  //   // WARNING! Just an example, do not mess with real DOM nodes in React
  //   console.log(document.querySelector('h1'))
  // }

  componentDidMount () {
    console.log('5. componentDidMount')

    // it is a goog place for effects
    // like fetch

    // WARNING! Just an example, do not mess with real DOM nodes in React
    console.log(document.querySelector('h1'))
  }

  render () {
    console.log('4. render')
    // WARNING! Just an example, do not mess with real DOM nodes in React
    console.log(document.querySelector('h1'))

    return (
      <h1>
        CodeRoad APP
      </h1>
    )
  }
}

export default App
