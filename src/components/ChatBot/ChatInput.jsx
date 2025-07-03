import React from 'react';
import { Button, Input, Space } from 'antd';
import { SendOutlined } from '@ant-design/icons';

const ChatInput = ({ value, onChange, onSend, onKeyPress, disabled = false }) => {
  return (
    <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '16px' }}>
      <Space.Compact style={{ width: '100%' }}>
        <Input
          placeholder="Hỏi về công thức, món ăn, nguyên liệu..."
          value={value}
          onChange={onChange}
          onPressEnter={onKeyPress}
          disabled={disabled}
          style={{ borderRadius: '8px 0 0 8px' }}
        />
        <Button
          type="primary"
          icon={<SendOutlined />}
          onClick={onSend}
          disabled={disabled}
          style={{
            backgroundColor: '#ff6b35',
            borderColor: '#ff6b35',
            borderRadius: '0 8px 8px 0'
          }}
        />
      </Space.Compact>
    </div>
  );
};

export default ChatInput; 