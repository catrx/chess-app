import React, { useMemo} from "react";
import './box.css';
import Piece from "./piece/piece";

interface IBoxProps {
    letter: string,
    num: number,
    piecesPosition: Record<any, string>[]
}


const Box: React.FunctionComponent<IBoxProps> = ({ letter, num, piecesPosition }) => {

    const piece = useMemo(() => {
        const position: string = letter + num
        const element = piecesPosition.find((p: any) => p.position === position)
        return element ? element.piece : null
    },[letter, num, piecesPosition])

    console.log(piece)


    return <div className="box"><Piece piece={piece} /></div>
}

export default Box;