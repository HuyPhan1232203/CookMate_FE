// Predefined responses for cooking-related queries
export const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('công thức') || message.includes('cong thuc') || message.includes('recipe')) {
      return "🍳 Tôi có thể gợi ý một số công thức ngon! Bạn muốn nấu món gì? Món chính, món tráng miệng, hay đồ uống?";
    }
    
    if (message.includes('phở') || message.includes('pho')) {
      return "🍜 Phở là món ăn tuyệt vời! Để nấu phở ngon, bạn cần: thịt bò, bánh phở, hành tây, gừng, quế, hồi, đinh hương. Nước dùng cần ninh ít nhất 6-8 tiếng nhé!";
    }
    
    if (message.includes('cơm chiên') || message.includes('com chien')) {
      return "🍚 Cơm chiên ngon cần cơm nguội qua đêm, trứng, tỏi băm, nước mắm và dầu ăn. Bí quyết là lửa to, đảo nhanh tay!";
    }
    
    if (message.includes('bánh mì') || message.includes('banh mi')) {
      return "🥖 Bánh mì Việt Nam thần thánh! Cần bánh mì giòn, pate, thịt nguội, dưa chuột, ngò rau. Bạn thích bánh mì gì nhất?";
    }
    
    if (message.includes('salad') || message.includes('xa lách')) {
      return "🥗 Salad healthy và ngon! Tôi suggest: salad Caesar, salad Nicoise, hoặc salad trái cây. Bạn muốn công thức nào?";
    }
    
    if (message.includes('nguyên liệu') || message.includes('nguyen lieu') || message.includes('ingredient')) {
      return "🛒 Để tìm nguyên liệu thay thế hoặc gợi ý mua sắm, hãy cho tôi biết bạn đang định nấu món gì nhé!";
    }
    
    if (message.includes('thời gian') || message.includes('thoi gian') || message.includes('bao lâu')) {
      return "⏰ Thời gian nấu nướng rất quan trọng! Bạn đang hỏi về món gì? Tôi sẽ cho bạn biết thời gian chuẩn nhất.";
    }
    
    if (message.includes('calo') || message.includes('calories') || message.includes('dinh dưỡng')) {
      return "📊 Về dinh dưỡng và calories, tôi có thể tư vấn! Bạn đang quan tâm đến món ăn nào cụ thể?";
    }
    
    if (message.includes('chào') || message.includes('hello') || message.includes('hi')) {
      return "👋 Chào bạn! Rất vui được hỗ trợ bạn về nấu ăn. Bạn muốn học món gì hôm nay?";
    }
    
    if (message.includes('cảm ơn') || message.includes('cam on') || message.includes('thanks')) {
      return "😊 Không có gì! Tôi luôn sẵn sàng giúp bạn khám phá thế giới ẩm thực. Còn câu hỏi nào khác không?";
    }
    
    if (message.includes('làm') || message.includes('lam') || message.includes('how to')) {
      return "👨‍🍳 Tôi sẽ hướng dẫn bạn từng bước! Bạn muốn học làm món gì? Cứ nói tên món ăn, tôi sẽ chỉ cách làm chi tiết.";
    }
    
    // Default response
    return "🤔 Hmm, tôi chưa hiểu rõ câu hỏi của bạn. Bạn có thể hỏi tôi về:\n• Công thức nấu ăn\n• Nguyên liệu và cách thay thế\n• Thời gian nấu nướng\n• Giá trị dinh dưỡng\n• Gợi ý món ăn\n\nHãy thử hỏi cụ thể hơn nhé!";
  };
  
  // Format timestamp
  export const formatTime = (date) => {
    return date.toLocaleTimeString('vi-VN', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };
  
  // Generate chat title from messages
  export const generateChatTitle = (messages) => {
    const userMessages = messages.filter(msg => !msg.isBot);
    if (userMessages.length > 0) {
      const firstUserMessage = userMessages[0].text;
      return firstUserMessage.length > 30 
        ? firstUserMessage.substring(0, 30) + '...'
        : firstUserMessage;
    }
    return `Cuộc trò chuyện ${new Date().toLocaleDateString('vi-VN')}`;
  };
  
  // Default welcome message
  export const getWelcomeMessage = () => ({
    id: 1,
    text: "Xin chào! Tôi là CookBot, trợ lý nấu ăn của bạn. Tôi có thể giúp bạn tìm công thức, gợi ý món ăn, hoặc trả lời câu hỏi về nấu nướng. Bạn cần hỗ trợ gì?",
    isBot: true,
    timestamp: new Date()
  });
  
  // Chat history storage keys
  export const STORAGE_KEYS = {
    CHAT_HISTORY: 'cookbot-chat-history'
  };
  
  // Chat history limit
  export const CHAT_HISTORY_LIMIT = 10;