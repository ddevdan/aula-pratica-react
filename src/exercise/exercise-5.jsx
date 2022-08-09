import React from 'react';

import { COLORS } from '../constants';

function ButtonFilho({ cor, handleClick }) {
  return (
    <button style={{ background: cor }} type="button" onClick={handleClick}>
      {cor}
    </button>
  );
}

function ComponentePai() {
  const [cor, setCor] = React.useState(COLORS[0]);

  const handleClick = () => {
    const pRandom = Math.floor(Math.random() * (2 - 0 + 1), 10);
    const corAtual = COLORS[pRandom];
    setCor(corAtual);
  };

  /**
   * Troque a cor yellowgreen por "blue"
   * TODO
   * - Verifique se a cor === "yellowgreen", se sim, retorne o botão com a cor "blue" como prop
   */
  if (cor === '') {
    return (
      <div>
        <h3>
          Cor atual:
          {cor}
        </h3>
        <ButtonFilho cor={cor} handleClick={handleClick} />
      </div>
    );
  }

  return (
    <div>
      <h3>
        Cor atual:
        {cor}
      </h3>
      {/** TODO
          - Troque a cor BlueViolet por yellow, caso não seja ela, troque por "red" */}
      {cor === '' ? <ButtonFilho cor={cor} handleClick={handleClick} /> : <ButtonFilho cor={cor} handleClick={handleClick} />}

      {/* TODO
          - Renderize somente se a cor for "DarkBlue" */}
      {cor === '' && <ButtonFilho cor={cor} handleClick={handleClick} />}
    </div>

  );
}

export default ComponentePai;
