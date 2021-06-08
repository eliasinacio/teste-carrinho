import React from 'react'

import CardsList from './Components/CasdsList'

import './styles/App.scss';

class App extends React.Component {
  render () {
    return (
      <div className="total-area">
        <CardsList />
      </div>
    )
  }
}

export default App;