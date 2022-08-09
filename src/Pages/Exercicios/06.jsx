import React from 'react';
import TemplateExercicio from './TemplateExercicio';
import Exercise6 from '../../exercise/exercise-6';
import Solution6 from '../../exercise/solved/exercise-6';

export default function ListaExercicio() {
  const [showSolution, setShowSolution] = React.useState(false);
  return (
    <div className="exercise__list">
      <TemplateExercicio key={6} position={6} showSolution={showSolution}>
        {showSolution ? <Solution6 /> : <Exercise6 />}
      </TemplateExercicio>
      <button type="button" onClick={() => setShowSolution((prev) => !prev)}>
        {showSolution ? 'Mostrar Exercício' : 'Mostrar Solução'}
      </button>
    </div>
  );
}
