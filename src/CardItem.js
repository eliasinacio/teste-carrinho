import React from 'react';

import './styles/Cards.scss'

class CardItem extends React.Component {
  render () {
    return (
      <div className="card-item">
        <img className="card-img" 
          src="http://codeby.vteximg.com.br/arquivos/ids/159959-800-1029/truffon-meio-amargo.png?v=636930938547630000"
          alt="imagem BomBom Garoto"></img>
        <div className="card-info">
          <h1 className="card-name">BomBom Garoto</h1>
          <h2 className="card-price">R$ 3,00</h2>
        </div>
      </div>
    )
  }
}


export default CardItem;