import { ITask } from '../components/TaskList';
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface InitialStateTask{
    tasks: ITask[],
    status: 'loading' | 'succeeded' | 'failed',
}
const initialState: InitialStateTask = {
    tasks: [],
    status: 'loading'
}

const fetchTask = createAsyncThunk<>('fetchTask', async () =>{
     const response = fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = (await response).json();
      return data;
})

const taskListSlice = createSlice({
    name: 'taskList',
    initialState,
    reducers: {
        addTask (state, action: PayloadAction<ITask, 'UpdatedAt'>){

        },
        deleteTask(state, action: PayloadAction<number>){
            state.tasks.filter((_, index) => index !== action.payload);
        },
        editTask(state, action: PayloadAction<number, ITask>){

        },


    },
    extraReducers(builder) {
        builder
        .addCase(fetchTask.pending, (state) => {
           
            state.status = 'loading'
        })
        .addCase(fetchTask.fulfilled, (state, action) => {
            
            state.status = 'succeeded'
            state.quote = action.payload
        })
        .addCase(fetchTask.rejected, (state) => {
            state.status = 'failed'
        })
    }
})

export const { addTask,  deleteTask , editTask} = taskListSlice.actions

export default taskListSlice.reducer