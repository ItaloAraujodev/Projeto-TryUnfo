import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cartasState: [],
      hasTrunfo: false,
    };
  }

  conditionSaved = () => {
    const numberMax = 210;
    const numberMin = 90;
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const Att1 = Number(cardAttr1) >= 0 && Number(cardAttr1) <= numberMin;
    const Att2 = Number(cardAttr2) >= 0 && Number(cardAttr2) <= numberMin;
    const Att3 = Number(cardAttr3) >= 0 && Number(cardAttr3) <= numberMin;
    const text = cardName !== '' && cardDescription !== '' && cardImage !== '';
    const text2 = cardRare !== '';
    const numMax = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= numberMax;

    this.setState({
      isSaveButtonDisabled: !(text && numMax && Att1 && Att2 && Att3 && text2),
    });
  };

  trunfo = () => {
    const { cartasState } = this.state;
    return cartasState.some(({ cardTrunfo }) => cardTrunfo);
  }

  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const { cardAttr1, cardAttr2, cardAttr3, cardTrunfo } = this.state;
    const cartas = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    };
    this.setState((prevState) => ({
      cartasState: [...prevState.cartasState, cartas],
    }), () => {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardImage: '',
        cardRare: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        hasTrunfo: this.trunfo(),
      });
    });
  }

  onInputChange = ({ target }) => {
    const { name, value, type, checked } = target;
    this.setState(
      {
        [name]: type === 'checkbox' ? checked : value,
      },
      () => this.conditionSaved(),
    );
  };

  render() {
    const { hasTrunfo, cartasState } = this.state;
    return (
      <div>
        <h1 className="title">Tryunfo</h1>
        <div className="container-geral">
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            hasTrunfo={ hasTrunfo }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            { ...this.state }
          />
        </div>
        <h2>Todas as cartas</h2>
        <div className="carta-clone">
          { cartasState.map((item) => (
            <Card
              key={ item.cardName }
              cardName={ item.cardName }
              cardDescription={ item.cardDescription }
              cardAttr1={ item.cardAttr1 }
              cardAttr2={ item.cardAttr2 }
              cardAttr3={ item.cardAttr3 }
              cardImage={ item.cardImage }
              cardRare={ item.cardRare }
              cardTrunfo={ item.cardTrunfo }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
