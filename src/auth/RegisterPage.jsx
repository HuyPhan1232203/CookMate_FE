import React, { useState } from 'react';
import { 
  Button, 
  Form, 
  Input, 
  Card, 
  Typography, 
  Space, 
  Divider, 
  Checkbox,
  message 
} from 'antd';
import { 
  UserOutlined, 
  LockOutlined, 
  MailOutlined,
  GoogleOutlined, 
  FacebookOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { APP_CONTENT } from '@constants/content';
import axios from 'axios';
import '@/styles/animation.css';

const { Title, Text } = Typography;

const RegisterPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (values) => {
    try {
      setLoading(true);
      
      const userData = {
        name: values.name,
        email: values.email,
        password: values.password
      };
      
      // Temporary mock registration when backend is not available
      try {
        // Try real API first
        const response = await axios.post('/api/user/register', userData);
        
        // Handle successful registration
        if (response.data && response.status === 200) {
          localStorage.setItem('user', JSON.stringify(response.data.user || { name: values.name, email: values.email }));
          localStorage.setItem('token', response.data.token || 'temp-token');
          localStorage.setItem('isAuthenticated', 'true');
          
          message.success(`Chào mừng ${response.data.user?.name || values.name} đến với CookMate!`);
          navigate('/');
        } else {
          message.error('Đăng ký thất bại!');
        }
      } catch (apiError) {
        // If API is not available (404), use mock registration
        if (apiError.response?.status === 404) {
          console.log('Backend not available, using mock registration');
          
          // Simulate API delay
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Mock successful registration
          const mockUser = {
            id: Date.now(),
            name: values.name,
            email: values.email,
            createdAt: new Date().toISOString()
          };
          
          localStorage.setItem('user', JSON.stringify(mockUser));
          localStorage.setItem('token', 'mock-token-' + Date.now());
          localStorage.setItem('isAuthenticated', 'true');
          
          message.success(`Chào mừng ${values.name} đến với CookMate! (Mock Mode)`);
          navigate('/');
        } else {
          throw apiError; // Re-throw other errors
        }
      }
    } catch (error) {
      console.error('Registration error:', error);
      if (error.response?.data?.message) {
        message.error(error.response.data.message);
      } else if (error.response?.status === 409) {
        message.error('Email này đã được sử dụng!');
      } else if (error.response?.status === 400) {
        message.error('Thông tin đăng ký không hợp lệ!');
      } else if (error.code === 'ECONNREFUSED') {
        message.error('Không thể kết nối đến server. Vui lòng kiểm tra server có đang chạy tại localhost:3000');
      } else {
        message.error('Có lỗi xảy ra trong quá trình đăng ký. Vui lòng thử lại!');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    message.info(`Đăng ký với ${provider} sẽ được triển khai sớm!`);
  };

  return (
    <div 
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 50%, #ffa726 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.05,
        }}
      />

      {/* 3D Floating Cooking Icons */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          pointerEvents: 'none'
        }}
      >
        {/* Pizza - top center */}
        <div
          style={{
            position: 'absolute',
            top: '8%',
            left: '18%',
            fontSize: '75px',
            opacity: 0.34,
            transform: 'rotate(-20deg)',
            filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))',
          }}
          className="float-animation-1"
        >
          🍕
        </div>

        {/* Cooking pot - top right */}
        <div
          style={{
            position: 'absolute',
            top: '12%',
            right: '12%',
            fontSize: '65px',
            opacity: 0.31,
            transform: 'rotate(25deg)',
            filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.25))',
          }}
          className="float-animation-2"
        >
          🥘
        </div>

        {/* Avocado - left middle */}
        <div
          style={{
            position: 'absolute',
            top: '32%',
            left: '6%',
            fontSize: '42px',
            opacity: 0.27,
            transform: 'rotate(-35deg)',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
          }}
          className="float-animation-3"
        >
          🥑
        </div>

        {/* Hamburger - right middle */}
        <div
          style={{
            position: 'absolute',
            top: '38%',
            right: '7%',
            fontSize: '50px',
            opacity: 0.29,
            transform: 'rotate(40deg)',
            filter: 'drop-shadow(0 5px 10px rgba(0,0,0,0.25))',
          }}
          className="float-animation-4"
        >
          🍔
        </div>

        {/* Egg - bottom left */}
        <div
          style={{
            position: 'absolute',
            bottom: '28%',
            left: '10%',
            fontSize: '38px',
            opacity: 0.23,
            transform: 'rotate(-12deg)',
            filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.2))',
          }}
          className="float-animation-5"
        >
          🥚
        </div>

        {/* Croissant - bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom: '22%',
            right: '13%',
            fontSize: '36px',
            opacity: 0.25,
            transform: 'rotate(28deg)',
            filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.2))',
          }}
          className="float-animation-6"
        >
          🥐
        </div>

        {/* Grapes - top left */}
        <div
          style={{
            position: 'absolute',
            top: '22%',
            left: '22%',
            fontSize: '28px',
            opacity: 0.19,
            transform: 'rotate(-50deg)',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))',
          }}
          className="float-animation-7"
        >
          🍇
        </div>

        {/* Cake - middle right */}
        <div
          style={{
            position: 'absolute',
            top: '58%',
            right: '18%',
            fontSize: '40px',
            opacity: 0.28,
            transform: 'rotate(18deg)',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
          }}
          className="float-animation-8"
        >
          🍰
        </div>

        {/* Apple - bottom center */}
        <div
          style={{
            position: 'absolute',
            bottom: '18%',
            left: '42%',
            fontSize: '34px',
            opacity: 0.21,
            transform: 'rotate(-25deg)',
            filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.15))',
          }}
          className="float-animation-9"
        >
          🍎
        </div>

        {/* Wine glass - middle left */}
        <div
          style={{
            position: 'absolute',
            top: '52%',
            left: '9%',
            fontSize: '33px',
            opacity: 0.22,
            transform: 'rotate(55deg)',
            filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.18))',
          }}
          className="float-animation-10"
        >
          🍷
        </div>
      </div>
      
      <div 
        style={{
          width: '100%',
          maxWidth: '450px',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Logo and Welcome */}
        <div 
          style={{
            textAlign: 'center',
            marginBottom: '32px'
          }}
          className="animate-fadeInUp"
        >
          <div 
            style={{
              fontSize: '3rem',
              marginBottom: '16px'
            }}
          >
            🍳
          </div>
          <Title 
            level={2} 
            style={{
              color: 'white',
              marginBottom: '8px',
              fontWeight: 'bold',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Tham gia {APP_CONTENT.APP_NAME}!
          </Title>
          <Text 
            style={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: '16px',
              textShadow: '0 1px 2px rgba(0,0,0,0.3)'
            }}
          >
            Tạo tài khoản để bắt đầu hành trình nấu ăn tuyệt vời
          </Text>
        </div>

        {/* Register Form */}
        <Card
          style={{
            borderRadius: '16px',
            boxShadow: '0 20px 40px rgba(255, 107, 53, 0.15)',
            border: 'none'
          }}
          className="animate-fadeInUp animate-delay-1"
        >
          <Form
            form={form}
            name="register"
            onFinish={handleRegister}
            layout="vertical"
            size="large"
          >
            <Form.Item
              name="name"
              label="Tên"
              rules={[
                { required: true, message: 'Vui lòng nhập tên!' },
                { min: 2, message: 'Tên phải có ít nhất 2 ký tự!' }
              ]}
            >
              <Input
                prefix={<UserOutlined style={{ color: '#ff6b35' }} />}
                placeholder="Nhập tên của bạn"
                style={{ borderRadius: '8px' }}
              />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Vui lòng nhập email!' },
                { type: 'email', message: 'Email không hợp lệ!' }
              ]}
            >
              <Input
                prefix={<MailOutlined style={{ color: '#ff6b35' }} />}
                placeholder="Nhập email của bạn"
                style={{ borderRadius: '8px' }}
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Mật khẩu"
              rules={[
                { required: true, message: 'Vui lòng nhập mật khẩu!' },
                { min: 6, message: 'Mật khẩu phải có ít nhất 6 ký tự!' }
              ]}
            >
              <Input.Password
                prefix={<LockOutlined style={{ color: '#ff6b35' }} />}
                placeholder="Tạo mật khẩu"
                style={{ borderRadius: '8px' }}
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject(new Error('Vui lòng đồng ý với điều khoản!')),
                },
              ]}
            >
              <Checkbox>
                Tôi đồng ý với{' '}
                <Link to="/terms" style={{ color: '#ff6b35' }}>
                  Điều khoản sử dụng
                </Link>
                {' '}và{' '}
                <Link to="/privacy" style={{ color: '#ff6b35' }}>
                  Chính sách bảo mật
                </Link>
              </Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                block
                style={{
                  height: '48px',
                  borderRadius: '8px',
                  background: '#ff6b35',
                  borderColor: '#ff6b35',
                  fontSize: '16px',
                  fontWeight: '600'
                }}
              >
                {loading ? 'Đang tạo tài khoản...' : 'Tạo tài khoản'}
              </Button>
            </Form.Item>

            

            <div 
              style={{
                textAlign: 'center',
                marginTop: '24px'
              }}
            >
              <Text style={{ color: '#666' }}>
                Đã có tài khoản?{' '}
                <Link 
                  to="/login"
                  style={{ 
                    color: '#ff6b35',
                    fontWeight: '600'
                  }}
                >
                  Đăng nhập ngay
                </Link>
              </Text>
            </div>
          </Form>
        </Card>

      </div>

      <style>{`
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease forwards;
        }
        
        .animate-delay-1 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animate-delay-2 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* 3D Floating Animations */
        .float-animation-1 {
          animation: float3d-1 6s ease-in-out infinite;
        }
        .float-animation-2 {
          animation: float3d-2 5s ease-in-out infinite;
        }
        .float-animation-3 {
          animation: float3d-3 7s ease-in-out infinite;
        }
        .float-animation-4 {
          animation: float3d-4 5.5s ease-in-out infinite;
        }
        .float-animation-5 {
          animation: float3d-5 6.5s ease-in-out infinite;
        }
        .float-animation-6 {
          animation: float3d-6 4.5s ease-in-out infinite;
        }
        .float-animation-7 {
          animation: float3d-7 7.5s ease-in-out infinite;
        }
        .float-animation-8 {
          animation: float3d-8 5.8s ease-in-out infinite;
        }
        .float-animation-9 {
          animation: float3d-9 6.2s ease-in-out infinite;
        }
        .float-animation-10 {
          animation: float3d-10 4.8s ease-in-out infinite;
        }

        @keyframes float3d-1 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(-20deg) scale(1);
          }
          25% { 
            transform: translateY(-18px) translateX(8px) rotate(-15deg) scale(1.06);
          }
          50% { 
            transform: translateY(-28px) translateX(3px) rotate(-25deg) scale(1.12);
          }
          75% { 
            transform: translateY(-12px) translateX(-6px) rotate(-20deg) scale(1.04);
          }
        }

        @keyframes float3d-2 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(25deg) scale(1);
          }
          33% { 
            transform: translateY(-22px) translateX(-9px) rotate(30deg) scale(1.09);
          }
          66% { 
            transform: translateY(-32px) translateX(7px) rotate(20deg) scale(1.16);
          }
        }

        @keyframes float3d-3 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(-35deg) scale(1);
          }
          50% { 
            transform: translateY(-20px) translateX(12px) rotate(-40deg) scale(1.14);
          }
        }

        @keyframes float3d-4 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(40deg) scale(1);
          }
          40% { 
            transform: translateY(-25px) translateX(-8px) rotate(45deg) scale(1.1);
          }
          80% { 
            transform: translateY(-15px) translateX(10px) rotate(35deg) scale(1.06);
          }
        }

        @keyframes float3d-5 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(-12deg) scale(1);
          }
          30% { 
            transform: translateY(-18px) translateX(6px) rotate(-7deg) scale(1.07);
          }
          70% { 
            transform: translateY(-26px) translateX(-4px) rotate(-17deg) scale(1.11);
          }
        }

        @keyframes float3d-6 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(28deg) scale(1);
          }
          50% { 
            transform: translateY(-16px) translateX(9px) rotate(33deg) scale(1.1);
          }
        }

        @keyframes float3d-7 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(-50deg) scale(1);
          }
          25% { 
            transform: translateY(-14px) translateX(-5px) rotate(-55deg) scale(1.05);
          }
          75% { 
            transform: translateY(-22px) translateX(8px) rotate(-45deg) scale(1.09);
          }
        }

        @keyframes float3d-8 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(18deg) scale(1);
          }
          35% { 
            transform: translateY(-21px) translateX(-7px) rotate(23deg) scale(1.08);
          }
          65% { 
            transform: translateY(-29px) translateX(10px) rotate(13deg) scale(1.13);
          }
        }

        @keyframes float3d-9 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(-25deg) scale(1);
          }
          45% { 
            transform: translateY(-19px) translateX(11px) rotate(-30deg) scale(1.07);
          }
        }

        @keyframes float3d-10 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(55deg) scale(1);
          }
          33% { 
            transform: translateY(-23px) translateX(-9px) rotate(60deg) scale(1.1);
          }
          67% { 
            transform: translateY(-15px) translateX(6px) rotate(50deg) scale(1.06);
          }
        }

        /* Hover effects */
        .ant-btn:not(.ant-btn-primary):hover {
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }

        .ant-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4) !important;
        }

        /* Input focus effects */
        .ant-input:focus,
        .ant-input-focused {
          border-color: #ff6b35 !important;
          box-shadow: 0 0 0 2px rgba(255, 107, 53, 0.2) !important;
        }

        .ant-input-affix-wrapper:focus,
        .ant-input-affix-wrapper-focused {
          border-color: #ff6b35 !important;
          box-shadow: 0 0 0 2px rgba(255, 107, 53, 0.2) !important;
        }

        /* Checkbox hover */
        .ant-checkbox-wrapper:hover .ant-checkbox-inner {
          border-color: #ff6b35 !important;
        }

        .ant-checkbox-checked .ant-checkbox-inner {
          background-color: #ff6b35 !important;
          border-color: #ff6b35 !important;
        }

        /* Mobile responsive */
        @media (max-width: 576px) {
          .ant-card {
            margin: 0 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default RegisterPage; 