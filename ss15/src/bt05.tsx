import React, { Component } from "react";

interface Student {
  id: string;
  name: string;
  birthDate: string;
  email: string;
  status: string;
}

interface StudentRowProps {
  index: number;
  student: Student;
  onEdit: (student: Student) => void;
  onDelete: (id: string) => void;
}

const StudentRow: React.FC<StudentRowProps> = ({ index, student, onEdit, onDelete }) => (
  <tr>
    <td>{index + 1}</td>
    <td>{student.id}</td>
    <td>{student.name}</td>
    <td>{student.birthDate}</td>
    <td>{student.email}</td>
    <td>{student.status}</td>
    <td>
      <button onClick={() => onEdit(student)}>Chỉnh</button>
      <button onClick={() => onDelete(student.id)}>Xóa</button>
    </td>
  </tr>
);

interface StudentTableState {
  students: Student[];
  currentPage: number;
  itemsPerPage: number;
}

class StudentTable extends Component<{}, StudentTableState> {
  state: StudentTableState = {
    students: [
      { id: "SV001", name: "Nguyen Van A", birthDate: "21/12/2023", email: "nva@gmail.com", status: "Đang học" },
      { id: "SV002", name: "Nguyen Thi B", birthDate: "21/11/2022", email: "ntb@gmail.com", status: "Nghỉ học" },
    ],
    currentPage: 1,
    itemsPerPage: 2,
  };

  handleEdit = (student: Student) => alert(`Sửa: ${student.name}`);
  handleDelete = (id: string) => this.setState({ students: this.state.students.filter(s => s.id !== id) });
  handleAddStudent = () => alert("Chức năng thêm mới");

  render() {
    const { students, currentPage, itemsPerPage } = this.state;
    const start = (currentPage - 1) * itemsPerPage;
    const currentStudents = students.slice(start, start + itemsPerPage);
    const totalPages = Math.ceil(students.length / itemsPerPage);

    return (
      <div>
        <h2>Danh sách sinh viên</h2>
        <button onClick={this.handleAddStudent}>Thêm mới</button>

        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th>STT</th><th>Mã SV</th><th>Tên SV</th><th>Ngày sinh</th>
              <th>Email</th><th>Trạng thái</th><th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {currentStudents.map((student, i) => (
              <StudentRow
                key={student.id}
                index={start + i}
                student={student}
                onEdit={this.handleEdit}
                onDelete={this.handleDelete}
              />
            ))}
          </tbody>
        </table>

        <div>
          <button disabled={currentPage === 1} onClick={() => this.setState({ currentPage: currentPage - 1 })}>
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => this.setState({ currentPage: i + 1 })}
              style={{ fontWeight: currentPage === i + 1 ? "bold" : "normal" }}
            >
              {i + 1}
            </button>
          ))}
          <button disabled={currentPage === totalPages} onClick={() => this.setState({ currentPage: currentPage + 1 })}>
            &gt;
          </button>
        </div>
      </div>
    );
  }
}

class Exercise05 extends Component {
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Quản lý sinh viên</h1>
        <StudentTable />
      </div>
    );
  }
}

export default Exercise05;
