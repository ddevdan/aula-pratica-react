import React from 'react';

function ButtonFilho(props) {
  return <button style={{ background: props.cor }} type="button">{props.cor}</button>;
}

function ComponentePai() {
  return (
    <div>
      <ButtonFilho cor="red" />
      <ButtonFilho cor="blue" />
    </div>
  );
}

export default ComponentePai;
