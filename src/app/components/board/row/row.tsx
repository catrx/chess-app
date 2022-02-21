import React from "react";
import Box from "./box/box";
import './row.css';

interface IRowProps {
    num: number,
}

const LETTERS: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

const Row: React.FunctionComponent<IRowProps> = ({ num }) => {
    return(
        <div className="row">
            {LETTERS.map(letter => (
                <Box letter={letter} num={num} />
            ))}
        </div>
    )
}

export default Row;