import React, { useEffect } from "react";
import { Row, Col, Typography } from "antd";
import RecipeCard from "./RecipeCard";
import styled, { keyframes, css } from "styled-components";

const { Title } = Typography;

// Tạo các keyframes cho animation
const floatAnimation = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); opacity: 0.2; }
  50% { transform: scale(1.05); opacity: 0.3; }
  100% { transform: scale(1); opacity: 0.2; }
`;

const shimmerAnimation = keyframes`
  0% { background-position: -500px 0; }
  100% { background-position: 500px 0; }
`;

// Các styled components cho animation
const FloatingEmoji = styled.div`
  position: absolute;
  font-size: ${(props) => props.size || "48px"};
  opacity: 0.2;
  animation: ${(props) =>
    css`
      ${floatAnimation} ${props.duration || "6s"} ease-in-out infinite
    `};
  animation-delay: ${(props) => props.delay || "0s"};
  z-index: 1;
  pointer-events: none;
`;

const PulsingCircle = styled.div`
  position: absolute;
  width: ${(props) => props.size || "300px"};
  height: ${(props) => props.size || "300px"};
  border-radius: 50%;
  background: ${(props) =>
    props.gradient ||
    "radial-gradient(circle, rgba(255,155,68,0.1) 0%, rgba(255,107,53,0.05) 70%, transparent 100%)"};
  animation: ${(props) =>
    css`
      ${pulseAnimation} ${props.duration || "8s"} ease-in-out infinite
    `};
  animation-delay: ${(props) => props.delay || "0s"};
  z-index: -1;
`;

const ShimmerTitle = styled.div`
  color: #ff6b35;
  font-size: 36px;
  font-weight: 700;
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      to right,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    background-size: 500px 100%;
    animation: ${shimmerAnimation} 5s infinite linear;
    z-index: 1;
    pointer-events: none;
  }
