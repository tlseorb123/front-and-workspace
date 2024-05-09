import Header from "../components/Header";
import styled from "styled-components";
import { getMovie, UpMovie } from "../api/movie";
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

const Select = () => {
  const [movies, setMovies] = useState([]);

  const moviesAPI = async () => {
    const result = await getMovie();
    setMovies(result.no);
  };

  useEffect(() => {
    moviesAPI();
  }, []);

  const onSelect = async () => {
    await UpMovie();
    moviesAPI();
  };

  return (
    <StyledDiv>
      <Header />
      <h1>영화정보</h1>
      <table>
        <thead>
          {movies.map((movie) => (
            <tr key={movie.no}>
              <th>{movie.title}</th>
              <th>{movie.genre}</th>
              <th>{movie.actor}</th>
              <th>
                <button onClick={() => onSelect(movie)}>수정</button>
              </th>
            </tr>
          ))}
          ;
        </thead>
      </table>
    </StyledDiv>
  );
};
export default Select;
