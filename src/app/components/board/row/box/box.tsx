import React from "react";
import './box.css';

interface IBoxProps {
    letter: string,
    num: number
}

const Box: React.FunctionComponent<IBoxProps> = ({ letter, num }) => {
    return <div className="box" />
}

export default Box;