import {GET_PIECES_POSITION, MOVE_PIECE} from "../actions/action_types";

interface IAction {
    type: string;
    piecesPosition: Record<any, string>[],
    piece: string,
    newPosition: string
}

const initialState = {
    piecesPosition: [
        {
            piece: 'WR1',
            position: 'A1',
        },
        {
            piece: 'WK1',
            position: 'B1',
        },
        {
            piece: 'WB1',
            position: 'C1',
        },
        {
            piece: 'WQ',
            position: 'D1',
        },
        {
            piece: 'WK',
            position: 'E1',
        },
        {
            piece: 'WB2',
            position: 'F1',
        },
        {
            piece: 'WK2',
            position: 'G1',
        },
        {
            piece: 'WR2',
            position: 'H1'
        },
        {
            piece: 'WP1',
            position: 'A2'
        },
        {
            piece: 'WP2',
            position: 'B2',
        },
        {
            piece: 'WP3',
            position: 'C2',
        },
        {
            piece: 'WP4',
            position: 'D2',
        },
        {
            piece: 'WP5',
            position: 'E2',
        },
        {
            piece: 'WP6',
            position: 'F2',
        },
        {
            piece: 'WP7',
            position: 'G2',
        },
        {
            piece: 'WP8',
            position: 'H2',
        },
        {
            piece: 'BR1',
            position: 'A8',
        },
        {
            piece: 'BK1',
            position: 'B8',
        },
        {
            piece: 'BB1',
            position: 'C8',
        },
        {
            piece: 'BQ',
            position: 'D8',
        },
        {
            piece: 'BK',
            position: 'E8',
        },
        {
            piece: 'BB2',
            position: 'F8',
        },
        {
            piece: 'BK2',
            position: 'G8',
        },
        {
            piece: 'BR2',
            position: 'H8',
        },
        {
            piece: 'BP1',
            position: 'A7',
        },
        {
            piece: 'BP2',
            position: 'B7',
        },
        {
            piece: 'BP3',
            position: 'C7',
        },
        {
            piece: 'BP4',
            position: 'D7',
        },
        {
            piece: 'BP5',
            position: 'E7',
        },
        {
            piece: 'BP6',
            position: 'F7',
        },
        {
            piece: 'BP7',
            position: 'G7',
        },
        {
            piece: 'BP8',
            position: 'H7',
        },
    ],
};

export const pieces = (state = initialState, action: IAction) => {
    switch (action.type) {
        case GET_PIECES_POSITION:
            return {
                ...state,
                piecesPosition: state.piecesPosition
            };
        case MOVE_PIECE:
            let currentPositions = state.piecesPosition;
            const index = currentPositions.findIndex((p: any) => p.piece == action.piece)
            currentPositions.splice(index, 1)
            console.log(index)
            return {
                ...state,
                piecesPosition: [
                    ...currentPositions,
                    {
                        piece: action.piece,
                        position: action.newPosition
                    }
                ]
            }
        default:
            return state;
    }
};