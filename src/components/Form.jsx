/* eslint-disable react/jsx-max-depth */
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
      <div>
        <h2 className="text-center title m-3">Adicionar nova carta</h2>
        <form className="form-container" action="">
          <div className="d-flex flex-column form-group mb-2">
            <span className="mb-2 input-names">Nome</span>
            <input
              id="name-input"
              data-testid="name-input"
              type="text"
              name="cardName"
              className="name-input p-1"
              value={ cardName }
              placeholder="Digite o nome da carta"
              onChange={ onInputChange }
            />
          </div>

          <div className="d-flex flex-column form-group">
            <span className="input-names">Descrição</span>
            <textarea
              id="textarea"
              data-testid="description-input"
              name="cardDescription"
              cols="30"
              rows="10"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </div>

          <div className="mt-2 mb-2">
            <div className="d-flex mb-2">
              <h2 className="input-names me-6 nova">Attr01</h2>
              <input
                className="input-att"
                id="attr1-input"
                data-testid="attr1-input"
                name="cardAttr1"
                type="number"
                value={ cardAttr1 }
                onChange={ onInputChange }
              />
            </div>

            <div className="d-flex mb-2">
              <h2 className="input-names me-6 nova">Attr02</h2>
              <input
                id="attr2-input"
                className="input-att"
                data-testid="attr2-input"
                name="cardAttr2"
                type="number"
                value={ cardAttr2 }
                onChange={ onInputChange }
              />
            </div>

            <div className="d-flex">
              <h2 className="input-names me-6 nova">Attr03</h2>
              <input
                id="attr3-input"
                className="input-att"
                data-testid="attr3-input"
                name="cardAttr3"
                type="number"
                value={ cardAttr3 }
                onChange={ onInputChange }
              />
            </div>
          </div>

          <div className="d-flex input-group">
            <div className="d-flex justify-content-center align-items-center">
              <h2 className="input-names text-center nova-image me-6">Imagem</h2>
            </div>
            <input
              className="input-image p-1"
              id="image-input"
              name="cardImage"
              data-testid="image-input"
              type="text"
              placeholder="URL da image"
              value={ cardImage }
              onChange={ onInputChange }
            />
            <span
              className="d-flex justify-content-center align-items-center copi"
            >
              <FiLink className="icon-image" />

            </span>
          </div>

          <div className="mt-3">
            <h2 className="input-names me-6 ">Raridade</h2>
            <select
              id="rare-input"
              className="name-input input-raridade p-2"
              data-testid="rare-input"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>

            </select>
          </div>

          <div className="d-flex justify-content-around align-items-center mt-5">
            <div>
              {!hasTrunfo
                ? (

                  <div className="d-flex justify-content-center align-items-center">
                    <input
                      id="trunfo-input"
                      data-testid="trunfo-input"
                      className="me-1 ckecket"
                      name="cardTrunfo"
                      type="checkbox"
                      checked={ cardTrunfo }
                      onChange={ onInputChange }
                    />
                    <h2 className="ckecket-name">Super Tryunfo</h2>
                  </div>
                ) : <p>Você já tem um Super Trunfo em seu baralho</p> }
            </div>
            <div>

              <button
                className="button-save"
                data-testid="save-button"
                type="button"
                disabled={ isSaveButtonDisabled }
                onClick={ onSaveButtonClick }
              >
                Salvar
              </button>
            </div>
          </div>
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
