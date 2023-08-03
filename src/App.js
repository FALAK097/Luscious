import Pages from './pages/Pages';
import Category from './components/Category';
import { BrowserRouter, Link } from 'react-router-dom';
import Search from './components/Search';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to="/">🍔Luscious</Logo>
        </Nav>
        <MainContent>
          <Category />
          <MobileSearch>
            <Search />
          </MobileSearch>
        </MainContent>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  font-size: 1.5em;
  text-decoration: none;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`;

const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 1.75rem;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MobileSearch = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin: 2rem 0;
  }
`;

export default App;
