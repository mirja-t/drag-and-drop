
export interface Solution {
    image: string,
    text?: string,
    attribution?: string
}

export interface Result extends Solution {
    title: string
}

export interface Item {
    title: string,
    solution?: Solution
}

export type RefObj = {
    current: HTMLDivElement | null
}

export interface RefObjArray {
    current: HTMLDivElement[]
}

export interface DragItemTypes {
    item: Item,
    cardIndex: number,
    activeIndexes: number[],
    dropConstraintsRef: RefObjArray,
    dropPositions: number[],
    setDropPosition: Function
};

export interface DragAndDropType {
    items: Game,
    goToNext: Function
};

export interface Game {
    title: string,
    question: string,
    image: string,
    items: Item[]
};

export type GameType = Game[];

export interface ValidationType {
    items: Item[],
    activeIndexes: number[],
    resetQuestion: Function,
    goToNext: Function
    showButton: boolean
}