`;
const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    image:
      "https://media.istockphoto.com/id/1344241923/vi/anh/spaghetti-v%E1%BB%9Bi-th%E1%BB%8Bt-vi%C3%AAn-v%C3%A0-s%E1%BB%91t-c%C3%A0-chua-m%C3%AC-%E1%BB%91ng-%C3%BD.jpg?s=612x612&w=0&k=20&c=gEgei4SCpsPDlbVvmL8o1UnVoOrUw0jXH8TDhpeH4gM=",
    description: "Món Ý truyền thống với sốt kem trứng và thịt xông khói.",
    rating: 4.8,
    prepTime: "15 phút",
    cookTime: "20 phút",
    difficulty: "Trung bình",
    author: "Chef Mario",
  },
  {
    id: 2,
    title: "Bánh Mì Việt Nam",
    image:
      "https://banhmi.mein.vn/wp-content/uploads/2023/12/Banh-mi-Me-In-1.jpg",
    description: "Bánh mì giòn rụm, nhân thịt và rau thơm.",
    rating: 4.9,
    prepTime: "10 phút",
    cookTime: "15 phút",
    difficulty: "Dễ",
    author: "Chef Linh",
  },
  {
    id: 3,
    title: "Phở Bò Hà Nội",
    image:
      "https://cdn.tgdd.vn/Files/2022/01/25/1412805/cach-nau-pho-bo-nam-dinh-chuan-vi-thom-ngon-nhu-hang-quan-202201250230038502.jpg",
    description: "Món phở truyền thống với nước dùng ngọt thơm và thịt bò mềm.",
    rating: 4.9,
    prepTime: "30 phút",
    cookTime: "3 giờ",
    difficulty: "Khó",
    author: "Chef Hùng",
  },
  {
    id: 4,
    title: "Gỏi Cuốn Tôm Thịt",
    image:
      "https://i.ytimg.com/vi/w34Qnc-9KBU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAzXE6ASDMpVme1qsjbkQx4v-KaYA",
    description: "Cuốn rau mát với tôm tươi, thịt heo và bún.",
    rating: 4.5,
    prepTime: "20 phút",
    cookTime: "15 phút",
    difficulty: "Dễ",
    author: "Chef Trang",
  },
  {
    id: 5,
    title: "Cơm Tấm Sườn Bì Chả",
    image:
      "https://i-giadinh.vnecdn.net/2024/03/07/7Honthinthnhphm1-1709800144-8583-1709800424.jpg",
    description: "Cơm với sườn nướng, bì heo và trứng chiên.",
    rating: 4.7,
    prepTime: "15 phút",
    cookTime: "30 phút",
    difficulty: "Trung bình",
    author: "Chef Minh",
  },
  {
    id: 6,
    title: "Bún Chả Hà Nội",
    image:
      "https://khaihoanphuquoc.com.vn/wp-content/uploads/2023/08/cach-lam-nuoc-mam-bun-cha-02.jpg",
    description: "Bún ăn kèm với thịt viên nướng và nước mắm pha.",
    rating: 4.8,
    prepTime: "25 phút",
    cookTime: "20 phút",
    difficulty: "Trung bình",
    author: "Chef Thu",
  },
  {
    id: 7,
    title: "Cá Kho Tộ",
    image: "https://i.ytimg.com/vi/zvlct2ZXhj8/sddefault.jpg",
    description: "Cá kho với nước mắm và tiêu trong nồi đất.",
    rating: 4.6,
    prepTime: "10 phút",
    cookTime: "40 phút",
    difficulty: "Trung bình",
    author: "Chef Quang",
  },
  {
    id: 8,
    title: "Bún Bò Huế",
    image: "https://i.ytimg.com/vi/A_o2qfaTgKs/maxresdefault.jpg",
    description: "Bún với thịt bò, giò heo và nước dùng cay nồng.",
    rating: 4.9,
    prepTime: "30 phút",
    cookTime: "2 giờ",
    difficulty: "Khó",
    author: "Chef Huế",
  },
  {
    id: 9,
    title: "Bánh Xèo",
    image:
      "https://daylambanh.edu.vn/wp-content/uploads/2019/03/banh-xeo-bang-bot-pha-san-600x400.jpg",
    description: "Bánh giòn với nhân tôm, thịt, giá đỗ và ăn kèm rau sống.",
    rating: 4.7,
    prepTime: "20 phút",
    cookTime: "15 phút",
    difficulty: "Trung bình",
    author: "Chef Lan",
  },
  {
    id: 10,
    title: "Gà Nướng Muối Ớt",
    image:
      "https://beptruong.edu.vn/wp-content/uploads/2021/03/ga-nuong-muoi-ot.jpg",
    description: "Gà nướng ướp muối ớt thơm nồng.",
    rating: 4.6,
    prepTime: "15 phút",
    cookTime: "45 phút",
    difficulty: "Trung bình",
    author: "Chef Dũng",
  },
  {
    id: 11,
    title: "Canh Chua Cá Lóc",
    image:
      "https://i-giadinh.vnecdn.net/2023/04/25/Thanh-pham-1-1-7239-1682395675.jpg",
    description: "Canh chua ngọt với cá lóc, đậu bắp, dứa và rau thơm.",
    rating: 4.5,
    prepTime: "20 phút",
    cookTime: "25 phút",
    difficulty: "Dễ",
    author: "Chef Mai",
  },
  {
    id: 12,
    title: "Bò Lúc Lắc",
    image:
      "https://hidafoods.vn/wp-content/uploads/2023/07/cach-lam-bo-luc-lac-thom-ngon-chuan-vi-nha-hang-1.jpg",
    description: "Thịt bò xào với hành tây, ớt chuông và xốt đậm đà.",
    rating: 4.7,
    prepTime: "15 phút",
    cookTime: "10 phút",
    difficulty: "Dễ",
    author: "Chef Tuấn",
  },
];

const RecipeList = () => {
  // Thêm hiệu ứng khi component xuất hiện
  useEffect(() => {
    const cards = document.querySelectorAll(".recipe-card");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 150); // Tạo hiệu ứng lần lượt xuất hiện
    });
  }, []);

  return (
    <div
      style={{
        position: "relative",
        padding: "40px 16px",
        overflow: "hidden",
        minHeight: "100vh",
        background: "#fcf9f6",
      }}
    >
      {/* Background gradient động */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 250,
          background: "linear-gradient(135deg, #ff9a44 0%, #ff6b35 100%)",
          zIndex: -1,
          borderBottomLeftRadius: "60% 40%",
          borderBottomRightRadius: "60% 40%",
          transform: "scaleX(1.2)",
        }}
      />

      {/* Các emoji nổi */}
      <FloatingEmoji
        size="52px"
        style={{ top: "40px", left: "10%" }}
        duration="7s"
        delay="1s"
      >
        🍲
      </FloatingEmoji>
      <FloatingEmoji
        size="48px"
        style={{ top: "80px", right: "15%" }}
        duration="8s"
        delay="0.5s"
      >
        🥗
      </FloatingEmoji>
      <FloatingEmoji
        size="42px"
        style={{ bottom: "120px", left: "12%" }}
        duration="6.5s"
        delay="2s"
      >
        🍜
      </FloatingEmoji>
      <FloatingEmoji
        size="46px"
        style={{ bottom: "150px", right: "10%" }}
        duration="7.5s"
        delay="1.5s"
      >
        🍳
      </FloatingEmoji>
      <FloatingEmoji
        size="40px"
        style={{ top: "150px", left: "30%" }}
        duration="8s"
        delay="0.8s"
      >
        🥕
      </FloatingEmoji>

      {/* Vòng tròn có hiệu ứng pulse */}
      <PulsingCircle
        size="320px"
        style={{ top: "-100px", right: "-100px" }}
        duration="10s"
      />
      <PulsingCircle
        size="280px"
        style={{ bottom: "-80px", left: "-80px" }}
        duration="12s"
        delay="2s"
      />
      <PulsingCircle
        size="220px"
        style={{ top: "30%", left: "10%" }}
        gradient="radial-gradient(circle, rgba(255,155,68,0.05) 0%, rgba(255,107,53,0.02) 70%, transparent 100%)"
        duration="14s"
        delay="1s"
      />

      {/* Tiêu đề có hiệu ứng lấp lánh */}
      <div
        style={{
          textAlign: "center",
          marginBottom: 40,
          marginTop: 30,
          position: "relative",
          zIndex: 5,
        }}
      >
        <ShimmerTitle>
          <Title
            level={2}
            style={{ margin: 0, color: "#ff6b35", fontSize: "36px" }}
          >
            Công Thức Nấu Ăn
          </Title>
        </ShimmerTitle>
        <div
          style={{
            margin: "8px auto",
            width: "80px",
            height: "3px",
            background:
              "linear-gradient(90deg, transparent, #ff9a44, #ff6b35, transparent)",
            borderRadius: "2px",
          }}
        />
      </div>

      {/* Container cho danh sách công thức */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          background: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(10px)",
          borderRadius: 20,
          padding: "32px 24px",
          boxShadow: "0 10px 30px rgba(255,107,53,0.1)",
          position: "relative",
          zIndex: 3,
        }}
      >
        <Row gutter={[30, 36]} justify="center">
          {recipes.map((recipe) => (
            <Col
              key={recipe.id}
              xs={24}
              sm={12}
              md={8}
              lg={6}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                className="recipe-card"
                style={{
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: "all 0.5s ease-out",
                }}
              >
                <RecipeCard recipe={recipe} description={recipe.description} />
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Thêm một vài hình trang trí đáy trang */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "5%",
          width: "90%",
          height: "3px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,107,53,0.2), transparent)",
          borderRadius: "50%",
          zIndex: -1,
        }}
      />
    </div>
  );
};

export default RecipeList;
