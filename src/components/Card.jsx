import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assents/logo.png';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3 } = this.props;
    const { cardImage, cardRare, cardTrunfo } = this.props;

    return (
      <div>
        <div className="d-flex justify-content-center align-items-center card-container">
          <div className="d-flex justify-content-center align-items-center card-contexto">
            <div className='conteudo'>
              <div className='d-flex justify-content-end title-bg'>
                <h2 data-testid="name-card">{cardName}</h2>
              </div>
              <div className='imagens-cards'>
                <img
                  className="image"
                  data-testid="image-card"
                  src={cardImage}
                  alt={cardName}
                />
                {cardTrunfo ? <img className='logo' src={logo} data-testid="trunfo-card"></img> : null}
              </div>
              <p className='description-card' data-testid="description-card">{cardDescription}</p>

              <div className="d-flex flex-column justify-content-center align-items-center todos-att">
                <div className='d-flex justify-content-between align-items-center' data-testid="attr1-card">Attr1..................................
                  <span>{cardAttr1}</span>
                </div>

                <div className='d-flex justify-content-between align-items-center' data-testid="attr2-card">Attr2..................................
                  <span className='flo'>{cardAttr2}</span>
                </div>
                <div className='d-flex justify-content-between align-items-center' data-testid="attr3-card">Attr3..................................
                  <span className='flo'>{cardAttr3}</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
