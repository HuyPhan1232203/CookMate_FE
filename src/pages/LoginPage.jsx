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
  GoogleOutlined, 
  FacebookOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { APP_CONTENT } from '@constants/content';
import { mockLogin, TEST_ACCOUNTS } from '@/data/mockUsers';
import '@/styles/animation.css';

const { Title, Text } = Typography;

const LoginPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    try {
      setLoading(true);
      
      const result = await mockLogin(values.email, values.password);
      
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify(result.user));
      localStorage.setItem('token', result.token);
      localStorage.setItem('isAuthenticated', 'true');
      
      message.success(`Chào mừng ${result.user.fullName}!`);
      navigate('/');
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    message.info(`Đăng nhập với ${provider} sẽ được triển khai sớm!`);
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
        {/* Main cooking pot - top center */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '15%',
            fontSize: '80px',
            opacity: 0.35,
            transform: 'rotate(-15deg)',
            filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))',
          }}
          className="float-animation-1"
        >
          🍳
        </div>

        {/* Chef hat - top right */}
        <div
          style={{
            position: 'absolute',
            top: '15%',
            right: '10%',
            fontSize: '60px',
            opacity: 0.3,
            transform: 'rotate(20deg)',
            filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.25))',
          }}
          className="float-animation-2"
        >
          👨‍🍳
        </div>

        {/* Vegetables - left middle */}
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '5%',
            fontSize: '45px',
            opacity: 0.25,
            transform: 'rotate(-30deg)',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
          }}
          className="float-animation-3"
        >
          🥕
        </div>

        {/* Cooking pot - right middle */}
        <div
          style={{
            position: 'absolute',
            top: '35%',
            right: '8%',
            fontSize: '55px',
            opacity: 0.32,
            transform: 'rotate(45deg)',
            filter: 'drop-shadow(0 5px 10px rgba(0,0,0,0.25))',
          }}
          className="float-animation-4"
        >
          🍲
        </div>

        {/* Knife and fork - bottom left */}
        <div
          style={{
            position: 'absolute',
            bottom: '25%',
            left: '12%',
            fontSize: '40px',
            opacity: 0.22,
            transform: 'rotate(-10deg)',
            filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.2))',
          }}
          className="float-animation-5"
        >
          🍴
        </div>

        {/* Bread - bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '15%',
            fontSize: '35px',
            opacity: 0.28,
            transform: 'rotate(25deg)',
            filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.2))',
          }}
          className="float-animation-6"
        >
          🍞
        </div>

        {/* Salt shaker - top left */}
        <div
          style={{
            position: 'absolute',
            top: '25%',
            left: '20%',
            fontSize: '30px',
            opacity: 0.2,
            transform: 'rotate(-45deg)',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))',
          }}
          className="float-animation-7"
        >
          🧂
        </div>

        {/* Tomato - middle right */}
        <div
          style={{
            position: 'absolute',
            top: '55%',
            right: '20%',
            fontSize: '38px',
            opacity: 0.26,
            transform: 'rotate(15deg)',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
          }}
          className="float-animation-8"
        >
          🍅
        </div>

        {/* Onion - bottom center */}
        <div
          style={{
            position: 'absolute',
            bottom: '15%',
            left: '45%',
            fontSize: '32px',
            opacity: 0.18,
            transform: 'rotate(-20deg)',
            filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.15))',
          }}
          className="float-animation-9"
        >
          🧅
        </div>

        {/* Spoon - middle left */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '8%',
            fontSize: '35px',
            opacity: 0.24,
            transform: 'rotate(60deg)',
            filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.18))',
          }}
          className="float-animation-10"
        >
          🥄
        </div>
      </div>
      
      <div 
        style={{
          width: '100%',
          maxWidth: '400px',
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
            Chào mừng trở lại!
          </Title>
          <Text 
            style={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: '16px',
              textShadow: '0 1px 2px rgba(0,0,0,0.3)'
            }}
          >
            Đăng nhập để tiếp tục hành trình nấu ăn với {APP_CONTENT.APP_NAME}
          </Text>
        </div>

        {/* Login Form */}
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
            name="login"
            onFinish={handleLogin}
            layout="vertical"
            size="large"
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Vui lòng nhập email!' },
                { type: 'email', message: 'Email không hợp lệ!' }
              ]}
            >
              <Input
                prefix={<UserOutlined style={{ color: '#ff6b35' }} />}
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
                placeholder="Nhập mật khẩu của bạn"
                style={{ borderRadius: '8px' }}
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
            </Form.Item>

            <Form.Item>
              <div 
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Ghi nhớ đăng nhập</Checkbox>
                </Form.Item>
                <Link 
                  to="/forgot-password"
                  style={{ color: '#ff6b35' }}
                >
                  Quên mật khẩu?
                </Link>
              </div>
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
                {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
              </Button>
            </Form.Item>

            {/* Test Accounts */}
            <div 
              style={{
                marginTop: '20px',
                padding: '16px',
                backgroundColor: '#fafafa',
                borderRadius: '8px',
                border: '1px solid #e8e8e8'
              }}
            >
              <Text 
                style={{ 
                  color: '#666', 
                  fontSize: '14px', 
                  fontWeight: 'bold',
                  display: 'block',
                  marginBottom: '12px'
                }}
              >
                🧪 Tài khoản test (click để điền tự động):
              </Text>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {TEST_ACCOUNTS.map((account, index) => (
                  <div 
                    key={index}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '8px 12px',
                      backgroundColor: '#fff',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      border: '1px solid #e8e8e8',
                      transition: 'all 0.2s ease'
                    }}
                    onClick={() => {
                      form.setFieldsValue({
                        email: account.email,
                        password: account.password
                      });
                      message.info(`Đã điền tài khoản ${account.role}`);
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#f0f0f0';
                      e.currentTarget.style.borderColor = '#ff6b35';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#fff';
                      e.currentTarget.style.borderColor = '#e8e8e8';
                    }}
                  >
                    <div>
                      <Text style={{ color: '#333', fontSize: '12px', fontWeight: 'bold' }}>
                        {account.email}
                      </Text>
                      <br />
                      <Text style={{ color: '#666', fontSize: '11px' }}>
                        {account.description}
                      </Text>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <Text style={{ color: '#ff6b35', fontSize: '11px', fontWeight: 'bold' }}>
                        {account.role}
                      </Text>
                      <br />
                      <Text style={{ color: '#999', fontSize: '10px', fontFamily: 'monospace' }}>
                        {account.password}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div 
              style={{
                textAlign: 'center',
                marginTop: '24px'
              }}
            >
              <Text style={{ color: '#666' }}>
                Chưa có tài khoản?{' '}
                <Link 
                  to="/register"
                  style={{ 
                    color: '#ff6b35',
                    fontWeight: '600'
                  }}
                >
                  Đăng ký ngay
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
            transform: translateY(0px) translateX(0px) rotate(-15deg) scale(1);
          }
          25% { 
            transform: translateY(-15px) translateX(5px) rotate(-10deg) scale(1.05);
          }
          50% { 
            transform: translateY(-25px) translateX(0px) rotate(-20deg) scale(1.1);
          }
          75% { 
            transform: translateY(-10px) translateX(-5px) rotate(-15deg) scale(1.05);
          }
        }

        @keyframes float3d-2 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(20deg) scale(1);
          }
          33% { 
            transform: translateY(-20px) translateX(-8px) rotate(25deg) scale(1.08);
          }
          66% { 
            transform: translateY(-30px) translateX(5px) rotate(15deg) scale(1.15);
          }
        }

        @keyframes float3d-3 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(-30deg) scale(1);
          }
          50% { 
            transform: translateY(-18px) translateX(10px) rotate(-35deg) scale(1.12);
          }
        }

        @keyframes float3d-4 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(45deg) scale(1);
          }
          40% { 
            transform: translateY(-22px) translateX(-6px) rotate(50deg) scale(1.08);
          }
          80% { 
            transform: translateY(-12px) translateX(8px) rotate(40deg) scale(1.05);
          }
        }

        @keyframes float3d-5 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(-10deg) scale(1);
          }
          30% { 
            transform: translateY(-16px) translateX(4px) rotate(-5deg) scale(1.06);
          }
          70% { 
            transform: translateY(-24px) translateX(-3px) rotate(-15deg) scale(1.1);
          }
        }

        @keyframes float3d-6 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(25deg) scale(1);
          }
          50% { 
            transform: translateY(-14px) translateX(7px) rotate(30deg) scale(1.09);
          }
        }

        @keyframes float3d-7 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(-45deg) scale(1);
          }
          25% { 
            transform: translateY(-12px) translateX(-4px) rotate(-50deg) scale(1.04);
          }
          75% { 
            transform: translateY(-20px) translateX(6px) rotate(-40deg) scale(1.08);
          }
        }

        @keyframes float3d-8 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(15deg) scale(1);
          }
          35% { 
            transform: translateY(-19px) translateX(-5px) rotate(20deg) scale(1.07);
          }
          65% { 
            transform: translateY(-26px) translateX(8px) rotate(10deg) scale(1.11);
          }
        }

        @keyframes float3d-9 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(-20deg) scale(1);
          }
          45% { 
            transform: translateY(-17px) translateX(9px) rotate(-25deg) scale(1.06);
          }
        }

        @keyframes float3d-10 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(60deg) scale(1);
          }
          33% { 
            transform: translateY(-21px) translateX(-7px) rotate(65deg) scale(1.09);
          }
          67% { 
            transform: translateY(-13px) translateX(4px) rotate(55deg) scale(1.05);
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

export default LoginPage; 