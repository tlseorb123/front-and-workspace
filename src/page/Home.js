import { useEffect, useState } from "react";
import { delMovies, getMovies } from "../api/movie";


const Home = () => {

    const [Movie, setMovie] = useState({})

   
    

    useEffect(()=>{
    
    }, [])

    const delMovies = ()=>{

    }

    
  <h1>영화 목록</h1>
  <div>
    <h2>제목</h2>
    <h2>장르</h2>
    <h2>영화배우</h2>
    <button onClick={delMovies}>삭제</button>
  </div>
    
};

export default Home;
