import { increase, decrease } from "./store/counter";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";

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
