import React from "react";
import Board from "./components/board/board";
import {RootStateOrAny, useSelector} from "react-redux";


const App = () => {
    const {turn} = useSelector((state: RootStateOrAny) => state.pieces)

    return (
        <>
            <div>{turn === 'W' ? 'White turn' : 'Black turn'}</div>
            <Board/>
        </>
    )
}

export default App;