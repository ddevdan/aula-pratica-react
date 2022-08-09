import React from 'react';
import { Link } from 'react-router-dom';

export default function TemplateExercicio({ position, children, showSolution }) {
  const proximo = position + 1;
  const anterior = position - 1;
  const isLast = proximo > 7;
  const isFirst = anterior < 1;
  return (
    <div>
      <h2>
        {showSolution ? 'Solução ' : 'Exercício '}
        {position}
      </h2>
      <div className="tabs">
        {children}
      </div>

      {!isFirst && <Link to={`/exercises/${anterior}`}>ANTERIOR</Link>}
      {!isLast && <Link to={`/exercises/${proximo}`}>PROXIMO</Link>}

    </div>
  );
}
