import React from 'react';

const COLORS = ['Deep Orange', 'Deep Purple', 'yellowgreen'];

function ButtonFilho({ cor, handleClick }) {
  <button style={{ background: cor }} type="button" onClick={handleClick}>
    {cor}
  </button>;
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
  if (cor === 'yellowgreen') return <ButtonFilho cor="blue" handleClick={handleClick} />;

  return (
    <div>
      {/* Troque a cor Deep Purple por yellow, caso não seja ela, troque por "red" */}
      {cor === 'Deep Purple'
        ? <ButtonFilho cor="yellow" handleClick={handleClick} />
        : <ButtonFilho cor="red" handleClick={handleClick} />}

      {/* Renderize somente se a cor for "Deep Orange" */}
      {cor === 'Deep Orange' && <ButtonFilho cor={cor} handleClick={handleClick} />}
    </div>

  );
}

export default ComponentePai;
