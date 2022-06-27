import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
      atributo1: '',
      atributo2: '',
      atributo3: '',
      image: '',
      raro: '',
      checkboxInput: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name, value, type, checked } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  }

  render() {
    const { name, description, atributo1, atributo2, atributo3, image } = this.state;
    const { raro, checkboxInput } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <div className="container-geral">
          <Form
            cardName={ name }
            cardDescription={ description }
            cardAttr1={ atributo1 }
            cardAttr2={ atributo2 }
            cardAttr3={ atributo3 }
            cardImage={ image }
            cardRare={ raro }
            cardTrunfo={ checkboxInput }
            onInputChange={ this.onInputChange }
          />

          <Card
            cardName={ name }
            cardDescription={ description }
            cardAttr1={ atributo1 }
            cardAttr2={ atributo2 }
            cardAttr3={ atributo3 }
            cardRare={ raro }
            cardTrunfo={ checkboxInput }
            cardImage={ image }
          />

        </div>
      </div>
    );
  }
}

export default App;
