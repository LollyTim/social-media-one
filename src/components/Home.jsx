import styled from "styled-components";
import React from 'react'
import LeftSide from "./LeftSide";
import Main from "./Main";
import RightSide from "./RightSide";

const Home = (props) => {
  return (
    
    <Container>
        <Section>
            <h5><a>Hiring in a hurry? -</a></h5>
            <p>Find talented professionals in record time with upwork and keep business moving</p>
        </Section>
        <LayOut>
            <LeftSide />
            <Main />
            <RightSide />
        </LayOut>
    </Container>
  )
}

const Container = styled.div`
    padding-top: 52px;
    max-width: 100%;
`;
const Content = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 1128px;
`;

const Section = styled.section`
    min-height: 50px;
    padding: 16px 0;
    box-sizing: content-box;
    text-align: center;
    text-decoration: underline;
    display: flex;
    justify-content: center;
    h5{
        color: #0a66c3;
        font-size: 14px;
        a{
            font-weight: 700;
        }
    }
    p{
        font-size: 14px;
        color: #434649;
        font-weight: 600;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 5px;
    }
`;

const LayOut = styled.div`
    display: grid;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    column-gap: 25px;
    row-gap: 25px;
    grid-template-rows: auto;
    margin: 25px 0;
    @media (max-width:768px) {
        display: flex;
        flex-direction: column;
        padding: 0 5px;
        
    }

`;

export default Home