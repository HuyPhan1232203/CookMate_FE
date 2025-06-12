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


const HomePage = () => {
  const [form] = Form.useForm();

  const handleEmailSubmit = (values) => {
    console.log("Email subscription:", values);
    form.resetFields();
  };

  return (
    <div>
      {/* Welcome Message for logged in users */}
      <div style={{ padding: '0 20px', maxWidth: '1200px', margin: '20px auto 0' }}>
        <WelcomeMessage />
      </div>
      
      {/* HeroSection - Inline */}
      <HeroSection />
      {/* IngredientsInput Section - Inline */}
      <IngredientsSection />
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
