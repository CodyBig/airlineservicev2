import styled from "styled-components";
import './passenger';
import { NavLink } from 'react-router-dom';
function Options() {
  const ButtonStyle = styled.button`
  border-radius: 10%;
  margin-left: 35%;
  margin-top: 100px;
  width: 400px;
  height: 200px;
  font-size: 3em;
  transition: font-size 1s, width 1s;
  hover: blue;
  &:hover{
    background-color:black;
    color: white;
    font-size: 3.5em;
    width: 450px;
  }`

    
  return (
      <>
  
    <NavLink
    to="/passenger">
    <ButtonStyle>
      Passengers</ButtonStyle>
    </NavLink>
   
    <NavLink
    to="/flights">
    <ButtonStyle>Flights</ButtonStyle>
    </NavLink>
    </>
  );
}

export default Options;
