import './App.scss';
import './components/dragAndDrop/sample.scss';
import { useState } from 'react';
import { DragAndDrop } from './components/dragAndDrop/DragAndDrop';
import { Evaluation } from './components/dragAndDrop/Evaluation';
import { questions } from './components/data';
import { motion } from 'framer-motion';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number[]>([0, 0]);
  const [showEvaluation, setEvaluation] = useState<boolean>(false);

  function goToNext(currentScore: number[]) {
    setScore(prev => [prev[0] + currentScore[0], prev[1] + currentScore[1]]);
    if(questions.length-1 === currentQuestionIndex) setEvaluation(true);
    setCurrentQuestionIndex(prev => Math.min(questions.length-1, prev + 1));
  }

  return (
    <div className="App">
      { questions.map((question, idx) => idx === currentQuestionIndex && (
        <motion.div key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1,
            ease: "linear",
          }}>
          <DragAndDrop items={ question } goToNext={goToNext} />
        </motion.div>
      ))}
      { <Evaluation show={showEvaluation} score={score} />}
    </div>
  );
}

export default App;
