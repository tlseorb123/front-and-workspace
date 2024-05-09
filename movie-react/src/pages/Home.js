import Header from "../components/Header";
import styled from "styled-components";
import { getMovies, delMovie } from "../api/movie";
import { useState, useEffect } from "react";

const StyledDiv = styled.div`
  width: 900px;
  margin: auto;
  text-align: center;
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-top: 30px;
  }
  table {
    width: 100%;
    margin-top: 30px;
    th {
      width: 25%;
      font-weight: bold;
    }
    td {
      padding-top: 20px;
    }
  }
`;

const Home = () => {
  const [movies, setMovies] = useState([]);

  const moviesAPI = async () => {
    const result = await getMovies();
    setMovies(result.data);
  };

  useEffect(() => {
    moviesAPI();
  }, []);

  const onDelete = async (no) => {
    await delMovie(no);
    moviesAPI();
  };

  return (
    <StyledDiv>
      <Header />
      <h1>영화 목록</h1>
      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>장르</th>
            <th>영화배우</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.no}>
              <td>
                <a href="/select">{movie.title}</a>
              </td>
              <td><a href="/select">{movie.genre}</a></td>
              <td><a href="/selevt">{movie.actor}</a></td>
              <td>
                <button onClick={() => onDelete(movie.no)}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledDiv>
  );
};
export default Home;
