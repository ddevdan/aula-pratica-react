import React from 'react';

function ButtonFilho() {
  /**
   * Componente podem ter PROPS, props são propriedades dos componentes
   * e podem ser passadas no momento em que são chamados.
   *
   * Props são essenciais para o React, com elas conseguimos customizar nossos componentes.
   * O componente recebe as "props" como parametro
   *
   * TODO
   * - Passe "props" como parametro da função ButtonFilho
   * - Tente trocar a palavra "red" por props.cor
   */

  return <button style={{ background: 'red' }} type="button">red</button>;
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
