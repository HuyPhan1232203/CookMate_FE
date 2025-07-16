import api from "@/config/axios";
import { Button, Modal, Table } from "antd";
import React, { useEffect, useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

function UserManage() {
  const [data, setData] = useState([]);
  const fetchUser = async () => {
    try {
      const res = await api.get("users");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      const res = await api.delete(`users/${id}`);
    } catch (error) {
      console.log(error);
    } finally {
      fetchUser();
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  const col = [
    {
      title: "Name",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Action",
      dataIndex: "userId",
      key: "userId",
      render: (item) => {
        return (
          <div>
            <Button onClick={() => handleDelete(item)}>
              <FaTrash />
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <Table showHeader columns={col} dataSource={data}></Table>
    </div>
  );
}

export default UserManage;
