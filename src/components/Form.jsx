import React from 'react';
import './formStyle.css';
import PropTypes from 'prop-types';
import { FiLink } from 'react-icons/fi';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3 } = this.props;
    const { cardImage, cardRare, cardTrunfo, hasTrunfo } = this.props;
    const { isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;

    return (
      <form className="form-container" action="">
        <h2 className="title">Adicionar nova carta</h2>
        <label htmlFor="name-input" className="nameCard">
          <span><strong>Nome</strong></span>
          <input
            id="name-input"
            className="nameCard"
            data-testid="name-input"
            type="text"
            name="cardName"
            value={ cardName }
            placeholder="Digite o nome da carta"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description-input">
          <span><strong>Descrição</strong></span>
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

        <label htmlFor="attr1-input" className="atributos">
          <span><strong>Attr01</strong></span>
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

        <label htmlFor="attr2-input" className="atributos">
          <span><strong>Attr02</strong></span>
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

        <label htmlFor="attr3-input" className="atributos">
          <span><strong>Attr03</strong></span>
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

        <label htmlFor="image-input" className="addImage">
          <span><strong>Imagem</strong></span>
          <FiLink className="icon-image" />
          <input
            className="imageStyle"
            id="image-input"
            name="cardImage"
            data-testid="image-input"
            type="text"
            placeholder="URL da image"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rare-input" className="cardRaridade">
          <span><strong>Raridade</strong></span>
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
            <label htmlFor="trunfo-input" className="cardTrunfo">
              <input
                id="trunfo-input"
                data-testid="trunfo-input"
                name="cardTrunfo"
                type="checkbox"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
              <span><strong>Super Trybe Trunfo</strong></span>
            </label>) : <p>Você já tem um Super Trunfo em seu baralho</p> }

        <button
          className="buttonSave"
          data-testid="save-button"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
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
