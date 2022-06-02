import React from "react";
import Box from "./box/box";
import './row.css';

interface IRowProps {
    num: number,
    piecesPosition: Record<any, string>[]
}

const LETTERS: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

const Row: React.FunctionComponent<IRowProps> = ({ num, piecesPosition }) => {
    return(
        <div className="row">
            {LETTERS.map(letter => (
                <Box key={letter} letter={letter} num={num} piecesPosition={piecesPosition} />
            ))}
        </div>
    )
}

export default Row;