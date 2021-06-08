import React from 'react';

import '../styles/Cards.scss'

class CardItem extends React.Component {
  render () {
    return (
      <div className="card-item">
        <img className="card-img" 
          src={this.props.imageUrl} alt={"image of " + this.props.name}></img>
        <div className="card-info">
          <h1 className="card-name">{ this.props.name }</h1>
          <h2 className="card-price">R$ { (this.props.price / 100).toFixed(2).replace('.', ',') }</h2>
        </div>
      </div>
    )
  }
}


export default CardItem;