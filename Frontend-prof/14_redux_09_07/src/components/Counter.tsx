import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../reduxRTK/storeRTK"
import { useState } from "react";
import { change } from "../reduxRTK/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<number | string>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
  };

  return (
    <div className="container d-flex flex-column align-items-center p-5">
      <div className="p-5 mb-4" style={{ backgroundColor: "#fff", borderRadius: "4px", fontSize: '22px' }}>Counter: {count} </div>
      <div className="mb-3">
        {/* <button className="btn btn-primary" onClick={() => dispatch({ type: 'counter/minus10' })}>Minus10</button> */}
        <button className="btn btn-primary" onClick={() => dispatch(change(-10))}>Minus10</button>
        <button className="btn btn-primary mx-3" onClick={() => dispatch(change(-1))}>Minus</button>
        <button className="btn btn-primary mx-3" onClick={() => dispatch(change(+1))}>Plus</button>
        <button className="btn btn-primary" onClick={() => dispatch(change(+10))}>Plus10</button>
      </div>

      <div>
        <input type="number" value={inputValue} onChange={handleInputChange} />
        <button className="btn btn-info mx-2" onClick={() => { if (inputValue) { dispatch(change(+inputValue)) } setInputValue('') }}>+</button>
        <button className="btn btn-info" onClick={() => { if (inputValue) { dispatch(change(-inputValue)) } setInputValue('') }}>-</button>
      </div>
    </div>
  )
}

export default Counter