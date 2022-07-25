import React, {useCallback, useMemo} from "react";
import './box.css';
import Piece from "./piece/piece";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {movePiece, selectPiece} from "../../../../actions/pieces_action";

interface IBoxProps {
    letter: string,
    num: number,
    piecesPosition: Record<any, string>[]
}


const Box: React.FunctionComponent<IBoxProps> = ({ letter, num, piecesPosition }) => {
    const dispatch = useDispatch();
    const { selectedPiece, turn } = useSelector((state: RootStateOrAny) => state.pieces)

    const piece = useMemo(() => {
        const position: string = letter + num
        const element = piecesPosition.find((p: any) => p.position === position)
        return element ? element.piece : null
    },[letter, num, piecesPosition])

    const handleClick = useCallback(() => {
        if(piece && piece[0] === turn) {
            selectPiece(piece)(dispatch)
        }
        if(selectedPiece) {
            movePiece(selectedPiece, letter + num)(dispatch)
            selectPiece(null)(dispatch)
        }
    }, [piece, letter, num, selectedPiece, dispatch, turn])



    return <div className={`box ${piece && selectedPiece === piece? 'active': ''}`} onClick={handleClick}><Piece piece={piece} /></div>
}

export default Box;