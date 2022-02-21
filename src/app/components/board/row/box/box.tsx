import React, {useMemo} from "react";
import './box.css';
import Piece from "./piece/piece";

interface IBoxProps {
    letter: string,
    num: number
}

const INITAL_POSITIONS: Record<any, string>[] = [
    {A1: 'WR1'},
    {B1: 'WK1'},
    {C1: 'WB1'},
    {D1: 'WQ'},
    {E1: 'WK'},
    {F1: 'WB2'},
    {G1: 'WK2'},
    {H1: 'WR2'},
    {A2: 'WP1'},
    {B2: 'WP2'},
    {C2: 'WP3'},
    {D2: 'WP4'},
    {E2: 'WP5'},
    {F2: 'WP6'},
    {G2: 'WP6'},
    {H2: 'WP8'},
    {A8: 'BR1'},
    {B8: 'BK1'},
    {C8: 'BB1'},
    {D8: 'BQ'},
    {E8: 'BK'},
    {F8: 'BB2'},
    {G8: 'BK2'},
    {H8: 'BR2'},
    {A7: 'BP1'},
    {B7: 'BP2'},
    {C7: 'BP3'},
    {D7: 'BP4'},
    {E7: 'BP5'},
    {F7: 'BP6'},
    {G7: 'BP6'},
    {H7: 'BP8'},
]

const Box: React.FunctionComponent<IBoxProps> = ({ letter, num }) => {
    const piece = useMemo(() => {
        const position: string = letter + num
        const element = INITAL_POSITIONS.find(p => p[position])
        return element ? element[position] : null
    },[letter, num])


    return <div className="box"><Piece piece={piece} /></div>
}

export default Box;