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
   */
  if (cor === 'yellowgreen') {
    return (
      <div>
        <h3>
          Cor atual:
          {cor}
        </h3>
        <ButtonFilho cor="blue" handleClick={handleClick} />
      </div>
    );
  }

  return (
    <div>
      <h3>
        Cor atual:
        {cor}
      </h3>
      {/* Troque a cor BlueViolet por yellow, caso não seja ela, troque por "red" */}
      {cor === 'BlueViolet'
        ? <ButtonFilho cor="yellow" handleClick={handleClick} />
        : <ButtonFilho cor="red" handleClick={handleClick} />}

      {/* Renderize somente se a cor for "Deep Orange" */}
      {cor === 'DarkBlue' && <ButtonFilho cor={cor} handleClick={handleClick} />}
    </div>

  );
}

export default ComponentePai;
