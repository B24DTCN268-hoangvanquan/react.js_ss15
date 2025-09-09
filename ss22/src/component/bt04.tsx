import { Dropdown, Menu, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';


const UserDropdown = () => {
  const menu = (
    <Menu>
      <Menu.Item key="settings">Cài đặt</Menu.Item>
      <Menu.Item key="change-password">Đổi mật khẩu</Menu.Item>
      <Menu.Item key="logout">Đăng xuất</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomRight" arrow>
      <Button type="primary">
        Hoàng Văn Quân 
       <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default UserDropdown;