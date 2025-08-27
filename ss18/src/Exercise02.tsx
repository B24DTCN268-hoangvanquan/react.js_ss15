import React, { useMemo } from "react";

function UserList() {
  const users = [
    { id: 1, name: "Quân", age: 17 },
    { id: 2, name: "Hoàng", age: 20 },
    { id: 3, name: "Hùng", age: 22 },
    { id: 4, name: "Hải", age: 15 },
  ];

  const filteredUsers = useMemo(() => {
    return users.filter((user) => user.age > 18);
  }, [users]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách người dùng trên 18 tuổi</h2>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} tuổi
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
