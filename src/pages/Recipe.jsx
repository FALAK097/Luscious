/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

function Recipe() {
    let params = useParams();

    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");

    const fetchDetails = async () => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        const detailData = await data.json();
        setDetails(detailData);
    }

    useEffect(() => {
        fetchDetails();
    }, [params.name]);

    return (
        <DetailWrapper>
            <ImageContainer>
                <img src={details.image} alt={details.title} />
                <h2>{details.title}</h2>
            </ImageContainer>
            <Info>
                <Tabs>
                    <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>
                        Instructions
                    </Button>
                    <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')} >
                        Ingredients
                    </Button>
                </Tabs>
                <Content>
                    {activeTab === 'instructions' && (
                        <div>
                            <h3>Instructions:</h3>
                            <ul>
                                {details.analyzedInstructions && details.analyzedInstructions.length > 0 ? (
                                    details.analyzedInstructions[0].steps.map((step) => (
                                        <li key={step.number}>{step.step}</li>
                                    ))
                                ) : (
                                    <li>No instructions available.</li>
                                )}
                            </ul>
                        </div>
                    )}
                    {activeTab === 'ingredients' && (
                        <div>
                            <h3>Ingredients:</h3>
                            <ul>
                                {details.extendedIngredients?.map((ingredient) => {
                                    return (
                                        <li key={ingredient.id}>{ingredient.original}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    )}
                </Content>
            </Info>
        </DetailWrapper>
    )
}

const DetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 5rem;
    h2 {
        margin: 1rem 0;
        font-size: 1.2rem;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    max-width: 500px;
    text-align: center;
    img {
        width: 100%;
        height: auto;
        border-radius: 10px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    }
`;

const Info = styled.div`
    margin-top: 2rem;
`;

const Tabs = styled.div`
    justify-content: center;
    flex-wrap: wrap; /* Added this to wrap the buttons to the next line for smaller screens */
`;

const Button = styled.button`
    padding: 1rem 4rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    margin-bottom: 1rem; /* Added this to add space between the buttons for smaller screens */
    font-weight: 600;
    cursor: pointer;

    &:last-child {
        margin-right: 0;
    }

    &.active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }

    @media (max-width:767px){
        margin-left: 2rem;
    }
`;

const Content = styled.div`
    margin-top: 2rem;
    max-width: 600px;

    h3 {
        font-size: 1.5rem;
        line-height: 1.8rem;
        margin-bottom: 1rem;
    }

    ul {
        list-style-type: disc;
        padding-left: 2rem;
        font-size: 1.2rem;
        li {
            margin-bottom: 0.5rem;
        }
    }
`;

export default Recipe;
