import React, { useState, useCallback } from 'react';

function ColorPicker() {
  const [color, setColor] = useState('');

  const handleChangeColor = useCallback(function (e) {
    setColor(e.target.value);
  }, []);

  return (
    <div>
      <h2>Chọn màu</h2>
      <input
        type="color"
        value={color}
        onChange={handleChangeColor}
      />

      <div style={{ marginTop: '1rem' }}>
        <p><strong>Màu người dùng chọn:</strong> {color || 'Chưa chọn'}</p>
        <p><strong>Màu hiển thị:</strong></p>
        <div
          style={{
            width: '100px',
            height: '50px',
            backgroundColor: color || '#ffffff',
            border: '1px solid #ccc',
          }}
        />
      </div>
    </div>
  );
}

export default ColorPicker;