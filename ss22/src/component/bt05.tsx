import { Alert } from 'antd';

const AlertGroup = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px', margin: 'auto' }}>
      <Alert
        message="Thêm tài khoản thành công."
        type="success"
        closable
        showIcon
      />
      <Alert
        message="Thêm mới tài khoản thất bại."
        type="error"
        closable
        showIcon
      />
      <Alert
        message="Tên không được để trống."
        type="warning"
        closable
        showIcon
      />
    </div>
  );
};

export default AlertGroup;