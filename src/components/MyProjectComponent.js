
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
@media only screen and (max-width:768px){
    flex-direction: column;
}
`
const LeftContainer = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 50px;

`
const Title = styled.h1``
const Description = styled.h5``
const IconContainer = styled.div``
const Icon = styled.img`
width: 75px;
padding: 10px;
`
const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: 2;
display: flex;
align-items: center;
justify-content: center;
transition:all 1s ease ;
`
const ProjectImage = styled.img`
z-index: 1;
@media only screen and (max-width:690px){
    width: 100%;
}
`
const RightContainer = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
position: relative;
&:hover ${Info}{
    opacity: 1;
    cursor: pointer;
    
}
&:hover ${ProjectImage}{
    cursor: pointer;
    transform: scale(1.2);
    transition: all 0.5s ease;
    opacity: 0.35;
}
`


export default function MyProjectComponent({data}) {
    console.log(data)

    return (
        <Container>
            <LeftContainer>
                <Title>{data.projectName}</Title>
                <Description> {data.projectDescription} </Description>
                <IconContainer>
                {data.icon.map(e=> <Icon src={e}/>)}
                </IconContainer>
            </LeftContainer>
            <RightContainer onClick={()=>window.open(data.projectLink)} >
                <ProjectImage src={data.projectImage} />
                <Info><Title>{data.projectName}</Title></Info>
            </RightContainer>
        </Container>
    )
}
