import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
  return (
    <div>
        <div>Counter: {count} </div>
        <button onClick={() => dispatch({ type: 'counter/minus10' })}>Minus10</button>
        <button onClick={() => dispatch({ type: 'counter/minus' })}>Minus</button>
        <button onClick={() => dispatch({ type: 'counter/plus' })}>Plus</button>
        <button onClick={() => dispatch({ type: 'counter/plus10' })}>Plus10</button>
    </div>
  )
}

export default Counter