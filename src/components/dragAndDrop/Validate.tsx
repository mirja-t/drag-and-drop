import { ValidationType, Result } from './types';
import { useState } from 'react';
import { Modal } from '../modal/Modal';
import './validate.scss';

function Solutions({solutions, next}: {solutions: Result[], next: () => void}) {
    return (<>
        <h3>That is correct!</h3>
        <div className="solutions">
            { solutions.map((solution, idx) => (
                <div key={idx} className="solution">
                    <h5>{ solution.title }</h5>
                    <figure role="group">
                        <img src={solution.image} alt="" />
                        <figcaption>
                            { solution.text && <p>{solution.text}</p> }
                            { solution.attribution && <p><small>{solution.attribution}</small></p> }
                        </figcaption>
                    </figure>
                </div>
            ))}
        </div>
        <button onClick={next}>Next</button>
    </>)
}

export function Validate({showButton, activeIndexes, items, resetQuestion, goToNext}: ValidationType) {

    const [solutions, setSolutions] = useState<Result[]>([]);
    const [checked, setChecked] = useState(false);
    const [score, setScore] = useState<number[]>([0, 0]);

    function validate() {
        const correctAnswers: Result[] = activeIndexes.map(activeIndex => {
            return items[activeIndex].solution ? { ...items[activeIndex].solution, title: items[activeIndex].title } : null
        }).filter(item => !!item) as Result[];

        const currentScore = [score[0] + correctAnswers.length, score[1] + activeIndexes.length];
        setScore(currentScore);

        setSolutions(correctAnswers);
        setChecked(true);
    }
    function reset() {
        setSolutions([]);
        setChecked(false);
        setTimeout(() => {resetQuestion()}, 500);
    }
    function next() {
        goToNext(score);
    }

    return (<>
        {showButton && (<div className="validate">
            <button onClick={validate}>Check answers</button>
        </div>)}
        
        <Modal show={solutions.length !== activeIndexes.length && checked}>
            <div className="result">
                <h3>Your answers are not correct.</h3>
                <button onClick={reset}>Try again</button> 
            </div>
        </Modal>

        <Modal show={solutions.length === activeIndexes.length && checked}>
            <div className="result">
                <Solutions solutions={solutions} next={next} />
            </div>
        </Modal>
    </>)
}