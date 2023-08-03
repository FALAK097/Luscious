import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        try {
            const check = localStorage.getItem("popular");

            if (check) {
                setPopular(JSON.parse(check));
            } else {
                const api = await fetch(
                    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
                );
                const data = await api.json();

                localStorage.setItem("popular", JSON.stringify(data.recipes));
                setPopular(data.recipes);
                console.log(data.recipes);
            }
        } catch (error) {
            console.error("Error fetching popular recipes:", error);
            setPopular([]); // Set an empty array if there's an error to avoid "map" errors
        }
    };

    if (!popular || popular.length === 0) {
        return <div>Loading...</div>; // Conditional rendering for loading state or when there's no data
    }

    return (
        <Wrapper>
            <Heading>Popular Picks</Heading>
            <Splide options={splideOptions}>
                {popular.map((recipe) => (
                    <SplideSlide key={recipe.id}>
                        <Card>
                            <Link to={"/recipe/" + recipe.id}>
                                <Image src={recipe.image} alt={recipe.title} />
                                <Title>{recipe.title}</Title>
                            </Link>
                        </Card>
                    </SplideSlide>
                ))}
            </Splide>
        </Wrapper>
    );
}

const splideOptions = {
    perPage: 3,
    arrows: false,
    pagination: false,
    gap: "2rem",
};

const Wrapper = styled.div`
  margin: 2rem 0rem;

  @media (max-width: 768px) {
    margin: 1rem 0rem;
  }
`;

const Heading = styled.h3`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Card = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  a {
    text-decoration: none;
  }
`;

const Image = styled.img`
  border-radius: 2rem;
  width: 100%;
  height: 22rem;
  object-fit: cover;
`;

const Title = styled.p`
  position: absolute;
  z-index: 1;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  color: white;
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 1.2rem;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));

  @media (max-width: 768px) {
    font-size: 1rem;
    height: 30%;
  }
`;

export default Popular;
