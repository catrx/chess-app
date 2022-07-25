import React, {useEffect} from "react";
import './board.css'
import Row from "./row/row";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {getPiecesPosition} from "../../actions/pieces_action";

const NUMBERS: number[] = [8, 7, 6, 5, 4, 3, 2, 1]



const Board = () => {
    const dispatch = useDispatch();
    const { piecesPosition } = useSelector((state: RootStateOrAny) => state.pieces)

    useEffect(() => {
        getPiecesPosition()(dispatch)
    }, [])

    return(
        <div className="board">
            {NUMBERS.map(n => (
                    <Row key={n} num={n} piecesPosition={piecesPosition} />
                ))
            }
        </div>
    )
}

export default Board;