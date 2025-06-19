import React from "react";
import "../styles/loginStyles.css";

const BackgroundDecoration = () => {
  // Background pattern with SVG
  const backgroundPatternStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    opacity: 0.05,
  };

  // Container for the floating icons
  const floatingIconsContainerStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden",
    pointerEvents: "none",
  };

  // Define the floating cooking icons
  const floatingIcons = [
    {
      emoji: "🍳",
      className: "float-animation-1",
      style: {
        top: "10%",
        left: "15%",
        fontSize: "80px",
        opacity: 0.35,
        transform: "rotate(-15deg)",
      },
    },
    {
      emoji: "👨‍🍳",
      className: "float-animation-2",
      style: {
        top: "15%",
        right: "10%",
        fontSize: "60px",
        opacity: 0.3,
        transform: "rotate(20deg)",
      },
    },
    {
      emoji: "🥕",
      className: "float-animation-3",
      style: {
        top: "30%",
        left: "5%",
        fontSize: "45px",
        opacity: 0.25,
        transform: "rotate(-30deg)",
      },
    },
    {
      emoji: "🍲",
      className: "float-animation-4",
      style: {
        top: "35%",
        right: "8%",
        fontSize: "55px",
        opacity: 0.32,
        transform: "rotate(45deg)",
      },
    },
    {
      emoji: "🍴",
      className: "float-animation-5",
      style: {
        bottom: "25%",
        left: "12%",
        fontSize: "40px",
        opacity: 0.22,
        transform: "rotate(-10deg)",
      },
    },
    {
      emoji: "🍞",
      className: "float-animation-6",
      style: {
        bottom: "20%",
        right: "15%",
        fontSize: "35px",
        opacity: 0.28,
        transform: "rotate(25deg)",
      },
    },
    {
      emoji: "🧂",
      className: "float-animation-7",
      style: {
        top: "25%",
        left: "20%",
        fontSize: "30px",
        opacity: 0.2,
        transform: "rotate(-45deg)",
      },
    },
    {
      emoji: "🍅",
      className: "float-animation-8",
      style: {
        top: "55%",
        right: "20%",
        fontSize: "38px",
        opacity: 0.26,
        transform: "rotate(15deg)",
      },
    },
    {
      emoji: "🧅",
      className: "float-animation-9",
      style: {
        bottom: "15%",
        left: "45%",
        fontSize: "32px",
        opacity: 0.18,
        transform: "rotate(-20deg)",
      },
    },
    {
      emoji: "🥄",
      className: "float-animation-10",
      style: {
        top: "50%",
        left: "8%",
        fontSize: "35px",
        opacity: 0.24,
        transform: "rotate(60deg)",
      },
    },
  ];

  return (
    <>
      {/* Background Pattern */}
      <div style={backgroundPatternStyle} />

      {/* 3D Floating Cooking Icons */}
      <div style={floatingIconsContainerStyle}>
        {floatingIcons.map((icon, index) => (
          <div
            key={index}
            className={icon.className}
            style={{
              position: "absolute",
              filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.3))",
              ...icon.style,
            }}
          >
            {icon.emoji}
          </div>
        ))}
      </div>
    </>
  );
};

export default BackgroundDecoration;
