import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MainPost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      setError(null);
      setPosts([]);
      setLoading(true);

      const response = await axios.get('http://6fbe-121-88-197-60.ngrok-free.app/api/posts', {
        headers: {
          'Content-type': 'application/json; charset=utf-8',
          "ngrok-skip-browser-warning": true
        }
      });

      setPosts(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (posts.length === 0) return <div>데이터가 없습니다.</div>;

  return (
    <div>
      <h1>게시물 목록</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.description}</h2>
            <p>Target Date: {post.target_date}</p>
            <p>Created At: {post.created_at}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainPost;
