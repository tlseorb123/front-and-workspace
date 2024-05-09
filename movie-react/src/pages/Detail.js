import Header from "../components/Header";
import styled from "styled-components";
import { UpMovie } from "../api/movie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StyledDiv = styled.div`
  width: 900px;
  margin: auto;
  text-align: center;
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  input {
    width: 100%;
    margin: 5px;
    padding: 5px;
    box-sizing: border-box;
  }
  button {
    width: 100%;
    margin: 5px;
    cursor: pointer;
    background: black;
    color: white;
    font-weight: bold;
    padding: 10px;
  }
`;

const Detail = () => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [actor, setActor] = useState("");

  const navigate = useNavigate();

  const onput = async () => {
    await UpMovie({ title, genre, actor });
    navigate("/");
  };

  return (
    <StyledDiv>
      <Header />
      <h1>영화 정보</h1>
      <div>
        <input
          type="text"
          placeholder="영화 입력"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="영화 장르 입력"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="영화 배우 입력"
          value={actor}
          onChange={(e) => setActor(e.target.value)}
        ></input>
      </div>
      <div>
        <button onClick={onput}>완료</button>
        <button>취소</button>
      </div>
    </StyledDiv>
  );
};

export default Detail;
