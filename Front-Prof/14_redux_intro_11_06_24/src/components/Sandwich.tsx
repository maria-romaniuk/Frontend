import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Sandwich = () =>{
    const ingredients = useSelector((state: RootState) => state.sandwich.ingredients);
    const dispatch = useDispatch();

    function handleAddBread(){
        dispatch({ type: 'sanwich/addIngredient', payload: 'bread'})
    }
    function handleAddCheese(){
        dispatch({ type: 'sanwich/addIngredient', payload: 'cheese'})
    }
    function handleAddSalami(){
        dispatch({ type: 'sanwich/addIngredient', payload: 'salami'})
    }
    function handleAddTomato(){
        dispatch({ type: 'sanwich/addIngredient', payload: 'tomato'})
    }
    function handleDelete(){
        dispatch({type : 'sandwich/clear'})
    }


    return(
        <div>
            <h1>Chosse your sandwich:</h1>
            <p>Sandwich: {ingredients}</p>
            <button onClick={handleAddBread}>Add bread</button>
            <button onClick={handleAddCheese}>Add cheese</button>
            <button onClick={handleAddSalami}>Add salami</button>
            <button onClick={handleAddTomato}>Add tomato</button>
            <button onClick={handleDelete}>Delete all ingredients</button>
        </div>
    )
}

export default Sandwich;