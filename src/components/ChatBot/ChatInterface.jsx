import React, { useRef, useEffect } from "react";
import { Card, Typography, Avatar } from "antd";
import { RobotOutlined } from "@ant-design/icons";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

const { Text } = Typography;

const ChatInterface = ({
  messages,
  inputValue,
  setInputValue,
  onSendMessage,
  isTyping,
}) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSendMessage();
    }
  };

  return (
    <div
      style={{
        height: "calc(100vh - 160px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Messages Area */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "0 0 16px 0",
          maxHeight: "calc(100vh - 240px)",
        }}
      >
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Avatar
              size="small"
              icon={<RobotOutlined />}
              style={{ backgroundColor: "#ff6b35" }}
            />
            <Card
              size="small"
              style={{
                backgroundColor: "#f6f6f6",
                border: "none",
                borderRadius: "12px",
              }}
              bodyStyle={{ padding: "8px 12px" }}
            >
              <Text type="secondary">CookBot đang soạn tin...</Text>
            </Card>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <ChatInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onSend={onSendMessage}
        onKeyPress={handleKeyPress}
        disabled={isTyping}
      />
    </div>
  );
};

export default ChatInterface;
