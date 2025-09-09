import React from "react";

const Buttons = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:opacity-85">Lưu</button>
      <button className="px-4 py-2 rounded-lg bg-gray-500 text-white hover:opacity-85">Hủy</button>
      <button className="px-4 py-2 rounded-lg bg-green-500 text-white hover:opacity-85">Thành công</button>
      <button className="px-4 py-2 rounded-lg bg-yellow-400 text-black hover:opacity-85">Cảnh báo</button>
      <button className="px-4 py-2 rounded-lg bg-red-500 text-white hover:opacity-85">Báo lỗi</button>
      <button className="px-4 py-2 rounded-lg bg-sky-500 text-white hover:opacity-85">Thông tin</button>
      <button className="px-4 py-2 underline text-blue-600 hover:text-blue-800">Đường dẫn</button>
    </div>
  );
};

export default Buttons;
