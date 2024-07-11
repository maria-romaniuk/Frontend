import { configureStore } from "@reduxjs/toolkit";

import sandwichSlice from "./sandwichSlice";

// configureStore()
//мтод combineReduce уже вгит в этот метод. объединяет собой все редюсерах что были

const storeRTK = configureStore({
    reducer: {
        sandwich: sandwichSlice
    }
})

export default storeRTK;


export type RootState = ReturnType<typeof storeRTK.getState>;
export type AppDispatch = typeof storeRTK.dispatch