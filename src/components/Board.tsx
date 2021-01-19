import React from 'react';
import { ISquare } from '../interface';
import Square from './Square';


interface BoardProps {
    squares: ISquare[];
    onClick: (i: number) => void;
}

const Board: React.FC<BoardProps> = (props) => {
    return (
        <div className='board'>
            {Array<number>(3).fill(0).map((_, i) =>
                <div className='column-row'>
                    {Array<number>(3).fill(0).map((_, j) =>
                        <Square key={i * 3 + j} value={props.squares[i * 3 + j]} onClick={() => props.onClick(i * 3 + j)} />
                    )}
                </div>
            )}
        </div>
    );
}

export default Board