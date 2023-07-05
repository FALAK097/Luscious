import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
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
        </List>
    )
}


const List = styled.div`
    display: flex;
    justify-content: center;
    margin : 2rem 0 ;
`

const SLink = styled(NavLink)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    background:linear-gradient(35deg, #494949, #313131);
    width: 8rem;
    height: 8rem;
    cursor: pointer;
    transform: scale(0.8);

    h4{
        color: white;
        font-size: 1rem;
    }
    svg{
        color: white;
        font-size: 1.5rem;
    }
    &.active{
        background:linear-gradient(to right, #f27121, #e94057);

        svg{
            color: white;
        }
        h4{
            color: white;
        }
    }
`
export default Category