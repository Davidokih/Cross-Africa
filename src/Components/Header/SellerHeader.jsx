import React, { useRef, useState } from "react";
import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { BiHelpCircle, BiSearch } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Slider from "./Slider";

const Header = () => {
  const [categories, setCategories] = useState(false);
  const [ account, setAccount ] = useState(false);
  const [menuChange, setMenuChange] = useState(false)
  const user = JSON.parse(localStorage.getItem("user"));
  const myRef = useRef()

  console.log(menuChange)
  const change = () => {
    myRef.current.style.left = "0px"
    setMenuChange(true)
  }
  const returnAgain = () => {
    myRef.current.style.left = "-1000px"
    setMenuChange(false)
  }
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo>
            <img src="/logo 1.png" />
            <div>Cross Africa</div>
          </Logo>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Header;

const Navs = styled.div`
  width: 100%;
  padding: 10px 0px;
  /* border-bottom: 1px solid lightgray; */
  cursor: pointer;
  text-align: center;
  font-weight: 600;

  :hover {
    background-color: lightgray;
  }
`;
const AcMenu = styled.div`
  width: 210px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid #d975c0;
  /* border: 1px solid blue; */
  border-radius: 5px;

  position: absolute;
  top: 60px;
  left: 60%;
  right: 40%;
  z-index: 1111;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Menu = styled.div`
  width: 210px;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid #d975c0;
  border-radius: 5px;

  position: absolute;
  top: 60px;
  left: 150px;
  z-index: 1111;

  @media (max-width: 768px) {
    display: none;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #383333; */
  border-bottom: 1px solid lightgray;
`;
const Wrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 30px;
  flex: 0.2 0.3 auto;
  /* background: gold; */
  /* margin-bottom: 10px; */

  img {
    height: 60px;
    width: 60px;
  }

  div {
    font-weight: 700;
    font-size: 20px;
  }
`;
const Hold = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 85%; */
  flex: 1 0 100px;
  /* background-color: gold; */
  @media (max-width:768px) {
    justify-content: flex-end;
  }
  @media (max-width: 660px) {
    justify-content: flex-end;
  }
  width: 80%;
`;
const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  cursor: pointer;
`;
const Nav = styled.div`
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: gold;
  height: 30px;
  cursor: pointer;
  margin-left: 10px;

  span {
    margin-left: 10px;
    position: relative;
    bottom: -3px;
  }
  :nth-child(1) {
    @media (max-width: 1000px) {
      display: none;
    }
  }
  :nth-child(3) {
    @media (max-width: 1000px) {
      display: none;
    }
  }
  
  /* :nth-child(1){
    @media (max-width: 1000px){
      display: none;
    }
  } */
`;
const SearchHold = styled.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
  @media (max-width:768px) {
    display: none;
  }
`;
