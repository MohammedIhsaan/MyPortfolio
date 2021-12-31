import React from 'react'
import styled from 'styled-components'
import HtmlPhoto from "../images/html.png"
import CSSPhoto from "../images/css3.png"
import JSPhoto from "../images/JavaScript-logo.png"
import RPhoto from "../images/reactjs.png"
import RDPhoto from "../images/redux.png"
import BPhoto from "../images/bootstrap.png"
import backgroundImage from '../images/4.jpg'

const Container = styled.div`
background-image: url(${backgroundImage});
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
/* background-attachment: fixed; */
display: flex;
justify-content: space-around;
padding: 50px;

@media only screen and (max-width:790px){
    flex-direction: column;
}
@media only screen and (max-width:690px){
    padding: 30px;
}
`
const LeftContainer = styled.div`
display: flex;
align-items:center;
justify-content: center;
`
const Title = styled.h1`
font-size: 80px;
`
const RightContainer = styled.div`
border: black solid 1px;
display: flex;
padding: 30px;

align-items:center;
justify-content: center;
@media only screen and (max-width:400px){
    flex-direction: column;
}
`
const SubContainer1 = styled.div`
display: flex;
align-items: center;
color: blueviolet;

flex-direction: column;
padding-left: 100px;
padding-right: 100px;
@media only screen and (max-width:768px){
    padding-left: 40px;
padding-right: 40px;
}
`
const SubContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
export default function MySkill() {
    return (
        <Container id='newSkill'>
            <LeftContainer><Title>Skills</Title></LeftContainer>
            <RightContainer>
                <SubContainer1>
                    <SubContainer>
                       <h3>REACT.JS</h3>
                      <img src={RPhoto} width="80" height="100" ></img>
                   </SubContainer>
                   <SubContainer>
                    <h3>JAVASCRIPT</h3>
                    <img src={JSPhoto} width="100" height="100" ></img>
                    </SubContainer>
                    <SubContainer>
                    <h3>REDUX</h3>
                    <img src={RDPhoto} width="80" height="100" ></img>
                    </SubContainer>                   
                </SubContainer1>
                <SubContainer1>
                <SubContainer>
                    <h3>HTML5</h3>
                        <img src={HtmlPhoto} width="80" height="100" ></img>
                    </SubContainer>
                    <SubContainer >
                    <h3>CSS3</h3>
                    <img src={CSSPhoto} width="80" height="100" ></img>
                    </SubContainer>
                    <SubContainer >
                    <h3>BOOTSTRAP</h3>
                    <img src={BPhoto} width="100" height="80" ></img>
                    </SubContainer>  
                </SubContainer1>
            </RightContainer>
            
        </Container>
    )
}
