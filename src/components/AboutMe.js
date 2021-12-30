import react from 'react'
import styled from 'styled-components'
import Myphoto from '../images/MohammedIhsaan.jpeg'
import backgroundImage from '../images/1.jpg'
import { GitHub,Twitter,LinkedIn} from '@material-ui/icons';


const Container = styled.div`
display: flex;
justify-content: space-between;
background-image: url(${backgroundImage});
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
background-attachment: fixed;


@media only screen and (max-width:690px){
    flex-direction: column;
}
` 
const LeftContainer = styled.div`
flex: 1;
padding-top: 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
` 

const MyImage = styled.img`
width: 65%;
border-radius: 50%;

@media only screen and (max-width:1320px){
    width: 85%;
}
@media only screen and (max-width:1070px){
    width: 95%;
}
@media only screen and (max-width:800px){
    width: 250px;
}
@media only screen and (max-width:690px){
    width: 45%;
}

`

const MyName = styled.h5`
padding-top: 30px;
`
const Occupation = styled.h6`
padding-top: 5px;
`

const SocialIcon = styled.div`
`
const Icon = styled.a`
padding-left: 10px;
cursor: pointer;
color: #000;
`

const RightContainer = styled.div`
padding: 50px;
flex: 2;
display: flex;
flex-direction: column;

`
const SubConatiner = styled.div`
background-color: white;
border-radius: 5%;
padding: 50px;
`

const MyIntro = styled.h6`
font-weight: 400;
line-height: 25px;
font-size: 18px;
`
const MyDetails = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`
const Education = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
const Interst = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`

export default function AboutMe() {
    return (
        <Container>
            <LeftContainer>
                <MyImage src={Myphoto} />
                <MyName>MOHAMMED IHSAANUL HAQUE</MyName>
                <Occupation>REACT.JS DEVELOPER</Occupation>
                <SocialIcon>
                    <Icon href='https://github.com/MohammedIhsaan'>
                        <GitHub style={{fontSize:'35px'}}/>
                    </Icon>
                    <Icon href="https://twitter.com/ihsaanul_haque">
                        <Twitter style={{fontSize:'35px'}}/>
                    </Icon>
                    <Icon href="https://www.linkedin.com/in/ihsaan-mohammed-895732222/"><LinkedIn style={{fontSize:'35px'}}/></Icon>
                </SocialIcon>
            </LeftContainer>
            <RightContainer>
                <SubConatiner>

                <MyIntro>
                Hi, I am Mohammed Ihsaan. < br ></br> Motivated  web developer ,
                    Passionate about building first-class web applications. I have compelted my Post Graduation in Structural Engineering(CIVIL).
                    I have developed a keen interest for Web Development. 
                     I have completed some React.js projects, 
                     You can  check in My Work section.
                      My expertise are in  React.js, Redux ,JavaScript, HTML5, CSS3, Bootstrap, 
                      Material UI, and also working as freelancer web developer. 
                      I'm also learning Back-End Development 
                    and looking forward to be a Full Stack Web Developer.
                </MyIntro>
                <MyDetails>
                    <Education>
                    <h5>Education</h5>          
                    <h6>M.E STRUCTURAL ENGINEER </h6>( M.S Bidwe Engineering College, Latur) 
                    </Education>
                    <Interst>
                    <h5>Interset</h5>
                       <ul>
                           <li><h6>Web Development</h6></li>
                           <li><h6>Block Chain</h6></li>
                           <li><h6>AI</h6></li>
                       </ul>
                    </Interst>
                </MyDetails>
                </SubConatiner>
            </RightContainer>
        </Container>
    )
}
