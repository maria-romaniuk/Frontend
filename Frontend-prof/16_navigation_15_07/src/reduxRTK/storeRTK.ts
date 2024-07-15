import { configureStore } from "@reduxjs/toolkit";
import taskListSlice from "./taskListSlice";

const storeRTK = configureStore({
    reducer:{
        taskList: taskListSlice
    }
})

export default storeRTK;

export type RootState = ReturnType<typeof storeRTK.getState>;
export type AppDispatch = typeof storeRTK.dispatch