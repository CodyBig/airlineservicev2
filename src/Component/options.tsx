import styled from "styled-components";
import './passenger';
import { NavLink } from 'react-router-dom';
import {FaPlane} from "react-icons/fa";
import {AiOutlineUserAdd} from "react-icons/ai";
function Options() {
  const ButtonStyle = styled.button`
  appearance: none;
  background-color: transparent;
  border-radius: 0.6em;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
 margin-left: 40%;
 margin-top: 10%;
 width: 30%;
 
  padding: 2.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  border-color: black;
  color: #fff;
  box-shadow: 0 0 40px 40px black inset, 0 0 0 0 black;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
  
  &:hover{
    color: black;
  outline: 0;
  box-shadow: 0 0 10px 0 black inset, 0 0 10px 4px black;
  }
  &:focus{
    color: black;
  outline: 0;
  }
  
  &:active{
    color: black;
    outline: 0;
  box-shadow: 0 0 10px 0 black inset, 0 0 10px 4px black;
 
  transform: translateY(4px);
  }`

    
  return (
      <>
  
    <NavLink
    to="/passenger">
    <ButtonStyle>
      <AiOutlineUserAdd  fontSize="45px"/>
      Passengers</ButtonStyle>
    </NavLink>
   
    <NavLink
    to="/flights">
    <ButtonStyle>
    <FaPlane text-align="left" fontSize={"45px"}/>
      Flights
    </ButtonStyle>
    </NavLink>
    </>
  );
}

export default Options;
