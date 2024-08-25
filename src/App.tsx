import { Button } from './components/ui/button';
import { decrement, increment } from './redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { RootState } from './redux/store';

const App = () => {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <h1>{count}</h1>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
    </div>
  );
};

export default App;
