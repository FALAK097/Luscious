import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
        )
        const recipes = await data.json()
        setSearchedRecipes(recipes.results)
    }

    useEffect(() => {
        getSearched(params.search)
    }, [params.search])

    return (
        <Grid
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {searchedRecipes.map((item) => {
                return (
                    <Card key={item.id}>
                        <Link to={"/recipe/" + item.id}>
                            <img src={item.image} alt={item.title} />
                            <h4>{item.title}</h4>
                        </Link>
                    </Card>
                )
            }
            )}
        </Grid>
    )
}

const Grid = styled(motion.div)`
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(12rem,4fr));
`;

const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  padding: 1rem;
  position:relative;
    img{
        width:100%;
        border-radius: 2rem;
    }
    a{
        text-decoration:none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`;

export default Searched