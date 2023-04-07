import { useRef, useState, useMemo, useEffect } from 'react';
import './draganddrop.scss';
import { LayoutGroup, motion } from "framer-motion";
import { DragItem, Card } from './DragItem';
import { Validate } from './Validate';
import { DragAndDropType, RefObj } from './types';


const cardsPerRow = 5;

export function DragAndDrop({ items: {title, question, image, items}, goToNext }: DragAndDropType) {
    
    const dropConstraintsRef = useRef<HTMLDivElement[]>([]);
    const containerRef = useRef(null);
    const dragWrapperRef: RefObj | null = useRef(null);
    const [cardsDropped, setCardsDropped] = useState(0);
    const targetCards = useMemo(() => items.filter(item => item.solution), [items]);
    const [dropPositions, setDropPositions] = useState(new Array(targetCards.length).fill(null));
    const [indexes, setIndexes] = useState([0, cardsPerRow - 1]);
    const [dragWrapperHeight, setDragWrapperHeight] = useState('auto');

    useEffect(() => {
        setTimeout(() => {
            if(!dragWrapperRef || !dragWrapperRef.current) return;
            setDragWrapperHeight(dragWrapperRef.current.getBoundingClientRect().height + 'px');
        },500);
    },[]);

    function setDropPosition(ref: HTMLDivElement | null, activeIndex: number) {
        setDropPositions(prev => [...prev].map((item, idx) => idx===activeIndex ? ref : item));
        setCardsDropped(prev => prev+1);
    }

    function slide(dir: number) {
        setIndexes(prev => [prev[0] + dir, prev[1] + dir]);
    }

    function resetQuestion() {
        setCardsDropped(0);
        setDropPositions(new Array(targetCards.length).fill(null));
        setIndexes([0, cardsPerRow - 1]);
    }

    const control = (dir: number, disabled: boolean) => (<div className={`game-control control-${ dir > 0 ? 'next' : 'prev' }` } >
        <button className="" onClick={() => slide(dir)} disabled={disabled}>
            <span aria-hidden="true"/>
        </button>
    </div>);

    return (
    <div 
        ref={containerRef}
        className={"drag-and-drop"}
        style={{
            backgroundImage: `url(${image})`
        }}>
        <h1>{ title }</h1>
        <h5>{ question }</h5>

        <div className="row drag-and-drop-container">
            <div className="col drop-wrapper">
                <LayoutGroup id="dropcontainer">
                { targetCards.map((_, idx) => (
                    <motion.div layout key={idx} className="drop-container" ref={el => { if(el) return dropConstraintsRef.current[idx] = el }} >
                        { dropPositions[idx] !== null && (
                            <Card title={items[dropPositions[idx]].title} />
                        )}
                    </motion.div>
                ))}
                </LayoutGroup>
                 <Validate showButton={cardsDropped === targetCards.length} activeIndexes={dropPositions} items={items} resetQuestion={resetQuestion} goToNext={goToNext} />
            </div>
            
            <div ref={dragWrapperRef} 
                className="col drag-wrapper"
                style={{
                    height: dragWrapperHeight
                }}>
                { control(-1, indexes[0] === 0) }

                <LayoutGroup id="dragcontainer">
                { items.map((item, idx) => (
                    <DragItem 
                        item={item} 
                        key={idx} 
                        cardIndex={idx} 
                        activeIndexes={indexes}
                        dropConstraintsRef={dropConstraintsRef} 
                        dropPositions={dropPositions} 
                        setDropPosition={setDropPosition} />
                ))}
                </LayoutGroup>

                {  control(+1, indexes[1] === items.length - 1) }
            </div>
        </div>
    </div>)
}