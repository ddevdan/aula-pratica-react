import React from 'react';

const COLORS = ['Deep Orange', 'Deep Purple', 'yellowgreen'];

function ButtonFilho({ cor, handleClick }) {
  <button style={{ background: cor }} type="button" onClick={handleClick}>
    {cor}
  </button>;
}

function ComponentePai() {
  const [color, setColor] = React.useState(true);

  const handleClick = () => {
    const pRandom = parseInt(Math.random() * (2 - 0 + 1), 10);
    const corAtual = COLORS[pRandom];
    setColor(corAtual);
  };

  return (
    <div>
      {/* As alterações só acontecem porque estamos usando o state * */}
      <ButtonFilho cor={color} handleClick={handleClick} />
    </div>

  );
}

export default ComponentePai;
