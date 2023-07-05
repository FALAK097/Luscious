/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

import React from 'react'

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
        console.log(detailData);
    }

    useEffect(() => {
        fetchDetails();
    }, [params.name]);

    return (
        <DetailWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title} />
            </div>
            <Info>
                <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>
                    Instructions
                </Button>
                <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')} >
                    Ingredients
                </Button>
                {activeTab === 'instructions' && (

                    <div>
                        <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3> {/*dangerouslySetInnerHTML is used to render html tags in react*/}
                        <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
                    </div>
                )}
                {activeTab === 'ingredients' && (

                    <ul>
                        {details.extendedIngredients?.map((ingredient) => {
                            return (
                                <li key={ingredient.id}>{ingredient.original}</li>
                            )
                        })}
                    </ul>
                )}
            </Info>
        </DetailWrapper>
    )
}

const DetailWrapper = styled.div`
    display: flex;
    margin-top:10rem;
    margin-bottom:5rem;
    h2{
        margin-bottom:2rem;
    }
    li{
        font-size:1.5rem;
        line-height:2rem;
    }
    ul{
        margin-top:2rem;
    }
    .active{
        background:linear-gradient(35deg, #494949, #313131);
        color:white;
    }
`;

const Button = styled.button`
      padding: 1rem 4rem;
      color:#313131;
      background:white;
      border:2px solid black;
      margin-right:5rem;
      font-weight: 600;
      cursor:pointer;
`;

const Info = styled.div`
      margin-left: 10rem;
`;
export default Recipe