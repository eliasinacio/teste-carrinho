import React from 'react';

import './styles/Cards.scss'

class CardItem extends React.Component {
  render () {
    return (
      <div className="card-item">
        <img className="item-img" src="https://a" alt="imagem BomBom Garoto"></img>
        <div className="item-info">
          <h1 className="item-name">BomBom Garoto</h1>
          <h2 className="item-price">R$ 3,00</h2>
        </div>
      </div>
    )
  }
}


export default CardItem;