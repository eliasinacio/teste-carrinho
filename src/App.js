import React from 'react'

import CardItem from './CardItem'

import './styles/App.scss';

class App extends React.Component {
  render () {
    return (
      <div className="total-area">
        <main className="cards-container">
          <h1>Click/touch to Select</h1>
          <CardItem />
        </main>
      </div>
    )
  }
}

export default App;