import Btn from "./Btn";
import { useEffect, useState } from "react";

const Converter = () => {
  const [number, setNumber] = useState("");
  // useState 에 값을 넣지 않고 ""을 넣으면 Minutes가 나온다. 밑에 설정

  const [bool, setBool] = useState(false);
  const [text, setText] = useState("Minutes => Hours");

  const change = (e) => {
    setNumber(e.target.value);
  };
  // reset 버튼을 누루면 초기화
  const reset = () => {
    setNumber("");
  };

  const invert = () => {
    setBool(!bool);
    reset();
  };

  useEffect(() => {
    if (bool) {
      setText("Hours => Minutes");
    } else {
      setText("Minutes => Hours");
    }
  }, [bool]);

  return (
    <>
      <h1>Time Converter</h1>
      <p>
        Minutes :
        <input
          type="number"
          placeholder="Minutes"
          onChange={change}
          value={bool ? number * 60 : number}
          disabled={bool}
        />
      </p>
      <p>
        Hours :
        <input
          type="number"
          placeholder="Hours"
          onChange={change}
          disabled={!bool}
          value={bool ? number : Math.floor(number / 60)}
        />
      </p>
      <Btn text="Reset" click={reset} />
      <Btn text={text} click={invert} />
    </>
  );
};
// Math.floor 소수점을 없애준다.
export default Converter;
