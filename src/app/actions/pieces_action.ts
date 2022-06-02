import {Action, Dispatch} from "redux";
import {GET_PIECES_POSITION, MOVE_PIECE} from "./action_types";

export const getPiecesPosition = () => (dispatch: Dispatch<Action>) => {
    return dispatch({
        type: GET_PIECES_POSITION
    })
}

export const movePiece = (oldPosition: Record<any, string>, newPosition: Record<any, string>) => (dispatch: Dispatch<Action>) => {
    return dispatch(
        {
            type: MOVE_PIECE,
            oldPosition,
            newPosition
        }
    )
}