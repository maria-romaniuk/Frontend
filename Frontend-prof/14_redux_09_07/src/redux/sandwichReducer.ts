import { ActionSandwich } from "./sandwichAction";
export interface InitialState {
    value: string;
}

const initialState: InitialState = {
    value: "",
}

export default function counterReducer(state = initialState, action: ActionSandwich) {
    switch (action.type) {
        case 'addIngredient':
            return { value: state.value + " " + action.payload }
        case 'clearOrder':
            return {
                value: "",
               
            }
            default:
            return state;
    }
}