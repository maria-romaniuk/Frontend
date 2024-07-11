import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface InitialStateS {
    value: string;
}

const initialState: InitialStateS = {
    value: "",
}

const sandwichSlice = createSlice({
    name: 'sandwich',
    initialState,
    reducers: {
        addIngredient(state, action: PayloadAction<string>){ state.value += " " + action.payload},
        clearAll(state){state.value = ""}
    }
})

export const { addIngredient, clearAll } = sandwichSlice.actions

export default sandwichSlice.reducer