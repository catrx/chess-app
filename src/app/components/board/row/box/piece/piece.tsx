import React from "react"
import {MAP_PIECE} from "./map-piece";
import './piece.css';

interface IPieceProps {
    piece: string | null
}
const Piece: React.FunctionComponent<IPieceProps> = ({ piece }) => {

    if(!piece) return null;


    return (
        <img className="piece" src={MAP_PIECE[piece]} alt="React Logo" />
    )
}

export default Piece