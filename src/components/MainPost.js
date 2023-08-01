import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const MainPostContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 10px;
  margin-bottom: 10vh;
`;

const PostList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const PostItem = styled.li`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  margin: 10px 0;
`;

const PostTitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;
`;

const PostDate = styled.p`
  color: black;
  font-size: 1rem;
`;

function MainPost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      setError(null);
      setPosts([]);
      setLoading(true);

      const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
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
    <MainPostContainer>
      <h3>TodoList</h3>
      <PostList>
        {posts.map((post) => (
          <PostItem key={post.id}>
            <PostTitle>{post.description}</PostTitle>
            <PostDate>작성일자: {post.target_date}</PostDate>
            <PostDate>내용: {post.description}</PostDate>
          </PostItem>
        ))}
      </PostList>
    </MainPostContainer>
  );
}

export default MainPost;
