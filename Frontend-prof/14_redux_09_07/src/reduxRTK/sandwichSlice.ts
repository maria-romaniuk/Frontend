import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./storeRTK";


export interface InitialStateS {
    value: string;
    quote: IQuote | null;
    status: 'loading'| 'succeeded' | 'failed' | null;
}

interface IQuote{
    sentence: string,
    character:{
        name: string,
        slug: string,
        house:{
            name: string,
            slug: string
        }
    }
}
const initialState: InitialStateS = {
    value: "",
    quote: null,
    status: null,
}

export const fetchQuote = createAsyncThunk<IQuote, void, { state: RootState }>('sandwich/fetchQuote', async () => {
    const response = fetch('https://api.gameofthronesquotes.xyz/v1/random')
        const data = (await response).json();
    return data;
})

const sandwichSlice = createSlice({
    name: 'sandwich',
    initialState,
    reducers: {
        addIngredient(state, action: PayloadAction<string>) { state.value += " " + action.payload },
        clearAll(state) { state.value = "" },
        deleteLast(state) {
            const ingredients = state.value.trim().split(" ");
            ingredients.pop();
            state.value = ingredients.join(" ");
        } //объединяем в массив, отрезаем последний и объединяем массив обратно в строку
    },
    extraReducers(builder) {
        builder
            .addCase(fetchQuote.pending, (state) => {
                //Loading
                state.status = 'loading'
            })
            .addCase(fetchQuote.fulfilled, (state, action) => {
                //когда успешная загрузка произошла
                state.status = 'succeeded'
                state.quote = action.payload
            })
            .addCase(fetchQuote.rejected, (state) => {
                state.status = 'failed'
            })
    }
})

export const { addIngredient, clearAll, deleteLast } = sandwichSlice.actions

export default sandwichSlice.reducer