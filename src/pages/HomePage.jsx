import {
  CallToActionSection,
  FeaturesSection,
  HeroSection,
  IngredientsSection,
  RecipesShowcase,
  TestimonialsSection,
} from "@/components/HomePage";
import WelcomeMessage from "@/components/WelcomeMessage";

import "@/styles/animation.css";
import { Card, Form, Typography } from "antd";
import ChatBotPage from "./ChatBotPage";
import { useRef } from "react";

const HomePage = () => {
  const [form] = Form.useForm();
  const ingredientsRef = useRef(null);

  const handleEmailSubmit = (values) => {
    console.log("Email subscription:", values);
    form.resetFields();
  };

  const handleScrollToIngredients = () => {
    ingredientsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div
        style={{ padding: "0 20px", maxWidth: "1200px", margin: "20px auto 0" }}
      >
        <WelcomeMessage />
      </div>

      {/* HeroSection - Inline */}
      <HeroSection onFindRecipesClick={handleScrollToIngredients} />
      {/* IngredientsInput Section - Inline */}
      <div ref={ingredientsRef}>
        <IngredientsSection />
      </div>
      {/* FeaturesSection - Inline */}
      <FeaturesSection />
      {/* RecipeShowcase - Inline */}
      <RecipesShowcase />
      {/* TestimonialsSection - Inline */}
      <TestimonialsSection />
      {/* CallToActionSection - Inline */}
      <CallToActionSection handleEmailSubmit={handleEmailSubmit} form={form} />

      {/* ChatBot */}
      <ChatBotPage />
    </div>
  );
};

export default HomePage;
