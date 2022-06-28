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

  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const array = [
      'cardName',
      'cardDescription',
      'cardImage',
      'cardRare',
      'cardAttr1',
      'cardAttr2',
      'cardAttr3',
      'isSaveButtonDisabled',
    ];

    const cartas = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    };
    this.setState((prevState) => ({
      cartasState: [...prevState.cartasState, cartas],
    }), () => {
      array.forEach((item) => {
        if (item === 'isSaveButtonDisabled') {
          this.setState({ [item]: true });
        } else if (item === 'cardAttr1' || item === 'cardAttr2' || item === 'cardAttr3') {
          this.setState({ [item]: '0' });
        } else {
          this.setState({ [item]: '' });
        }
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
    return (
      <div>
        <h1>Tryunfo</h1>
        <div className="container-geral">
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            /*  cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }a
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.onInputChange } */
          />

          <Card
            { ...this.state }

            /* cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo } */
          />
        </div>
      </div>
    );
  }
}

export default App;
