import React from 'react';
import { Card, Typography, Avatar } from 'antd';
import { RobotOutlined, UserOutlined } from '@ant-design/icons';
import { formatTime } from './chatBotUtils';




const { Text } = Typography;

const ChatMessage = ({ message }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: message.isBot ? 'flex-start' : 'flex-end',
        marginBottom: '16px'
      }}
    >
      <div
        style={{
          maxWidth: '80%',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '8px',
          flexDirection: message.isBot ? 'row' : 'row-reverse'
        }}
      >
        <Avatar 
          size="small"
          icon={message.isBot ? <RobotOutlined /> : <UserOutlined />}
          style={{ 
            backgroundColor: message.isBot ? '#ff6b35' : '#1890ff',
            flexShrink: 0
          }}
        />
        <div>
          <Card
            size="small"
            style={{
              backgroundColor: message.isBot ? '#f6f6f6' : '#ff6b35',
              border: 'none',
              borderRadius: '12px',
            }}
            bodyStyle={{ padding: '8px 12px' }}
          >
            <Text 
              style={{ 
                color: message.isBot ? '#333' : 'white',
                whiteSpace: 'pre-line'
              }}
            >
              {message.text}
            </Text>
          </Card>
          <Text 
            type="secondary" 
            style={{ 
              fontSize: '11px',
              marginLeft: message.isBot ? '0' : 'auto',
              display: 'block',
              textAlign: message.isBot ? 'left' : 'right',
              marginTop: '4px'
            }}
          >
            {formatTime(message.timestamp)}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage; 