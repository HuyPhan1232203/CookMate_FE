import React from "react";
import {
  Card,
  Empty,
  Spin,
  List,
  Space,
  Divider,
  Rate,
  Tag,
  Typography,
} from "antd";
import {
  ClockCircleOutlined,
  FireOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const RecipeList = ({
  loading,
  suggestions,
  onRecipeClick,
  INGREDIENTS,
}) => {
  // Get appropriate color for difficulty level
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Dễ":
        return "#52c41a";
      case "Trung bình":
        return "#faad14";
      case "Khó":
        return "#ff4d4f";
      default:
        return "#d9d9d9";
    }
  };

  return (
    <Card
      title={INGREDIENTS.RECIPE_CARD_TITLE}
      style={{
        borderRadius: 16,
        border: "none",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
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
          alignItems: "center",
          justifyContent: "center",
          minHeight: "400px",
        },
      }}
    >
      {loading ? (
        <div style={{ textAlign: "center", padding: "60px 0" }}>
          <Spin size="large" />
          <Text style={{ display: "block", marginTop: 16 }}>
            {INGREDIENTS.LOADING_TEXT}
          </Text>
        </div>
      ) : suggestions.length > 0 ? (
        <div
          style={{
            maxHeight: "480px",
            overflowY: "auto",
            paddingRight: "8px",
            scrollbarWidth: "thin",
            scrollbarColor: "#ff6b35 #f0f0f0",
          }}
        >
          <List
            dataSource={suggestions}
            renderItem={(recipe) => (
              <List.Item style={{ border: "none", padding: "16px 0" }}>
                <Card
                  size="small"
                  hoverable
                  style={{ width: "100%", borderRadius: 12 }}
                  onClick={() => onRecipeClick(recipe)}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                    }}
                  >
                    <div
                      style={{
                        fontSize: "40px",
                        background: "linear-gradient(45deg, #ff6b35, #ffa726)",
                        borderRadius: 12,
                        padding: "12px",
                        minWidth: 70,
                        textAlign: "center",
                      }}
                    >
                      {recipe.image}
                    </div>
                    <div style={{ flex: 1 }}>
                      <Title level={5} style={{ margin: 0, marginBottom: 8 }}>
                        {recipe.name}
                      </Title>
                      <Space split={<Divider type="vertical" />}>
                        <Space>
                          <ClockCircleOutlined />
                          {recipe.time}
                        </Space>
                        <Space>
                          <FireOutlined />
                          {`${recipe.calories} ${INGREDIENTS.CAL_SUFFIX}`}
                        </Space>
                        <Tag color={getDifficultyColor(recipe.difficulty)}>
                          {recipe.difficulty}
                        </Tag>
                      </Space>
                      <div style={{ marginTop: 8 }}>
                        <Rate
                          disabled
                          value={Math.floor(recipe.rating)}
                          size="small"
                        />
                        <Text style={{ marginLeft: 8, fontSize: "12px" }}>
                          {`${recipe.rating} ⭐ • ${recipe.matchingIngredients} ${INGREDIENTS.MATCHING_TEXT}`}
                        </Text>
                      </div>
                      {recipe.description && (
                        <Text
                          type="secondary"
                          style={{
                            display: "block",
                            marginTop: 8,
                            fontSize: "12px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {recipe.description}
                        </Text>
                      )}
                    </div>
                  </div>
                </Card>
              </List.Item>
            )}
          />
          {suggestions.length > 3 && <div></div>}
        </div>
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={INGREDIENTS.EMPTY_RESULTS}
          style={{ padding: "60px 0" }}
        >
          <Text type="secondary">{INGREDIENTS.EMPTY_SUGGESTION}</Text>
        </Empty>
      )}
    </Card>
  );
};

export default RecipeList; 