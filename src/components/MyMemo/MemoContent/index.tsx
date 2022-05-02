import { useState } from "react";
import { Modal, Popconfirm, message } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./index.scss";

interface IProp {
  title: string;
  content: string;
  deleteBlog: (id: number) => void;
  id: number;
}

// interface INote {
//   title: string;
//   content: string;
// }

const MemoContent = (props: IProp) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(props.title);
  const [newTitle, setNewTitle] = useState<string>(title);
  const [content, setContent] = useState<string>(props.content);
  const [newContent, setNewContent] = useState<string>(content);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setTitle(newTitle);
    setContent(newContent);
    console.log(
      `Title: ${title}, New Title: ${newTitle}, Content: ${content}, New Content: ${newContent}`
    );
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setNewTitle(title);
    setNewContent(content);
    console.log(
      `Title: ${title}, New Title: ${newTitle}, Content: ${content}, New Content: ${newContent}`
    );
  };

  function confirmDelete() {
    props.deleteBlog(props.id);
    message.success("Memo deleted", 1);
  }
  return (
    <div className="memo-note">
      <h4>{title}</h4>
      <p>{content}</p>

      <div className="icons">
        <EditOutlined className="icon" onClick={showModal} />
        <Modal
          title={
            <input
              value={newTitle}
              placeholder="Title"
              onChange={(e) => setNewTitle(e.target.value)}
            />
          }
          visible={isModalVisible}
          okButtonProps={{ shape: "circle" }}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <textarea
            value={newContent}
            placeholder="Content"
            onChange={(e) => setNewContent(e.target.value)}
          ></textarea>
        </Modal>
        <Popconfirm
          title="Are you sure to delete this memo?"
          onConfirm={confirmDelete}
          okText="Yes"
          cancelText="No"
        >
          <DeleteOutlined className="icon" />
        </Popconfirm>
      </div>
    </div>
  );
};

export default MemoContent;
