import React, { useState } from "react";
import styled from "styled-components";
import {
  AiFillCaretDown,
  AiFillTags,
  AiOutlineCompass,
  AiOutlineTool,
  AiOutlineTransaction,
  AiOutlineUpload,
  AiTwotoneContainer,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Uniheader = () => {
  const [products, setproducts] = useState(false);
  const [orders, setorders] = useState(false);
  return (
    <Container>
      <Wrap>
        <Up>
          <Hold  onClick={() => {
                setproducts(true);
              }}>
            <span>
              <AiTwotoneContainer fontSize="25px" color="#9661cb" />
            </span>
            <Text>Product</Text>
            <span>
              <AiFillCaretDown />
            </span>
          </Hold>
          {products ? (
              <Menu
                onClick={() => {
                  setproducts(false);
                }}
              >
                <Navs to="/seller-dashboard/all-product">All Products</Navs>
                <Navs to="/seller-dashboard/live-product">Live Products</Navs>
                <Navs to="/seller-dashboard/sold-product">Sold Out</Navs>
                <Navs to="/seller-dashboard/rejected-product">Rejected Products</Navs>
              </Menu>
            ) : null}
          <Hold onClick={() => {
                setorders(true);
              }}>
            <span>
              <AiFillTags fontSize="25px" color="brown" />
            </span>
            <Text>Orders</Text>
            <span>
              <AiFillCaretDown />
            </span>
          </Hold>
          {orders ? (
              <OrderMenu
                onClick={() => {
                  setorders(false);
                }}
              >
                <Navs to="/seller-dashboard/all-orders">All Orders</Navs>
                <Navs to="/seller-dashboard/pending">Pending Orders</Navs>
                <Navs to="/seller-dashboard/all-product">Ready to Ship</Navs>
                <Navs to="/seller-dashboard/deliverd">Shipped</Navs>
              </OrderMenu>
            ) : null}
          <Hold>
            <span>
              <AiOutlineCompass fontSize="25px" color="#c05f3e" />
            </span>
            <Text>Completed</Text>
            <span>
              <AiFillCaretDown />
            </span>
          </Hold>
          <Hold>
            <span>
              <AiOutlineUpload fontSize="25px" color="#47390f" />
            </span>
            <Text>Upload Items</Text>
            <span>
              <AiFillCaretDown />
            </span>
          </Hold>
          <Hold>
            <span>
              <AiOutlineTransaction fontSize="25px" color="gray" />
            </span>
            <Text>Transactions</Text>
            <span>
              <AiFillCaretDown />
            </span>
          </Hold>
          <Hold>
            <span>
              <AiOutlineTool fontSize="25px" color="#123456" />
            </span>
            <Text>Settings</Text>
            <span>
              <AiFillCaretDown />
            </span>
          </Hold>
        </Up>
      </Wrap>
    </Container>
  );
};

export default Uniheader;
// const Container = styled.div``
const Navs = styled(NavLink)`
  width: 100%;
  padding: 10px 0px;
  /* border-bottom: 1px solid lightgray; */
  cursor: pointer;
  text-align: center;
  font-weight: 600;
  text-decoration: none;
  color: black;

  :hover {
    background-color: lightgray;
  }
`;
const OrderMenu = styled.div`
  width: 200px;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid #d975c0;
  border-radius: 5px;

  position: absolute;
  top: 215px;
  right: 80px;
  z-index: 1111;
`;
const Menu = styled.div`
  width: 200px;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid #d975c0;
  border-radius: 5px;

  position: absolute;
  top: 215px;
  left: 100px;
  z-index: 1111;
`;
const Text = styled.div`
  font-size: 12px;
  font-weight: 700;
`;
const Hold = styled.div`
  width: 120px;
  height: 40px;
  border-radius: 50px;
  padding: 0 20px;
  margin: 30px 100px;
  span {
    position: relative;
    bottom: -3px;
  }
  div {
    position: relative;
    bottom: -1px;
    cursor: pointer;
  }
  border: 1.8px solid #d975c0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    margin: 20px;
  }
`;
const Down = styled.div`
  width: 95%;
  height: 75px;
  /* min-height: 100%; */
  padding: 0 10px;
  display: flex;
  flex-wrap: wrap;
  min-height: 150px;

  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
const Up = styled.div`
  width: 95%;
  padding: 0 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;
const Container = styled.div`
  width: 100%;
  /* height: 60px; */
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 20px; */
`;
