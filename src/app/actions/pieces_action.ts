import {Action, Dispatch} from "redux";
import {GET_PIECES_POSITION, MOVE_PIECE, SELECT_PIECE} from "./action_types";

export const getPiecesPosition = () => (dispatch: Dispatch<Action>) => {
    return dispatch({
        type: GET_PIECES_POSITION
    })
}

export const movePiece = (piece: string, newPosition: string) => (dispatch: Dispatch<Action>) => {
    return dispatch(
        {
            type: MOVE_PIECE,
            newPosition,
            piece
        }
    )
}

export const selectPiece = (selectedPiece: string | null) => (dispatch: Dispatch<Action>) => {
    return dispatch(
        {
            type: SELECT_PIECE,
            selectedPiece
        }
    )
}