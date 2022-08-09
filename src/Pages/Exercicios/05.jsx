import React from 'react';
import TemplateExercicio from './TemplateExercicio';
import Exercise5 from '../../exercise/exercise-5';
import Solution5 from '../../exercise/solved/exercise-5';

export default function ListaExercicio() {
  const [showSolution, setShowSolution] = React.useState(false);
  return (
    <div className="exercise__list">
      <TemplateExercicio key={5} position={5} showSolution={showSolution}>
        {showSolution ? <Solution5 /> : <Exercise5 />}
      </TemplateExercicio>
      <button type="button" onClick={() => setShowSolution((prev) => !prev)}>
        {showSolution ? 'Mostrar Exercício' : 'Mostrar Solução'}
      </button>
    </div>
  );
}
