import React from 'react'
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';

export const Sandwich = () => {
    const sandwich = useSelector((state: RootState) => state.sandwich.value);
    const dispatch = useDispatch();

  return (
    <div className='container d-flex flex-column align-items-center p-5'>
        <h2>Choose your ingredients:</h2>
        <div className='btns'>
            <button className='btn btn-info' onClick={() => dispatch({type: 'addIngredient', payload: 'bread'})}>Bread</button>
            <button className='btn btn-info mx-3' onClick={() => dispatch({type: 'addIngredient', payload: 'salad'})}>Salad</button>
            <button className='btn btn-info' onClick={() => dispatch({type: 'addIngredient', payload: 'ham'})}>Ham</button>
            <button className='btn btn-info mx-3' onClick={() => dispatch({type: 'addIngredient', payload: 'tomato'})}>Tomato</button>
            <button className='btn btn-info' onClick={() => dispatch({type: 'addIngredient', payload: 'cheese'})}>Cheese</button>
        </div>
        <div className='m-3' style={{backgroundColor: "rgb(255, 255, 255)", borderRadius: "4px", fontSize:" 22px", padding: '15px'}}>Your order: <strong> {sandwich}</strong></div>
        <div><button  className='btn btn-info' onClick={() => dispatch({type: 'clearOrder'})}>Clear all</button></div>
    </div>
  )
}
