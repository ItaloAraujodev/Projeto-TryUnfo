import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div className="container-form">
        <form action="">
          <label htmlFor="nomeCarta">
            Nome da carta:
            <input name="nomeCarta" data-testid="name-input" type="text" />
          </label>

          <label htmlFor="descriptionCarta">
            Descrição da carta:
            <textarea
              data-testid="description-input"
              name="descriptionCarta"
              id=""
              cols="30"
              rows="10"
            />
          </label>

          <label htmlFor="atributoCarta-1">
            Atributo 1
            <input
              data-testid="attr1-input"
              name="atributoCarta-1"
              type="number"
              min="0"
              max="5"
            />
          </label>

          <label htmlFor="atributoCarta-2">
            Atributo 2
            <input
              data-testid="attr2-input"
              name="atributoCarta-2"
              type="number"
              min="0"
              max="5"
            />
          </label>

          <label htmlFor="atributoCarta-3">
            Atributo 3
            <input
              data-testid="attr3-input"
              name="atributoCarta-3"
              type="number"
              min="0"
              max="5"
            />
          </label>

          <label htmlFor="urlImage">
            <input
              name="urlImage"
              data-testid="image-input"
              type="text"
              placeholder="URL da image"
            />
          </label>

          <label htmlFor="select-rari">
            <select data-testid="rare-input" name="select-rari" id="">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>

          <label htmlFor="checkboxInput">
            <input name="checkboxInput" data-testid="trunfo-input" type="checkbox" />
          </label>

          <button type="button" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
