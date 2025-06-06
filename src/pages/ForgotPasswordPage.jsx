import React, { useState } from 'react';
import { 
  Button, 
  Form, 
  Input, 
  Card, 
  Typography, 
  message,
  Result
} from 'antd';
import { 
  MailOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { APP_CONTENT } from '@constants/content';
import { mockForgotPassword } from '@/data/mockUsers';
import '@/styles/animation.css';

const { Title, Text, Paragraph } = Typography;

const ForgotPasswordPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState('');

  const handleForgotPassword = async (values) => {
    try {
      setLoading(true);
      
      const result = await mockForgotPassword(values.email);
      
      setEmail(values.email);
      setEmailSent(true);
      message.success(result.message);
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResendEmail = () => {
    message.info('Email đã được gửi lại!');
  };

  if (emailSent) {
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
        <div 
          style={{
            width: '100%',
            maxWidth: '500px',
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
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              opacity: 0.1,
            }}
          />
          
          <Card
            style={{
              borderRadius: '16px',
              boxShadow: '0 20px 40px rgba(255, 107, 53, 0.15)',
              border: 'none',
              textAlign: 'center',
              position: 'relative',
              zIndex: 1
            }}
            className="animate-fadeInUp"
          >
            <Result
              status="success"
              title="Email đã được gửi!"
              subTitle={
                <div>
                  <Paragraph style={{ fontSize: '16px', color: '#666' }}>
                    Chúng tôi đã gửi hướng dẫn đặt lại mật khẩu đến địa chỉ email:
                  </Paragraph>
                  <Text strong style={{ fontSize: '16px', color: '#ff6b35' }}>
                    {email}
                  </Text>
                  <Paragraph style={{ fontSize: '14px', color: '#999', marginTop: '16px' }}>
                    Vui lòng kiểm tra hộp thư đến (có thể cả thư mục spam) và làm theo hướng dẫn để đặt lại mật khẩu.
                  </Paragraph>
                </div>
              }
              extra={[
                <Button 
                  key="resend" 
                  style={{ marginRight: '8px' }}
                  onClick={handleResendEmail}
                >
                  Gửi lại email
                </Button>,
                <Button 
                  key="login" 
                  type="primary"
                  style={{
                    background: '#ff6b35',
                    borderColor: '#ff6b35'
                  }}
                >
                  <Link to="/login" style={{ color: 'white' }}>
                    Quay lại đăng nhập
                  </Link>
                </Button>
              ]}
            />
          </Card>
        </div>
      </div>
    );
  }

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
        {/* Coffee - top left */}
        <div
          style={{
            position: 'absolute',
            top: '15%',
            left: '10%',
            fontSize: '60px',
            opacity: 0.3,
            transform: 'rotate(-18deg)',
            filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.25))',
          }}
          className="float-animation-1"
        >
          ☕
        </div>

        {/* Donut - top right */}
        <div
          style={{
            position: 'absolute',
            top: '18%',
            right: '15%',
            fontSize: '50px',
            opacity: 0.26,
            transform: 'rotate(22deg)',
            filter: 'drop-shadow(0 5px 10px rgba(0,0,0,0.2))',
          }}
          className="float-animation-2"
        >
          🍩
        </div>

        {/* Cookie - left middle */}
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '8%',
            fontSize: '45px',
            opacity: 0.24,
            transform: 'rotate(-35deg)',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.18))',
          }}
          className="float-animation-3"
        >
          🍪
        </div>

        {/* Ice cream - right middle */}
        <div
          style={{
            position: 'absolute',
            top: '45%',
            right: '12%',
            fontSize: '48px',
            opacity: 0.28,
            transform: 'rotate(28deg)',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
          }}
          className="float-animation-4"
        >
          🍦
        </div>

        {/* Banana - bottom left */}
        <div
          style={{
            position: 'absolute',
            bottom: '25%',
            left: '18%',
            fontSize: '38px',
            opacity: 0.22,
            transform: 'rotate(-15deg)',
            filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.15))',
          }}
          className="float-animation-5"
        >
          🍌
        </div>

        {/* Strawberry - bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '20%',
            fontSize: '35px',
            opacity: 0.25,
            transform: 'rotate(30deg)',
            filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.18))',
          }}
          className="float-animation-6"
        >
          🍓
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
        {/* Logo and Title */}
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
            🔐
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
            Quên mật khẩu?
          </Title>
          <Text 
            style={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: '16px',
              textShadow: '0 1px 2px rgba(0,0,0,0.3)'
            }}
          >
            Nhập email của bạn để nhận hướng dẫn đặt lại mật khẩu
          </Text>
        </div>

        {/* Forgot Password Form */}
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
            name="forgotPassword"
            onFinish={handleForgotPassword}
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
                prefix={<MailOutlined style={{ color: '#ff6b35' }} />}
                placeholder="Nhập email của bạn"
                style={{ borderRadius: '8px' }}
              />
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
                {loading ? 'Đang gửi...' : 'Gửi hướng dẫn đặt lại mật khẩu'}
              </Button>
            </Form.Item>

            <div 
              style={{
                textAlign: 'center',
                marginTop: '24px'
              }}
            >
              <Link 
                to="/login"
                style={{ 
                  color: '#ff6b35',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <ArrowLeftOutlined />
                Quay lại đăng nhập
              </Link>
            </div>
          </Form>
        </Card>

        {/* Help text */}
        <div 
          style={{
            textAlign: 'center',
            marginTop: '24px',
            padding: '16px',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderRadius: '8px'
          }}
          className="animate-fadeInUp animate-delay-2"
        >
          <Text style={{ color: '#666', fontSize: '14px' }}>
            💡 <strong>Mẹo:</strong> Kiểm tra cả thư mục spam nếu bạn không thấy email trong hộp thư đến.
          </Text>
        </div>

        
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
        
        .animate-delay-3 {
          animation-delay: 0.6s;
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
          animation: float3d-1 5.5s ease-in-out infinite;
        }
        .float-animation-2 {
          animation: float3d-2 6.2s ease-in-out infinite;
        }
        .float-animation-3 {
          animation: float3d-3 7.1s ease-in-out infinite;
        }
        .float-animation-4 {
          animation: float3d-4 5.8s ease-in-out infinite;
        }
        .float-animation-5 {
          animation: float3d-5 6.7s ease-in-out infinite;
        }
        .float-animation-6 {
          animation: float3d-6 4.9s ease-in-out infinite;
        }

        @keyframes float3d-1 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(-18deg) scale(1);
          }
          50% { 
            transform: translateY(-20px) translateX(8px) rotate(-23deg) scale(1.08);
          }
        }

        @keyframes float3d-2 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(22deg) scale(1);
          }
          33% { 
            transform: translateY(-16px) translateX(-6px) rotate(27deg) scale(1.06);
          }
          67% { 
            transform: translateY(-24px) translateX(4px) rotate(17deg) scale(1.12);
          }
        }

        @keyframes float3d-3 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(-35deg) scale(1);
          }
          40% { 
            transform: translateY(-18px) translateX(7px) rotate(-30deg) scale(1.07);
          }
          80% { 
            transform: translateY(-12px) translateX(-3px) rotate(-40deg) scale(1.04);
          }
        }

        @keyframes float3d-4 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(28deg) scale(1);
          }
          50% { 
            transform: translateY(-22px) translateX(-8px) rotate(33deg) scale(1.1);
          }
        }

        @keyframes float3d-5 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(-15deg) scale(1);
          }
          30% { 
            transform: translateY(-14px) translateX(5px) rotate(-10deg) scale(1.05);
          }
          70% { 
            transform: translateY(-20px) translateX(-2px) rotate(-20deg) scale(1.09);
          }
        }

        @keyframes float3d-6 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(30deg) scale(1);
          }
          45% { 
            transform: translateY(-17px) translateX(6px) rotate(35deg) scale(1.08);
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

export default ForgotPasswordPage; 