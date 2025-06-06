import { FloatingEmoji } from "@/styles/RecipeStyle/RecipeList.styled";
import React from "react";

const FloatingEmojis = () => (
  <>
    <FloatingEmoji
      size="52px"
      style={{ top: "40px", left: "10%", filter: "blur(0.5px)" }}
      duration="7s"
      delay="1s"
    >
      🍲
    </FloatingEmoji>
    <FloatingEmoji
      size="48px"
      style={{ top: "80px", right: "15%", filter: "blur(0.5px)" }}
      duration="8s"
      delay="0.5s"
    >
      🥗
    </FloatingEmoji>
    <FloatingEmoji
      size="42px"
      style={{ bottom: "120px", left: "12%", filter: "blur(1px)" }}
      duration="6.5s"
      delay="2s"
    >
      🍜
    </FloatingEmoji>
    <FloatingEmoji
      size="46px"
      style={{ bottom: "150px", right: "10%", filter: "blur(1px)" }}
      duration="7.5s"
      delay="1.5s"
    >
      🍳
    </FloatingEmoji>
    <FloatingEmoji
      size="40px"
      style={{ top: "150px", left: "30%", filter: "blur(0.5px)" }}
      duration="8s"
      delay="0.8s"
    >
      🥕
    </FloatingEmoji>
  </>
);

export default FloatingEmojis;
