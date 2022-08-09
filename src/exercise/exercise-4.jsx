import React from 'react';

const COLORS = ['Deep Orange', 'Deep Purple', 'yellowgreen'];

function ButtonFilho({ cor, handleClick }) {
  <button style={{ background: cor }} type="button" onClick={handleClick}>
    {cor}
  </button>;
}

function ComponentePai() {
  /** State dão vida ao componente
   *
   * Com ele conseguimos mudar a aparencia do botão após uma interação do usuário
   * Nesse exercicio você vai conseguir mudar a cor do botão toda vez que clicar nele.
   * Isso só é possível, no React, porque usamos o STATE.
   *
   * Para isso você precisará criar a estrutura do hook useState
   * const [state, setState] = React.useState(estadoInicial);
   * state => estado atual do componente
   * setState => função para alterar o estado atual
   *
   * TODO
   * - Crie o useState para criar um estado local para o componente
   * - Esse estado será usado para alterar a cor do botão toda vez que ele for clicado
   */

  const handleClick = () => {
    const pRandom = Math.floor(Math.random() * (2 - 0 + 1), 10);
    const corAtual = COLORS[pRandom];

    /**
     * TODO
     * - Chame a função de alteração do estado aqui e passe a corAtual como parametro
     * DICA: setCor() ou setState()
     */
  };

  return (
    <div>
      {/* As alterações visuais só acontecem quando usamos o state * */}
      {/* TODO
          - Passe o state como parametro da prop "cor" */}
      <ButtonFilho cor="red" handleClick={handleClick} />
    </div>

  );
}

export default ComponentePai;
