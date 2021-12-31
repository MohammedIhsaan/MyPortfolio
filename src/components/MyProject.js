import React from 'react'
import styled  from 'styled-components'
import imageArray from './imagesData'
import MyProjectComponent from './MyProjectComponent'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Title = styled.h1`
padding-top: 50px;
font-size: 60px;
`
const ProjectContainer = styled.div`
padding: 20px;
`
export default function MyProject() {

    let project = imageArray.map((obj,i)=>{
        return <MyProjectComponent  data={obj}/>
      })
    return (
        <Container id='project'>
            <Title>My Project</Title>
            <ProjectContainer>{project}</ProjectContainer>
        </Container>
    )
}
