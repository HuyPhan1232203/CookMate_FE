import React from "react";
import {
  Card,
  Input,
  Button,
  Tag,
  Space,
  Typography,
} from "antd";
import {
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const IngredientsInput = ({
  inputValue,
  setInputValue,
  ingredients,
  onAddIngredient,
  onRemoveIngredient,
  onSuggestionClick,
  onSearch,
  loading,
  INGREDIENTS,
}) => {
  // Mock data for ingredient suggestions
  const ingredientSuggestions = [
    "🍖 Thịt heo",
    "🍗 Thịt gà",
    "🐟 Cá",
    "🦐 Tôm",
    "🥚 Trứng",
    "🍅 Cà chua",
    "🧅 Hành tây",
    "🥕 Cà rốt",
    "🥬 Rau cải",
    "🌶️ Ớt",
    "🧄 Tỏi",
    "🫚 Gừng",
    "🌾 Gạo",
    "🍜 Mì",
    "🥔 Khoai tây",
  ];

  return (
    <Card
      title={INGREDIENTS.CARD_TITLE}
      style={{
        borderRadius: 16,
        border: "none",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        marginBottom: 24,
        height: "100%",
      }}
      styles={{
        header: {
          background: "linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)",
          color: "white",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        },
        body: {
          display: "flex",
          flexDirection: "column",
          height: "calc(100% - 58px)",
        },
      }}
    >
      <div style={{ marginBottom: 20 }}>
        <Space.Compact style={{ width: "100%" }}>
          <Input
            placeholder={INGREDIENTS.INPUT_PLACEHOLDER}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onPressEnter={onAddIngredient}
            style={{ borderRadius: "8px 0 0 8px", height: 40 }}
          />
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={onAddIngredient}
            style={{
              borderRadius: "0 8px 8px 0",
              height: 40,
              background: "#ff6b35",
              borderColor: "#ff6b35",
            }}
          >
            {INGREDIENTS.BUTTON_ADD}
          </Button>
        </Space.Compact>
      </div>

      <div style={{ marginBottom: 20 }}>
        <Text strong style={{ display: "block", marginBottom: 12 }}>
          {`${INGREDIENTS.SELECTED_INGREDIENTS} (${ingredients.length}):`}
        </Text>
        <div style={{ minHeight: 60 }}>
          {ingredients.length > 0 ? (
            <Space size="small" wrap>
              {ingredients.map((ingredient, index) => (
                <Tag
                  key={index}
                  closable
                  onClose={() => onRemoveIngredient(ingredient)}
                  color="orange"
                  style={{
                    padding: "4px 12px",
                    borderRadius: 20,
                    fontSize: "14px",
                  }}
                >
                  {ingredient}
                </Tag>
              ))}
            </Space>
          ) : (
            <Text type="secondary">{INGREDIENTS.EMPTY_INGREDIENTS}</Text>
          )}
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <Text strong style={{ display: "block", marginBottom: 12 }}>
          {INGREDIENTS.POPULAR_SUGGESTIONS}
        </Text>
        <Space size={[8, 8]} wrap>
          {ingredientSuggestions.map((suggestion, index) => (
            <Tag
              key={index}
              color="#ff6b35"
              style={{
                cursor: "pointer",
                padding: "4px 10px",
                borderRadius: 12,
              }}
              onClick={() => onSuggestionClick(suggestion)}
            >
              {suggestion}
            </Tag>
          ))}
        </Space>
      </div>

      <Button
        type="primary"
        size="large"
        icon={<SearchOutlined />}
        onClick={onSearch}
        loading={loading}
        disabled={ingredients.length === 0}
        style={{
          width: "100%",
          height: 50,
          borderRadius: 8,
          fontSize: "16px",
          background: ingredients.length > 0 ? "#ff6b35" : "#d9d9d9",
          borderColor: ingredients.length > 0 ? "#ff6b35" : "#d9d9d9",
          boxShadow:
            ingredients.length > 0
              ? "0 4px 12px rgba(255, 107, 53, 0.3)"
              : "none",
        }}
      >
        {INGREDIENTS.BUTTON_SEARCH}
      </Button>
    </Card>
  );
};

export default IngredientsInput; 