import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks, GiIndianPalace } from 'react-icons/gi';
import { BiBowlRice } from 'react-icons/bi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Category() {
    return (
        <List>
            <SLink to={'/cuisine/Italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink>
            <SLink to={'/cuisine/American'}>
                <FaHamburger />
                <h4>American</h4>
            </SLink>
            <SLink to={'/cuisine/Thai'}>
                <GiNoodles />
                <h4>Thai</h4>
            </SLink>
            <SLink to={'/cuisine/Japanese'}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </SLink>
            <SLink to={'/cuisine/Korean'}>
                <BiBowlRice />
                <h4>Korean</h4>
            </SLink>
            <SLink to={'/cuisine/Indian'}>
                <GiIndianPalace />
                <h4>Indian</h4>
            </SLink>
        </List>
    )
}

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 1rem 0;

  @media (min-width: 768px) {
    justify-content: center;
  }
`

const SLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center both text and icon */
  border-radius: 50%;
  background: linear-gradient(35deg, #494949, #313131);
  width: 8rem;
  height: 8rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }

  svg {
    color: white;
    font-size: 2rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`

export default Category;
