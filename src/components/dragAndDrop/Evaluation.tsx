import './validate.scss';
import { Modal } from '../modal/Modal';

export function Evaluation({show, score, reset}: {show: boolean, score: number[], reset: Function}) {

    const percentage = Math.round(score[0] / score[1] * 100);
    function resetQuiz() {
        reset();
    }

    return (
        <Modal show={show} id="evaluation">
            <div className="result">
                { percentage === 100 && (<>
                    <h2>Genius!</h2>
                    <p>You have answered all of the questions correctly on first try.</p>
                </>)}           
                { percentage >= 50 && percentage < 100 && (<>
                    <h2>Well done!</h2>
                    <p>You have answered { percentage }% of the questions correctly.</p>
                </>)}
                { percentage < 50 && (<>
                    <h2>You'll be better next time...</h2>
                    <p>You have answered { percentage }% of the questions correctly.</p>
                </>)}
                <button onClick={resetQuiz}>Do again</button>
            </div>
        </Modal>
    )
}