
import { RootState } from '../reduxRTK/storeRTK';
import { useDispatch, useSelector } from 'react-redux';
import { addIngredient, clearAll, deleteLast, fetchQuote } from '../reduxRTK/sandwichSlice';
import { useEffect } from 'react';

export const Sandwich = () => {
  const {value, quote, status} = useSelector((state: RootState) => state.sandwich);
  const dispatch = useDispatch();


  useEffect(() =>{
     dispatch(fetchQuote())
  }, [])
  return (
    <div className='container d-flex flex-column align-items-center p-5'>
      { status === 'loading ' && (
        <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
      )}
      {status === 'succeeded' && (
        <div>{quote?.sentence}</div>
      )}
      {status === 'failed' && (
        <div>fetch failed</div>
      )}

      <h2>Choose your ingredients:</h2>
      <div className='btns'>
        {/* <button className='btn btn-info' onClick={() => dispatch({type: 'addIngredient', payload: 'bread'})}>Bread</button> */}
        <button className='btn btn-info' onClick={() => dispatch(addIngredient('bread'))}>Bread</button>
        <button className='btn btn-info mx-3' onClick={() => dispatch(addIngredient('salad'))}>Salad</button>
        <button className='btn btn-info' onClick={() => dispatch(addIngredient('ham'))}>Ham</button>
        <button className='btn btn-info mx-3' onClick={() => dispatch(addIngredient('tomato'))}>Tomato</button>
        <button className='btn btn-info' onClick={() => dispatch(addIngredient('cheese'))}>Cheese</button>
      </div>
      <div className='m-3' style={{ backgroundColor: "rgb(255, 255, 255)", borderRadius: "4px", fontSize: " 22px", padding: '15px' }}>Your order: <strong> {value}</strong></div>
      <div>
        <button className='btn btn-info mr-3' onClick={() => dispatch(deleteLast())}>Delete last</button>
        <button className='btn btn-info ml-3' onClick={() => dispatch(clearAll())}>Clear all</button>
      </div>
    </div>
  )
}
