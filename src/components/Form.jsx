import React from 'react';
import './formStyle.css';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3 } = this.props;
    const { cardImage, cardRare, cardTrunfo, hasTrunfo } = this.props;
    const { isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;

    return (
      <div className="container-form">
        <form className="form-itens" action="">
          <h2 className="title">Adicionar nova carta</h2>
          <label htmlFor="name-input">
            <input
              id="name-input"
              className="input-geral"
              data-testid="name-input"
              type="text"
              name="cardName"
              value={ cardName }
              placeholder="Digite o nome da carta"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="description-input">
            <p>Descrição da carta:</p>
            <textarea
              id="description-input"
              data-testid="description-input"
              className="text-area"
              name="cardDescription"
              cols="30"
              rows="10"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr1-input">
            <span className="raridadeStyle">Atributo 1: </span>
            <input
              className="input-geral"
              id="attr1-input"
              data-testid="attr1-input"
              name="cardAttr1"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr2-input">
            <span>Atributo 2: </span>
            <input
              id="attr2-input"
              className="input-geral"
              data-testid="attr2-input"
              name="cardAttr2"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr3-input">
            <span>Atributo 3: </span>
            <input
              id="attr3-input"
              className="input-geral"
              data-testid="attr3-input"
              name="cardAttr3"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="image-input">
            <span>Imagem: </span>
            <input
              className="input-geral"
              id="image-input"
              name="cardImage"
              data-testid="image-input"
              type="text"
              placeholder="URL da image"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="rare-input">
            <span>Raridade: </span>
            <select
              id="rare-input"
              className="input-geral"
              data-testid="rare-input"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>

            </select>
          </label>

          {!hasTrunfo
            ? (
              <label htmlFor="trunfo-input">
                Super Trybe Trunfo
                <input
                  id="trunfo-input"
                  data-testid="trunfo-input"
                  name="cardTrunfo"
                  type="checkbox"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
              </label>) : <p>Você já tem um Super Trunfo em seu baralho</p> }

          <button
            data-testid="save-button"
            type="button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>

      </div>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,

};

export default Form;
