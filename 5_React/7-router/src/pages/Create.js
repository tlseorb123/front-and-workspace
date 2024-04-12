import styled from "styled-components";
import { addAnimal } from "../api/animal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 70px);

  * {
    margin-right: 5px;
    padding: 5px;
  }

  button {
    background-color: black;
    color: white;
    border-radius: 4px;
    border: 1px solid black;
    cursor: pointer;
  }
`;

const Create = () => {
  const navigate = useNavigate();
  const [animal, setAnimal] = useState({});
  const add = async () => {
    await addAnimal(animal);
    navigate("/");
  };

  return (
    <Div>
      <input
        type="text"
        placeholder="동물 이름 입력"
        value={animal.name}
        onChange={(e) =>
          setAnimal((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <input
        type="text"
        placeholder="동물 나이 입력"
        value={animal.age}
        onChange={(e) =>
          setAnimal((prev) => ({ ...prev, age: e.target.value }))
        }
      />
      <button onClick={add}>동물 추가</button>
    </Div>
  );
};
// setAnimal의 숨겨져 있는 기능
// prev 숨겨져 있다,  ...을 쓰면 키값이 들어간다
// prev라는 기본 정보가 객체로 들어가 있다.
export default Create;
