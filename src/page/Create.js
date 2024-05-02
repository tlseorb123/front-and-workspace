import styled from "styled-components";
import { useState, useEffect } from "react";
import { addMovies } from "../api/movie";

const Create = () => {

    const Styled = styled`
    h1 {
  display: flex;
  justify-content: center;
}

div {
  display: flex;
  justify-content: center;
  h2 {
    margin: 50px;
  }

}

    `

    const [movie, setMovie] = useState({})

   
    const movieAPI=() =>({ 

    })

   
    
  <h1>영화 정보 추가</h1>
  <div>
    <input type="text" resource="영화 제목 입력"></input>
    <input type="text" resource="영화 장르 입력"></input>
    <input type="text" resource="영화 배우들 입력"></input>
    <button onClick={addMovies}>영화 추가</button>
  </div>

    
    
};


export default Create;
