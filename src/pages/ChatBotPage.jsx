import React, { useState, useEffect } from "react";
import { Button, Drawer, Tabs, Space, Avatar, Badge } from "antd";
import {
  MessageOutlined,
  RobotOutlined,
  HistoryOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import ChatInterface from "@components/ChatBot/ChatInterface";
import ChatHistory from "@components/ChatBot/ChatHistory";
import {
  generateChatTitle,
  getWelcomeMessage,
  STORAGE_KEYS,
  CHAT_HISTORY_LIMIT,
} from "@components/ChatBot/chatBotUtils";
import { callGeminiAI } from "@components/ChatBot/geminiApi";

const ChatBotPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("chat");
  const [currentChatId, setCurrentChatId] = useState(null);
  const [messages, setMessages] = useState([getWelcomeMessage()]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  // Load chat history from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem(STORAGE_KEYS.CHAT_HISTORY);
    if (savedHistory) {
      setChatHistory(JSON.parse(savedHistory));
    }
  }, []);

  // Save chat to history when messages change
  useEffect(() => {
    if (messages.length > 1 && currentChatId) {
      saveChatToHistory();
    }
  }, [messages, currentChatId]);

  const saveChatToHistory = () => {
    const chatTitle = generateChatTitle(messages);
    const chatSession = {
      id: currentChatId,
      title: chatTitle,
      messages: messages,
      lastUpdated: new Date(),
      messageCount: messages.length,
    };

    const updatedHistory = chatHistory.filter(
      (chat) => chat.id !== currentChatId
    );
    updatedHistory.unshift(chatSession);

    // Keep only last 10 conversations
    const limitedHistory = updatedHistory.slice(0, CHAT_HISTORY_LIMIT);

    setChatHistory(limitedHistory);
    localStorage.setItem(
      STORAGE_KEYS.CHAT_HISTORY,
      JSON.stringify(limitedHistory)
    );
  };

  const startNewChat = () => {
    setCurrentChatId(Date.now());
    setMessages([getWelcomeMessage()]);
    setActiveTab("chat");
    setInputValue("");
  };

  const loadChatFromHistory = (chatSession) => {
    setCurrentChatId(chatSession.id);
    setMessages(chatSession.messages);
    setActiveTab("chat");
  };

  const deleteChatFromHistory = (chatId) => {
    const updatedHistory = chatHistory.filter((chat) => chat.id !== chatId);
    setChatHistory(updatedHistory);
    localStorage.setItem(
      STORAGE_KEYS.CHAT_HISTORY,
      JSON.stringify(updatedHistory)
    );

    if (currentChatId === chatId) {
      startNewChat();
    }
  };

  const clearAllHistory = () => {
    setChatHistory([]);
    localStorage.removeItem(STORAGE_KEYS.CHAT_HISTORY);
    startNewChat();
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Initialize chat if not already started
    if (!currentChatId) {
      setCurrentChatId(Date.now());
    }

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue("");
    setIsTyping(true);

    // Gọi Gemini AI API thay cho getBotResponse
    const botResponse = await callGeminiAI(currentInput);
    const botMessage = {
      id: Date.now() + 1,
      text: botResponse,
      isBot: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsTyping(false);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        type="primary"
        shape="circle"
        size="large"
        icon={<MessageOutlined />}
        onClick={() => setIsOpen(true)}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          width: "56px",
          height: "56px",
          backgroundColor: "#ff6b35",
          borderColor: "#ff6b35",
          zIndex: 1000,
          boxShadow: "0 4px 12px rgba(255, 107, 53, 0.4)",
        }}
      />

      {/* Chat Drawer */}
      <Drawer
        title={
          <Space>
            <Avatar
              icon={<RobotOutlined />}
              style={{ backgroundColor: "#ff6b35" }}
            />
            <span>CookBot - Trợ lý nấu ăn</span>
          </Space>
        }
        placement="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        width={450}
        extra={
          <Space>
            <Button
              type="text"
              size="small"
              onClick={startNewChat}
              style={{ color: "#666" }}
            >
              Chat mới
            </Button>
          </Space>
        }
      >
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          items={[
            {
              key: "chat",
              label: (
                <span>
                  <CommentOutlined />
                  Chat
                </span>
              ),
              children: (
                <ChatInterface
                  messages={messages}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  onSendMessage={handleSendMessage}
                  isTyping={isTyping}
                />
              ),
            },
            {
              key: "history",
              label: (
                <span>
                  <HistoryOutlined />
                  Lịch sử ({chatHistory.length})
                </span>
              ),
              children: (
                <ChatHistory
                  chatHistory={chatHistory}
                  onLoadChat={loadChatFromHistory}
                  onDeleteChat={deleteChatFromHistory}
                  onClearAllHistory={clearAllHistory}
                  onStartNewChat={startNewChat}
                />
              ),
            },
          ]}
        />
      </Drawer>
    </>
  );
};

export default ChatBotPage;
