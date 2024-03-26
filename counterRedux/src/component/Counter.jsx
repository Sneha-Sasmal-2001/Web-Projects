import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset } from '../features/counterSlice'
function Counter() {
    const dispatch = useDispatch()
    const count = useSelector(state=>state.count)
  return (
    <div>
      <h1>Counter</h1>
      <input
        type='text'
        value={count}
        readOnly/>
      <div>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
      </div>
    </div>
  )
}

export default Counter
