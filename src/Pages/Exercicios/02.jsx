import React from 'react';
import TemplateExercicio from './TemplateExercicio';
import Exercise2 from '../../exercise/exercise-2';
import Solution2 from '../../solved/exercise-2';


export default function ListaExercicio() {
  const [showSolution, setShowSolution] = React.useState(false);
  return (
    <div className="exercise__list">
      <TemplateExercicio key={2} position={2} showSolution={showSolution}>
        {showSolution ? <Solution2 /> : <Exercise2 />}
      </TemplateExercicio>
      <button type="button" onClick={() => setShowSolution((prev) => !prev)}>
        {showSolution ? 'Mostrar Exercício' : 'Mostrar Solução'}
      </button>
    </div>
  );
}
