import React from "react";
import {
  Row,
  Col,
  Typography,
  Input,
  Button,
  Form,
  notification,
  Space,
  Card,
} from "antd";
import {
  SendOutlined,
  GiftOutlined,
  CheckCircleOutlined,
  RocketOutlined,
  MobileOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { CTA } from "@/constants/HomePage/CallToActionSection";

const { Title, Paragraph, Text } = Typography;

const CallToActionSection = ({ handleEmailSubmit, form }) => {
  const onFinish = (values) => {
    handleEmailSubmit(values);
    notification.success({
      message: CTA.SUCCESS_MESSAGE,
      description: CTA.SUCCESS_DESCRIPTION,
    });
  };

  return (
    <div
      style={{
        padding: "120px 20px",
        background: "linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.1)",
          transform: "rotate(45deg)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-30px",
          left: "-30px",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={12}>
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    background: "rgba(255,255,255,0.2)",
                    padding: "8px 16px",
                    borderRadius: 20,
                    marginBottom: 24,
                  }}
                >
                  <GiftOutlined style={{ color: "#ffeb3b", marginRight: 8 }} />
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {CTA.BADGE.TEXT}
                  </Text>
                </div>

                <Title
                  level={1}
                  style={{
                    color: "white",
                    marginBottom: 20,
                    fontSize: "3rem",
                    fontWeight: "bold",
                    lineHeight: 1.2,
                  }}
                >
                  {CTA.TITLE.PART1}
                  <span
                    style={{
                      display: "block",
                      background: "linear-gradient(45deg, #ffeb3b, #ff9800)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {CTA.TITLE.HIGHLIGHTED}
                  </span>
                  {CTA.TITLE.PART2}
                </Title>
              </div>

              <Paragraph
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "18px",
                  lineHeight: 1.6,
                  marginBottom: 30,
                }}
              >
                {CTA.SUBTITLE}
              </Paragraph>

              <div style={{ marginBottom: 30 }}>
                <Row gutter={[12, 12]}>
                  {CTA.FEATURES.map((feature, index) => (
                    <Col span={12} key={index}>
                      <Space align="start" size="small">
                        <CheckCircleOutlined
                          style={{
                            color: "#4caf50",
                            fontSize: "16px",
                            marginTop: 2,
                          }}
                        />
                        <Text
                          style={{
                            color: "rgba(255,255,255,0.9)",
                            fontSize: "14px",
                          }}
                        >
                          {feature}
                        </Text>
                      </Space>
                    </Col>
                  ))}
                </Row>
              </div>

              <Space size="middle" wrap>
                <Button
                  type="primary"
                  size="large"
                  icon={<RocketOutlined />}
                  style={{
                    background: "linear-gradient(135deg, #ff6b35, #ff8c42)",
                    borderColor: "transparent",
                    fontWeight: "bold",
                    height: "50px",
                    padding: "0 32px",
                    fontSize: "16px",
                    borderRadius: 25,
                    boxShadow: "0 4px 15px rgba(255, 107, 53, 0.4)",
                  }}
                >
                  {CTA.BUTTONS.PRIMARY}
                </Button>
                <Button
                  size="large"
                  icon={<MobileOutlined />}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    borderColor: "rgba(255,255,255,0.3)",
                    color: "white",
                    fontWeight: "bold",
                    height: "50px",
                    padding: "0 32px",
                    fontSize: "16px",
                    borderRadius: 25,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {CTA.BUTTONS.SECONDARY}
                </Button>
              </Space>

              <div style={{ marginTop: 40 }}>
                <Row gutter={24}>
                  <Col span={8}>
                    <div style={{ textAlign: "center" }}>
                      <Title level={3} style={{ color: "#ffeb3b", margin: 0 }}>
                        {CTA.STATS.USERS.NUMBER}
                      </Title>
                      <Text
                        style={{
                          color: "rgba(255,255,255,0.8)",
                          fontSize: "12px",
                        }}
                      >
                        {CTA.STATS.USERS.LABEL}
                      </Text>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div style={{ textAlign: "center" }}>
                      <Title level={3} style={{ color: "#4caf50", margin: 0 }}>
                        {CTA.STATS.RECIPES.NUMBER}
                      </Title>
                      <Text
                        style={{
                          color: "rgba(255,255,255,0.8)",
                          fontSize: "12px",
                        }}
                      >
                        {CTA.STATS.RECIPES.LABEL}
                      </Text>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div style={{ textAlign: "center" }}>
                      <Title level={3} style={{ color: "#ff9800", margin: 0 }}>
                        {CTA.STATS.RATING.NUMBER}
                      </Title>
                      <Text
                        style={{
                          color: "rgba(255,255,255,0.8)",
                          fontSize: "12px",
                        }}
                      >
                        {CTA.STATS.RATING.LABEL}
                      </Text>
                    </div>
                  </Col>
                </Row>
              </div>
            </Space>
          </Col>

          <Col xs={24} lg={12}>
            <Card
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 20,
                color: "white",
              }}
            >
              <Title
                level={3}
                style={{
                  color: "white",
                  textAlign: "center",
                  marginBottom: 24,
                }}
              >
                {CTA.SIGNUP.TITLE}
              </Title>
              <Text
                style={{
                  color: "rgba(255,255,255,0.9)",
                  display: "block",
                  textAlign: "center",
                  marginBottom: 24,
                }}
              >
                {CTA.SIGNUP.SUBTITLE}
              </Text>
              <Form form={form} onFinish={onFinish}>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: CTA.EMAIL_REQUIRED_MESSAGE },
                    { type: "email", message: CTA.EMAIL_INVALID_MESSAGE },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder={CTA.EMAIL_PLACEHOLDER}
                    prefix={<MailOutlined />}
                    style={{ borderRadius: 12 }}
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    block
                    style={{
                      background: "white",
                      color: "#ff6b35",
                      borderColor: "white",
                      fontWeight: "bold",
                      borderRadius: 12,
                      height: 50,
                    }}
                  >
                    {CTA.BUTTON_TEXT}
                  </Button>
                </Form.Item>
              </Form>

              <Paragraph
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "0.9rem",
                  marginTop: 16,
                  textAlign: "center",
                }}
              >
                {CTA.PRIVACY_TEXT}
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CallToActionSection;
