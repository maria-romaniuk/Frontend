// react js toolkit заменяет собой оба файла action и reducer
// npm i @reduxjs/toolkit

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface InitialStateRTK {
    value: number;
}

const initialState: InitialStateRTK = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        change(state, action: PayloadAction<number>){
            state.value += action.payload;
        }
    }
});

export const { change } = counterSlice.actions

export default counterSlice.reducer