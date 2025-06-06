// Mock users for testing login
export const MOCK_USERS = [
  {
    id: 1,
    email: 'admin@cookmate.com',
    password: '123456',
    fullName: 'Admin CookMate',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    verified: true,
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 2,
    email: 'user@cookmate.com',
    password: '123456',
    fullName: 'Nguyễn Văn An',
    role: 'user',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    verified: true,
    createdAt: '2024-01-15T00:00:00Z'
  },
  {
    id: 3,
    email: 'chef@cookmate.com',
    password: 'chef123',
    fullName: 'Bếp trưởng Minh',
    role: 'chef',
    avatar: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=100',
    verified: true,
    createdAt: '2024-02-01T00:00:00Z'
  },
  {
    id: 4,
    email: 'demo@cookmate.com',
    password: 'demo123',
    fullName: 'Demo User',
    role: 'user',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100',
    verified: false,
    createdAt: '2024-03-01T00:00:00Z'
  },
  {
    id: 5,
    email: 'test@cookmate.com',
    password: 'test123',
    fullName: 'Người Test',
    role: 'user',
    avatar: null,
    verified: true,
    createdAt: '2024-03-15T00:00:00Z'
  }
];

// Mock login function
export const mockLogin = async (email, password) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Find user by email
  const user = MOCK_USERS.find(u => u.email === email);
  
  if (!user) {
    throw new Error('Email không tồn tại trong hệ thống');
  }
  
  if (user.password !== password) {
    throw new Error('Mật khẩu không chính xác');
  }
  
  // Return user info (without password)
  const { password: _, ...userInfo } = user;
  return {
    success: true,
    user: userInfo,
    token: `mock_token_${user.id}_${Date.now()}`,
    message: 'Đăng nhập thành công!'
  };
};

// Mock register function
export const mockRegister = async (userData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1200));
  
  // Check if email already exists
  const existingUser = MOCK_USERS.find(u => u.email === userData.email);
  
  if (existingUser) {
    throw new Error('Email này đã được đăng ký');
  }
  
  // Create new user
  const newUser = {
    id: MOCK_USERS.length + 1,
    email: userData.email,
    fullName: userData.fullName,
    role: 'user',
    avatar: null,
    verified: false,
    createdAt: new Date().toISOString()
  };
  
  // Add to mock users (in real app, this would be saved to database)
  MOCK_USERS.push({ ...newUser, password: userData.password });
  
  return {
    success: true,
    user: newUser,
    token: `mock_token_${newUser.id}_${Date.now()}`,
    message: 'Đăng ký thành công!'
  };
};

// Mock forgot password function
export const mockForgotPassword = async (email) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Check if email exists
  const user = MOCK_USERS.find(u => u.email === email);
  
  if (!user) {
    throw new Error('Email không tồn tại trong hệ thống');
  }
  
  return {
    success: true,
    message: 'Email hướng dẫn đặt lại mật khẩu đã được gửi!'
  };
};

// Test accounts info for display
export const TEST_ACCOUNTS = [
  {
    email: 'admin@cookmate.com',
    password: '123456',
    role: 'Admin',
    description: 'Tài khoản quản trị viên'
  },
  {
    email: 'user@cookmate.com',
    password: '123456',
    role: 'User',
    description: 'Tài khoản người dùng thường'
  },
  {
    email: 'chef@cookmate.com',
    password: 'chef123',
    role: 'Chef',
    description: 'Tài khoản bếp trưởng'
  },
  {
    email: 'demo@cookmate.com',
    password: 'demo123',
    role: 'Demo',
    description: 'Tài khoản demo (chưa xác thực)'
  }
]; 