import React from 'react';
import TemplateExercicio from './TemplateExercicio';
import Exercise7 from '../../exercise/exercise-7';
import Solution7 from '../../solved/exercise-7';

export default function ListaExercicio() {
  const [showSolution, setShowSolution] = React.useState(false);
  return (
    <div className="exercise__list">
      <TemplateExercicio key={7} position={7} showSolution={showSolution}>
        {showSolution ? <Solution7 /> : <Exercise7 />}
      </TemplateExercicio>
      <button type="button" onClick={() => setShowSolution((prev) => !prev)}>
        {showSolution ? 'Mostrar Exercício' : 'Mostrar Solução'}
      </button>
    </div>
  );
}
