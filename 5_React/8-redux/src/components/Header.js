import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const counter = useSelector((state) => state.counter);
  return <h1>Total clicks : {counter}</h1>;
};
export default Header; 
