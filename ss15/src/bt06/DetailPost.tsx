import React from 'react';
interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}
function DetailPost({ post }: { post: Post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p><strong>Tác giả:</strong> {post.author}</p>
    </div>
  );
}
export default DetailPost;