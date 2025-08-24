import React, { useState } from 'react';
import DetailPost from './DetailPost';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

function ListPost() {
  const [posts] = useState<Post[]>([
    { id: 1, title: "Tạo sao nên học ReactJS", content: "Học ReactJS để làm", author: "David" },
    { id: 2, title: "Props trong ReactJS", content: "Props giúp truyền dữ liệu từ component cha", author: "Linda" },
    { id: 3, title: "State trong ReactJS là gì?", content: "State giúp trả trạng thái dữ liệu bên trong component", author: "David" },
  ]);

  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <div>
      <h1>Danh sách bài viết</h1>
      {posts.map(post => (
        <div key={post.id} onClick={() => setSelectedPost(post)} style={{ cursor: 'pointer' }}>
          <h3>{post.title}</h3>
          <p>{post.content.substring(0, 20)}...</p>
        </div>
      ))}
      {selectedPost && <DetailPost post={selectedPost} />}
    </div>
  );
}

export default ListPost;