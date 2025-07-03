import React from "react";
import { Row, Col } from "antd";
import RecipeCard from "./RecipeCard";
import styled from "styled-components";

const SimpleCardWrapper = styled.div`
  border-radius: 36px;
  background: #fff;
  box-shadow: 0 4px 32px rgba(255, 107, 53, 0.1);
  transition: box-shadow 0.3s, transform 0.3s, outline 0.2s;
  position: relative;
  overflow: hidden;
  &:hover {
    box-shadow: 0 8px 40px 0 rgba(255, 107, 53, 0.18);
    transform: scale(1.035);
    outline: 2.5px solid #ffb366;
    z-index: 3;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: 36px;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.08) 0%,
      rgba(255, 179, 102, 0.1) 100%
    );
    opacity: 0;
    transition: opacity 0.2s;
  }
  &:hover:after {
    opacity: 1;
  }
`;

const RecipeRow = ({ row, rowRef, isLastRow }) => (
  <Row
    gutter={[30, 36]}
    justify="center"
    ref={rowRef}
    className="recipe-row-animate"
    style={{ marginBottom: isLastRow ? 0 : 24 }}
  >
    {row.map((recipe) => (
      <Col
        key={recipe.id}
        xs={24}
        sm={12}
        md={8}
        lg={6}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <SimpleCardWrapper className="recipe-card">
          <RecipeCard recipe={recipe} description={recipe.description} />
        </SimpleCardWrapper>
      </Col>
    ))}
  </Row>
);

export default RecipeRow;
