import React from 'react';

import { COLORS } from '../../constants.js';

function ButtonFilho({ cor, handleClick }) {
  console.log(cor);
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
    console.log(corAtual);
    setCor(corAtual);
  };

  return (
    <div>
      {/* As alterações só acontecem porque estamos usando o state * */}
      <ButtonFilho cor={cor} handleClick={handleClick} />
    </div>

  );
}

export default ComponentePai;
