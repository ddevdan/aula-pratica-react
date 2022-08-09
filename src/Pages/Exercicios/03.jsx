import React from 'react';
import TemplateExercicio from './TemplateExercicio';
import Exercise3 from '../../exercise/exercise-3';
import Solution3 from '../../solved/exercise-3';

export default function ListaExercicio() {
  const [showSolution, setShowSolution] = React.useState(false);
  return (
    <div className="exercise__list">
      <TemplateExercicio key={3} position={3} showSolution={showSolution}>
        {showSolution ? <Solution3 /> : <Exercise3 />}
      </TemplateExercicio>
      <button type="button" onClick={() => setShowSolution((prev) => !prev)}>
        {showSolution ? 'Mostrar Exercício' : 'Mostrar Solução'}
      </button>
    </div>
  );
}
