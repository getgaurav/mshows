import React, { useState } from "react";
import styled from "styled-components";
import Row from "./Row";



function CategoryRow(props) {



  const [fetchUrl, setFetchUrl] = useState(props.req[0]);
  //  need to work this 
  const [activeBtn, setActiveBtn] = useState(false);




  return (
    <div>
      <Column>
        <Title>{props.title}</Title>
        <Category>
          {props.category.map((category, index) => (
            <CategoryButton className={activeBtn} key={category} onClick={(e)=>{
              setFetchUrl(props.req[index]);
              // need to work this active button
              if(index === 0 ){
                setActiveBtn('active')
              }else{
                setActiveBtn(false);
              }
             
              }}>
              {category}
            </CategoryButton>
          ))}
        </Category>
      </Column>
      <Row isLargRow={true} fetchURL={fetchUrl} />
    </div>
  );
}

const Column = styled.div`
  width: 100%;
  height: auto;
  max-height: 40px;
  padding: 0px 40px;
  display: flex;
  align-items: center;
`;
const Title = styled.h2`
  color: #dfdfdf;
  font-weight: 500;
`;
const Category = styled.div`
  display: flex;
  border: 1px solid #dfdfdf;
  border-radius: 30px;
  margin-left: 20px;
  overflow: hidden;
  .active {
    background-color: #ffbd03;
    color: #222;
  }
`;
const CategoryButton = styled.button`
  text-decoration: none;
  padding: 3px 20px;
  color: #dfdfdf;
  font-size: 15px;
  background-color:transparent;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s;
  border: none;
  outline: none;
  cursor: pointer;
`;

export default CategoryRow;
