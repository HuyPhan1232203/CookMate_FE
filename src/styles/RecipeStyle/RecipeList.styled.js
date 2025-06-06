import styled, { keyframes, css } from "styled-components";

const floatAnimation = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); opacity: 0.2; }
  50% { transform: scale(1.05); opacity: 0.3; }
  100% { transform: scale(1); opacity: 0.2; }
`;

const shimmerAnimation = keyframes`
  0% { background-position: -500px 0; }
  100% { background-position: 500px 0; }
`;

export const FloatingEmoji = styled.div`
  position: absolute;
  font-size: ${(props) => props.size || "48px"};
  opacity: 0.2;
  animation: ${(props) =>
    css`
      ${floatAnimation} ${props.duration || "6s"} ease-in-out infinite
    `};
  animation-delay: ${(props) => props.delay || "0s"};
  z-index: 1;
  pointer-events: none;
`;

export const PulsingCircle = styled.div`
  position: absolute;
  width: ${(props) => props.size || "300px"};
  height: ${(props) => props.size || "300px"};
  border-radius: 50%;
  background: ${(props) =>
    props.gradient ||
    "radial-gradient(circle, rgba(255,155,68,0.1) 0%, rgba(255,107,53,0.05) 70%, transparent 100%)"};
  animation: ${(props) =>
    css`
      ${pulseAnimation} ${props.duration || "8s"} ease-in-out infinite
    `};
  animation-delay: ${(props) => props.delay || "0s"};
  z-index: -1;
`;

export const ShimmerTitle = styled.div`
  color: #ff6b35;
  font-size: 36px;
  font-weight: 700;
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      to right,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    background-size: 500px 100%;
    animation: ${shimmerAnimation} 5s infinite linear;
    z-index: 1;
    pointer-events: none;
  }
`;
