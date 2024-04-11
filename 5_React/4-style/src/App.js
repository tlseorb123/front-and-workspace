import "./asset/style.scss";
import style from "./asset/style.module.css";
import styled from "styled-components";

// 컴포넌트는 대문자로 시작
const Div = styled.div`
  background-color: darkcyan;
  color: white;
  font-size: 6rem;
`;

const App = () => {
  return (
    <>
      <div
        /* style={{backgroundColor:"black" , color: "white"}}> */
        className="class"
        /*  id="id" */
      >
        <h1 className={style.deco}>Hello, React Styling!</h1>
      </div>
      <Div>Styled components</Div>
    </>
  );
};

export default App;
