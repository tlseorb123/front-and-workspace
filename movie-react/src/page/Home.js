import { useEffect, useState } from "react";
import { delMovies, getMovies } from "../api/movie";
import styled from "styled-components";
import { getMovies, delMovies } from "../api/movie";

const Styled = styled.div`
  width: 900px;
  margin: auto;
  margin-top: 30px;
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-top: 30px;
  }
  table {
    width: 100%;
    margin-top: 30px;
  }
`;

const Home = () => {
  const [Movie, setMovies] = useState([]);

  const moviesAPI = async () => {
    const result = await getMovies();
    setMovies(result.data);
  };

  useEffect(() => {
    moviesAPI();
  }, []);

  const onDelete = async (no) => {
    await delMovies(no);
    moviesAPI();
  };

  return (
    <>
      <Header />
      <div>
        <a href="/">영화 목록</a>
        <a href="/create">영화 정보 추가</a>
      </div>
      <StyledDiv>
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
            {moviesAPI.map((movie) => (
              <tr key={movie.no}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.actor}</td>
                <td>
                  <button onClick={() => onDelete(movie.no)}>삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </StyledDiv>
    </>
  );
};

export default Home;
