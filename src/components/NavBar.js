import React,{useState} from 'react'
import styled from 'styled-components'
import { Link } from "react-scroll"

import { toggleIcon } from '../reponsive'


const Container = styled.div`
background-color: black;
color: white;
font-size: 18px;
display: flex;
 justify-content: space-between;
 flex-wrap: wrap;
padding: 10px 10px;
/* position: fixed;
width: 100%; */
`

const Logo = styled.div`
font-weight: 500;
`

const Menu = styled.div`
display: flex;
justify-content: space-between;
position: relative;

@media (max-width:680px){
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    max-height: ${({isOpen})=>isOpen? "300px": "0"};
    transition: max-height 0.3s ease-in;
}

`
const MenuItem = styled.div`
font-size: 15px;
font-weight: 500;
cursor: pointer;
margin-left: 25px;


&:hover{
    color: red;
    transform: scale(1.1);
}
`
const Toggle = styled.button`
display: none;
${toggleIcon({display:'flex'})}
`
export default function NavBar() {

    const [isOpen,setIsOpen]=useState(false)

    return (
        <Container>
                <Logo>MOHAMMED IHSAANUL HAQUE</Logo>
                <Toggle onClick={()=>setIsOpen(!isOpen)}>
                    icon
                </Toggle>         
                <Menu isOpen={isOpen}>
                  <MenuItem><Link to='intro'>HOME</Link>  </MenuItem>
                  <MenuItem><Link to='intro'>ABOUT</Link> </MenuItem>
                  <MenuItem><Link to='newSkill'>SKILLS</Link> </MenuItem>
                  <MenuItem><Link to='project'>MY WORK</Link> </MenuItem>
                </Menu>         
                
        </Container>
    )
}
