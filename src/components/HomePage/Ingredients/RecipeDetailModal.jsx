import React from "react";
import {
  Modal,
  Typography,
  Space,
  Rate,
  Badge,
  Tag,
  Steps,
  Spin,
  Empty,
} from "antd";
import {
  ClockCircleOutlined,
  FireOutlined,
  UserOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const RecipeDetailModal = ({
  visible,
  onClose,
  selectedRecipe,
  cookingSteps,
  stepsLoading,
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
    <Modal
      title={null}
      open={visible}
      onCancel={onClose}
      footer={null}
      width={800}
      centered
      styles={{
        body: { padding: 0 },
      }}
      closeIcon={<CloseOutlined style={{ color: "#fff", fontSize: "16px" }} />}
    >
      {selectedRecipe && (
        <div>
          {/* Modal Header */}
          <div
            style={{
              background: "linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)",
              padding: "24px",
              borderRadius: "8px 8px 0 0",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div
                style={{
                  fontSize: "60px",
                  background: "rgba(255, 255, 255, 0.2)",
                  borderRadius: 16,
                  padding: "16px",
                  minWidth: 92,
                  textAlign: "center",
                }}
              >
                {selectedRecipe.image}
              </div>
              <div style={{ flex: 1, color: "white" }}>
                <Title
                  level={3}
                  style={{ color: "white", margin: 0, marginBottom: 8 }}
                >
                  {selectedRecipe.name}
                </Title>
                <Space size="large" style={{ marginBottom: 12 }}>
                  <Space>
                    <ClockCircleOutlined />
                    <span>{selectedRecipe.time}</span>
                  </Space>
                  <Space>
                    <FireOutlined />
                    <span>{selectedRecipe.calories} cal</span>
                  </Space>
                  <Space>
                    <UserOutlined />
                    <span>{selectedRecipe.servings || "2-3"} phần</span>
                  </Space>
                </Space>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <Rate
                    disabled
                    value={Math.floor(selectedRecipe.rating)}
                    size="small"
                    style={{ color: "#fff" }}
                  />
                  <Badge
                    count={selectedRecipe.difficulty}
                    style={{
                      backgroundColor: getDifficultyColor(
                        selectedRecipe.difficulty
                      ),
                      color: "white",
                    }}
                  />
                  {selectedRecipe.origin && (
                    <Tag color="orange">{selectedRecipe.origin}</Tag>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div style={{ padding: "24px" }}>
            {/* Description */}
            {selectedRecipe.description && (
              <div style={{ marginBottom: 24 }}>
                <Title level={5} style={{ marginBottom: 8 }}>
                  📝 Mô tả món ăn
                </Title>
                <Paragraph style={{ fontSize: "14px", color: "#666" }}>
                  {selectedRecipe.description}
                </Paragraph>
              </div>
            )}

            {/* Ingredients */}
            {selectedRecipe.fullIngredients &&
              selectedRecipe.fullIngredients.length > 0 && (
                <div style={{ marginBottom: 24 }}>
                  <Title level={5} style={{ marginBottom: 12 }}>
                    🛒 Nguyên liệu cần thiết
                  </Title>
                  <div
                    style={{
                      background: "#f8f9fa",
                      padding: "16px",
                      borderRadius: 8,
                    }}
                  >
                    <Space size={[8, 8]} wrap>
                      {selectedRecipe.fullIngredients.map(
                        (ingredient, index) => (
                          <Tag
                            key={index}
                            color="orange"
                            style={{
                              padding: "4px 12px",
                              borderRadius: 20,
                              fontSize: "13px",
                            }}
                          >
                            {ingredient}
                          </Tag>
                        )
                      )}
                    </Space>
                  </div>
                </div>
              )}

            {/* Cooking Steps */}
            <div>
              <Title level={5} style={{ marginBottom: 16 }}>
                👨‍🍳 Hướng dẫn nấu ăn
              </Title>

              {stepsLoading ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <Spin size="large" />
                  <Text style={{ display: "block", marginTop: 16 }}>
                    Đang tải hướng dẫn nấu ăn...
                  </Text>
                </div>
              ) : cookingSteps.length > 0 ? (
                <Steps
                  direction="vertical"
                  size="small"
                  current={cookingSteps.length}
                  items={cookingSteps.map((step, index) => ({
                    title: `Bước ${step.step}`,
                    description: (
                      <div style={{ paddingBottom: 16 }}>
                        <Text style={{ fontSize: "14px", lineHeight: "1.6" }}>
                          {step.description}
                        </Text>
                      </div>
                    ),
                    status: "finish",
                  }))}
                />
              ) : (
                <Empty
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                  description="Không có hướng dẫn nấu ăn"
                  style={{ padding: "40px 0" }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default RecipeDetailModal; 