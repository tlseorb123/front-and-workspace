import { useState, useEffect } from "react";
import Btn from "./Btn";
// 상태관리 useState
// 시점 찾기 useEffect

// 컴포넌트는 앞에 대문자를 쓴다 Btn, App

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const plus = () => {
    setCounter(counter + 1);
  };

  const minus = () => {
    setCounter(counter - 1);
  };

  console.log("always~~");

  // 두번째 대가로에 적으면 테이터 처리
  useEffect(() => {
    console.log("useEffect!");
  }, []);
  // useEffect 는 여러개 써도 된다
  // 바뀌는 시점을 바꿀때 두번째 대가로에 쓴다
  // 밑에 있는 counter을 쓴다 변화된 시점

  useEffect(() => {
    console.log("counter change~~");
  }, [counter]);

  // 리액트는 상위 컴포넌트에서 하위 컴포넌트로 단방향으로 밖에 안 움직인다.
  // 하위 컴포넌트가 상위 컴포넌트를 쓸려면 밑에 있는 Btn처럼 쓰면 된다.
  return (
    <>
      <h1>Total Clicks : {counter}</h1>
      <Btn click={plus} text="+1" />
      <Btn click={minus} text="-1" />
    </>
  );
};
// <></> 이것을 쓰게 되면 앞에 쓰는 태그들을 안써도 된다
// console.log로 확인해보면 <></> 태그가 안보인다

export default Counter;
