import { Button } from './components/ui/button';
import { useGetAllBikesQuery } from './redux/features/bikes/bikes.api';
import { decrement, increment } from './redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { RootState } from './redux/store';

const App = () => {
  const { data } = useGetAllBikesQuery(undefined);
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();
  console.log(data);
  return (
    <div>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <h1>{count}</h1>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
    </div>
  );
};

export default App;
