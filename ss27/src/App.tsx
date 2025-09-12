import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

function Home() {
  return (
    <div className="page">
      <h1>Chào mừng bạn đến với ứng dụng giới thiệu bản thân của tôi!</h1>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h2>Giới thiệu bản thân</h2>
      <p><strong>Họ tên:</strong> Nguyễn Văn A</p>
      <p><strong>Nghề nghiệp:</strong> Sinh viên Công nghệ thông tin</p>
      <p><strong>Mô tả:</strong> Yêu thích lập trình web, đặc biệt là ReactJS.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <h2>Liên hệ</h2>
      <p>Email: nguyenvana@example.com</p>
      <p>SĐT: 0123 456 789</p>
      <p>Facebook: fb.com/nguyenvana</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
