import Header from "./components/Header";
import { increase, decrease } from "./store/counter";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <button onClick={() => dispatch(increase())}>+1</button>
      <button onClick={() => dispatch(decrease())}>-1</button>
    </>
  );
};

export default App;
