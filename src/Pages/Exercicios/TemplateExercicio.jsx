import React from 'react';

export default function TemplateExercicio({ position, children, showSolution }) {
  return (
    <div>
      <h2>
        {showSolution ? 'Solução' : 'Exercício'}
        {position}
      </h2>
      <div className="tabs">
        {children}
      </div>
    </div>
  );
}
