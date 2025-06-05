import React from "react";
import { Typography, Row, Col, Card, Space, Rate, Tag } from "antd";
import { CommentOutlined } from "@ant-design/icons";
import { TESTIMONIALS } from "@/constants/HomePage/TestimonialsSection";

const { Title, Paragraph, Text } = Typography;

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Nguyễn Minh Anh",
      role: "Mẹ bỉm sữa",
      avatar: "👩‍💼",
      rating: 5,
      comment:
        "CookMate đã giúp tôi tìm ra rất nhiều món ăn ngon từ những nguyên liệu đơn giản trong tủ lạnh. Đặc biệt hữu ích cho những bữa cơm gia đình!",
      highlight: "Tiết kiệm thời gian",
    },
    {
      id: 2,
      name: "Trần Văn Đức",
      role: "Sinh viên đại học",
      avatar: "👨‍🎓",
      rating: 5,
      comment:
        "Là sinh viên sống xa nhà, CookMate như người bạn đồng hành giúp tôi nấu những món ăn ngon mà không tốn kém. AI gợi ý rất chính xác!",
      highlight: "Phù hợp sinh viên",
    },
    {
      id: 3,
      name: "Lê Thị Hương",
      role: "Chuyên gia dinh dưỡng",
      avatar: "👩‍⚕️",
      rating: 5,
      comment:
        "Tôi rất ấn tượng với tính năng tính toán calories và giá trị dinh dưỡng của CookMate. Đây là công cụ tuyệt vời cho người quan tâm đến sức khỏe.",
      highlight: "Thông tin dinh dưỡng chính xác",
    },
    {
      id: 4,
      name: "Phạm Hoàng Nam",
      role: "Đầu bếp chuyên nghiệp",
      avatar: "👨‍🍳",
      rating: 4,
      comment:
        "Với kinh nghiệm 10 năm trong ngành, tôi thấy CookMate có thư viện công thức phong phú và hướng dẫn chi tiết. Rất phù hợp cho người mới bắt đầu.",
      highlight: "Thư viện phong phú",
    },
    {
      id: 5,
      name: "Võ Thanh Lan",
      role: "Nhân viên văn phòng",
      avatar: "👩‍💻",
      rating: 5,
      comment:
        "Sau một ngày làm việc mệt mỏi, CookMate giúp tôi nhanh chóng tìm ra món ăn phù hợp với thời gian và nguyên liệu có sẵn. Rất tiện lợi!",
      highlight: "Giao diện thân thiện",
    },
    {
      id: 6,
      name: "Hoàng Minh Tuấn",
      role: "Food blogger",
      avatar: "📝",
      rating: 5,
      comment:
        "CookMate không chỉ gợi ý công thức mà còn giúp tôi khám phá những món ăn mới lạ để review. Tính năng AI thực sự thông minh và hữu ích.",
      highlight: "Khám phá món mới",
    },
  ];

  return (
    <div style={{ padding: "100px 20px", background: "#f8f9fa" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <Title
            level={2}
            style={{ color: "#333", marginBottom: 16, fontSize: "2.5rem" }}
          >
            {TESTIMONIALS.TITLE}
          </Title>
          <Paragraph
            style={{
              fontSize: "18px",
              color: "#666",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            {TESTIMONIALS.SUBTITLE}
          </Paragraph>

          <Row gutter={48} style={{ marginTop: 40 }}>
            <Col xs={24} sm={8}>
              <div style={{ textAlign: "center" }}>
                <Title level={2} style={{ color: "#ff6b35", margin: 0 }}>
                  {TESTIMONIALS.STATS.RATING.NUMBER}
                </Title>
                <Text style={{ color: "#666" }}>
                  {TESTIMONIALS.STATS.RATING.LABEL}
                </Text>
              </div>
            </Col>
            <Col xs={24} sm={8}>
              <div style={{ textAlign: "center" }}>
                <Title level={2} style={{ color: "#ff6b35", margin: 0 }}>
                  {TESTIMONIALS.STATS.USERS.NUMBER}
                </Title>
                <Text style={{ color: "#666" }}>
                  {TESTIMONIALS.STATS.USERS.LABEL}
                </Text>
              </div>
            </Col>
            <Col xs={24} sm={8}>
              <div style={{ textAlign: "center" }}>
                <Title level={2} style={{ color: "#ff6b35", margin: 0 }}>
                  {TESTIMONIALS.STATS.RECOMMENDATION.NUMBER}
                </Title>
                <Text style={{ color: "#666" }}>
                  {TESTIMONIALS.STATS.RECOMMENDATION.LABEL}
                </Text>
              </div>
            </Col>
          </Row>
        </div>

        <Row gutter={[24, 24]}>
          {testimonials.map((testimonial) => (
            <Col xs={24} sm={12} lg={8} key={testimonial.id}>
              <Card
                style={{
                  borderRadius: 16,
                  border: "none",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  height: "100%",
                  position: "relative",
                  background: "white",
                }}
                styles={{
                  body: {
                    padding: "24px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  },
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -10,
                    right: 20,
                    background: "linear-gradient(135deg, #ff6b35, #ff8c42)",
                    color: "white",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                  }}
                >
                  <CommentOutlined />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <Space align="center" style={{ marginBottom: 12 }}>
                    <div
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        background:
                          "linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "20px",
                      }}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <Title level={5} style={{ margin: 0, color: "#333" }}>
                        {testimonial.name}
                      </Title>
                      <Text type="secondary" style={{ fontSize: "13px" }}>
                        {testimonial.role}
                      </Text>
                    </div>
                  </Space>

                  <Rate
                    disabled
                    defaultValue={testimonial.rating}
                    style={{ fontSize: "16px" }}
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <Paragraph
                    style={{
                      color: "#666",
                      fontSize: "15px",
                      lineHeight: 1.6,
                      fontStyle: "italic",
                      marginBottom: 16,
                    }}
                  >
                    "{testimonial.comment}"
                  </Paragraph>
                  <Tag color="orange" style={{ fontSize: "12px" }}>
                    {testimonial.highlight}
                  </Tag>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default TestimonialsSection;
