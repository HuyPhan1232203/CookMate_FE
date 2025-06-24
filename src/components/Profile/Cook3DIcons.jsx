import React from "react";
import {
  FireOutlined,
  CoffeeOutlined,
  SmileOutlined,
  CrownOutlined,
  AppleOutlined,
  ForkOutlined,
  GiftOutlined,
  StarOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

const Cook3DIcons = () => (
  <>
    <FireOutlined
      style={{
        position: "absolute",
        left: 30,
        top: 0,
        fontSize: 32,
        color: "#ff5722",
        animation: "float1 3.2s ease-in-out infinite",
        zIndex: 2,
      }}
    />
    <CoffeeOutlined
      style={{
        position: "absolute",
        right: 10,
        top: 18,
        fontSize: 30,
        color: "#a1887f",
        animation: "float2 3.6s ease-in-out infinite",
        zIndex: 2,
      }}
    />
    <SmileOutlined
      style={{
        position: "absolute",
        left: 80,
        bottom: 10,
        fontSize: 28,
        color: "#ffd600",
        animation: "float3 3.1s ease-in-out infinite",
        zIndex: 2,
      }}
    />
    <CrownOutlined
      style={{
        position: "absolute",
        right: 80,
        bottom: 0,
        fontSize: 28,
        color: "#ffb300",
        animation: "float4 3.7s ease-in-out infinite",
        zIndex: 2,
      }}
    />
    <AppleOutlined
      style={{
        position: "absolute",
        left: 10,
        top: 90,
        fontSize: 28,
        color: "#e17055",
        animation: "float5 3.3s ease-in-out infinite",
        zIndex: 2,
      }}
    />
    <ForkOutlined
      style={{
        position: "absolute",
        right: 30,
        top: 120,
        fontSize: 26,
        color: "#636e72",
        animation: "float6 3.5s ease-in-out infinite",
        zIndex: 2,
      }}
    />
    <GiftOutlined
      style={{
        position: "absolute",
        left: 120,
        top: 10,
        fontSize: 26,
        color: "#fd79a8",
        animation: "float7 3.4s ease-in-out infinite",
        zIndex: 2,
      }}
    />
    <StarOutlined
      style={{
        position: "absolute",
        right: 120,
        bottom: 30,
        fontSize: 24,
        color: "#fbc531",
        animation: "float8 3.2s ease-in-out infinite",
        zIndex: 2,
      }}
    />
    <ThunderboltOutlined
      style={{
        position: "absolute",
        left: 200,
        bottom: 0,
        fontSize: 24,
        color: "#00b894",
        animation: "float9 3.6s ease-in-out infinite",
        zIndex: 2,
      }}
    />
    <style>{`
      @keyframes float1 { 0% { transform: translateY(0) rotate(-10deg); } 50% { transform: translateY(-18px) rotate(10deg); } 100% { transform: translateY(0) rotate(-10deg); } }
      @keyframes float2 { 0% { transform: translateY(0) rotate(8deg); } 50% { transform: translateY(-14px) rotate(-8deg); } 100% { transform: translateY(0) rotate(8deg); } }
      @keyframes float3 { 0% { transform: translateY(0) scale(1); } 50% { transform: translateY(-10px) scale(1.15); } 100% { transform: translateY(0) scale(1); } }
      @keyframes float4 { 0% { transform: translateY(0) rotate(-6deg); } 50% { transform: translateY(-12px) rotate(6deg); } 100% { transform: translateY(0) rotate(-6deg); } }
      @keyframes float5 { 0% { transform: translateY(0) scale(1); } 50% { transform: translateY(-16px) scale(1.12); } 100% { transform: translateY(0) scale(1); } }
      @keyframes float6 { 0% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-12px) rotate(20deg); } 100% { transform: translateY(0) rotate(0deg); } }
      @keyframes float7 { 0% { transform: translateY(0) rotate(-8deg); } 50% { transform: translateY(-10px) rotate(8deg); } 100% { transform: translateY(0) rotate(-8deg); } }
      @keyframes float8 { 0% { transform: translateY(0) scale(1); } 50% { transform: translateY(-8px) scale(1.18); } 100% { transform: translateY(0) scale(1); } }
      @keyframes float9 { 0% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-14px) rotate(-18deg); } 100% { transform: translateY(0) rotate(0deg); } }
    `}</style>
  </>
);

export default Cook3DIcons;
