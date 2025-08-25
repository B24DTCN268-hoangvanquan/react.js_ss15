
import React from "react";

const SubjectList: React.FC = () => {
  
  const subjects: string[] = ["Toán", "Văn", "Anh", "Hóa", "Sinh"];

  return (
    <div
      style={{
        backgroundColor: "#1e1e1e",
        padding: "20px",
        borderRadius: "10px",
        width: "300px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "white", marginBottom: "20px" }}>Danh sách môn học</h2>
      {subjects.map((subject, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#d6f5ff",
            margin: "10px 0",
            padding: "10px",
            borderRadius: "8px",
            fontWeight: "bold",
            color: "#005580",
          }}
        >
          {subject}
        </div>
      ))}
    </div>
  );
};

export default SubjectList;
