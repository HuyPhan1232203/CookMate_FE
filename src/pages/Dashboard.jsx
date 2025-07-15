import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaUser } from "react-icons/fa";

const COLORS = [
  "#FFB6B9",
  "#FFD700",
  "#90EE90",
  "#ADD8E6",
  "#DDA0DD",
  "#FFA07A",
  "#87CEFA",
  "#FF69B4",
  "#98FB98",
  "#FFA500",
];

const ingredientData = [
  { name: "Trứng", value: 26 },
  { name: "Thịt gà", value: 19 },
  { name: "Cà chua", value: 15 },
  { name: "Rau cải", value: 15 },
  { name: "Hành lá", value: 15 },
  { name: "Tỏi", value: 11 },
  { name: "Thịt bò", value: 10 },
  { name: "Ớt", value: 9 },
  { name: "Khoai tây", value: 8 },
  { name: "Nấm", value: 7 },
];

const recipeData = [
  { name: "Cơm chiên", views: 120 },
  { name: "Canh chua", views: 110 },
  { name: "Gà kho", views: 100 },
  { name: "Bò xào", views: 90 },
  { name: "Trứng luộc", views: 80 },
  { name: "Mì xào", views: 75 },
  { name: "Súp cua", views: 70 },
  { name: "Bánh mì trứng", views: 65 },
  { name: "Canh bí đỏ", views: 60 },
  { name: "Bún riêu", views: 55 },
];

const searchData = Array.from({ length: 29 }, (_, i) => ({
  day: i + 1,
  count: Math.floor(300 + Math.sin(i / 3) * 150),
}));

function Dashboard() {
  return (
    <div
      style={{
        padding: "2rem",
        background: "#FFA733",
        minHeight: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "0.5rem", 
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "1rem 1.5rem",
              background: "linear-gradient(to right, #FFD59E, #FFE8C3)",
              borderRadius: "1rem",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              width: "240px",
            }}
          >
            <div
              style={{
                backgroundColor: "#FFF",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "1rem",
              }}
            >
              <FaUser size={24} color="#777" />
            </div>
            <div>
              <p style={{ margin: 0, fontSize: "14px", color: "#333" }}>Users</p>
              <p style={{ margin: 0, fontSize: "24px", fontWeight: "bold", color: "#000" }}>20</p>
            </div>
          </div>

          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "#fff",
                textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
              }}
            >
              Top 10 nguyên liệu được chọn nhiều nhất
            </h3>
            <PieChart width={320} height={360}>
              <Pie
                data={ingredientData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={5}
                dataKey="value"
              >
                {ingredientData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </div>

        <div style={{ flex: "1.2", minWidth: "400px" }}>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "#fff",
              textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
            }}
          >
            Top 10 công thức được xem nhiều nhất
          </h3>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              backgroundColor: "#FFA733",
            }}
          >
            <thead>
              <tr style={{ textAlign: "left", borderBottom: "2px solid #444", color: "#fff" }}>
                <th style={{ padding: "0.5rem" }}>Top</th>
                <th style={{ padding: "0.5rem" }}>Tên món</th>
                <th style={{ padding: "0.5rem" }}>Lượt tìm kiếm</th>
              </tr>
            </thead>
            <tbody>
              {recipeData.map((recipe, index) => (
                <tr key={index} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "0.5rem", color: "#fff", fontWeight: "bold" }}>
                    {index + 1}
                  </td>
                  <td style={{ padding: "0.5rem", color: "#fff" }}>{recipe.name}</td>
                  <td style={{ padding: "0.5rem", color: "#fff" }}>{recipe.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: "1rem",
            color: "#fff",
            textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
          }}
        >
          Số lượt tìm kiếm món ăn theo ngày
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={searchData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="count" stroke="#FF8C00" fill="#FFD580" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Dashboard;
