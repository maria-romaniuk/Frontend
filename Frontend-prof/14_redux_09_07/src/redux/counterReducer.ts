import { ActionCounter } from './counterAction';

export interface InitialState {
    value: number;
}

const initialState: InitialState = {
    value: 0
}

export default function counterReducer(state = initialState, action: ActionCounter) {
    switch (action.type) {
        case 'counter/minus':
            return { ...state, value: state.value - 1 }
        case 'counter/plus':
            return { ...state, value: state.value + 1 }
        case 'counter/minus10':
            return { ...state, value: state.value - 10 }
        case 'counter/plus10':
            return { ...state, value: state.value + 10 }
            case 'counter/customMinus':
            return { ...state, value: state.value - action.payload }
        case 'counter/customPlus':
            return { ...state, value: state.value + action.payload }
        default:
            return state
    }
}