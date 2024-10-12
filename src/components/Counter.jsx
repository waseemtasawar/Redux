import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "./store/slices/counter/counter";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toogle());
  };
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increasedBy5 = () => {
    dispatch(counterActions.incrementByAmount(5));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  return (
    // <main className={classes.counter}>
    //   <h1>Redux Counter</h1>
    //   <div className={classes.value}>Count: {count}</div>
    //   <div>
    //     <button onClick={() => dispatch(increment())}>Increment</button>
    //     <button onClick={() => dispatch(decrement())}>Decrement</button>
    //   </div>
    //   <button onClick={toggleCounterHandler}>Toggle Counter</button>
    // </main>

    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {!show && <div className={classes.value}>{count}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increasedBy5}>IncrementBy5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
