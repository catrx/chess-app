import React from "react";
import './board.css'
import Row from "./row/row";

const NUMBERS: number[] = [8, 7, 6, 5, 4, 3, 2, 1]

const Board = () => {
    return(
        <div className="board">
            {NUMBERS.map(n => (
                    <Row num={n} />
                ))
            }
        </div>
    )
}

export default Board;