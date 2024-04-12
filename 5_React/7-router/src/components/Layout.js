import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  height: 70px;
  box-sizing: border-box;
  line-height: 70px;

  h1 {
    font-size: 3rem;
  }
  nav {
    a {
      margin-right: 15px;
    }
  }
`;

const Layout = () => {
  return (
    <>
      <Header>
        <h1>Animal</h1>
        <nav>
          <a href="/">목록</a>
          <a href="/create">추가</a>
        </nav>
      </Header>
      <Outlet />
    </>
  );
};

export default Layout;
