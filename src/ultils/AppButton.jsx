import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: ${(props) => props.bg || "#ff6b35"};
  color: ${(props) => props.color || "#fff"};
  border: none;
  border-radius: ${(props) => props.radius || "20px"};
  padding: ${(props) => props.padding || "8px 28px"};
  font-size: ${(props) => props.size || "16px"};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s, color 0.2s;
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.08);
  outline: none;
  &:hover {
    background: ${(props) => props.bgHover || "#ff8c42"};
    color: ${(props) => props.colorHover || "#fff"};
    box-shadow: 0 4px 16px rgba(255, 107, 53, 0.16);
  }
`;

const AppButton = ({
  children,
  bg,
  color,
  radius,
  size,
  padding,
  bgHover,
  colorHover,
  ...rest
}) => (
  <StyledButton
    bg={bg}
    color={color}
    radius={radius}
    size={size}
    padding={padding}
    bgHover={bgHover}
    colorHover={colorHover}
    {...rest}
  >
    {children}
  </StyledButton>
);

export default AppButton;
