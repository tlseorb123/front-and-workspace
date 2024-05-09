import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;

const Header = () => {
  return (
    <Nav>
      <a href="/">영화 목록</a>
      <a href="/create">영화 정보 추가</a>
    </Nav>
  );
};
export default Header;
