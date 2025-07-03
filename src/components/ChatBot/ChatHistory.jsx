import React from 'react';
import { Button, List, Popconfirm, Empty, Avatar, Typography } from 'antd';
import { DeleteOutlined, CommentOutlined } from '@ant-design/icons';

const { Text } = Typography;

const ChatHistory = ({ 
  chatHistory, 
  onLoadChat, 
  onDeleteChat, 
  onClearAllHistory, 
  onStartNewChat 
}) => {
  return (
    <div style={{ height: 'calc(100vh - 160px)', padding: '8px 0' }}>
      <div style={{ 
        marginBottom: '16px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <Button 
          type="primary" 
          size="small"
          onClick={onStartNewChat}
          style={{ backgroundColor: '#ff6b35', borderColor: '#ff6b35' }}
        >
          Bắt đầu chat mới
        </Button>
        {chatHistory.length > 0 && (
          <Popconfirm
            title="Xóa tất cả lịch sử?"
            description="Bạn có chắc muốn xóa toàn bộ lịch sử chat?"
            onConfirm={onClearAllHistory}
            okText="Xóa"
            cancelText="Hủy"
          >
            <Button size="small" danger type="text">
              Xóa tất cả
            </Button>
          </Popconfirm>
        )}
      </div>
      
      {chatHistory.length === 0 ? (
        <Empty 
          description="Chưa có lịch sử chat"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      ) : (
        <List
          dataSource={chatHistory}
          renderItem={(chatSession) => (
            <List.Item
              actions={[
                <Button
                  key="view"
                  type="text"
                  size="small"
                  onClick={() => onLoadChat(chatSession)}
                  style={{ color: '#ff6b35' }}
                >
                  Xem
                </Button>,
                <Popconfirm
                  key="delete"
                  title="Xóa cuộc trò chuyện này?"
                  onConfirm={() => onDeleteChat(chatSession.id)}
                  okText="Xóa"
                  cancelText="Hủy"
                >
                  <Button
                    type="text"
                    size="small"
                    danger
                    icon={<DeleteOutlined />}
                  />
                </Popconfirm>
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar icon={<CommentOutlined />} size="small" />}
                title={
                  <Text 
                    strong 
                    style={{ fontSize: '14px' }}
                    ellipsis={{ tooltip: chatSession.title }}
                  >
                    {chatSession.title}
                  </Text>
                }
                description={
                  <div>
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                      {chatSession.messageCount} tin nhắn • {' '}
                      {new Date(chatSession.lastUpdated).toLocaleDateString('vi-VN', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </Text>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default ChatHistory; 