import React, { useState, useEffect } from 'react';
import { MainPostContainer, PostList, PostItem, PostTitle, PostDate} from '../styled/MainStyle';

function MainPost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      setError(null);
      setPosts([]);
      setLoading(true);

      const response = await fetch('http://3.35.134.247:3000/api/posts', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=utf-8',
          
        }
      });

      if (!response.ok) {
        throw new Error('데이터를 가져오는데 실패.');
      }

      const data = await response.json(); // JSON 변환
      setPosts(data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러 발생</div>;
  if (posts.length === 0) return <div>데이터가 없습니다.</div>;

  return (
    <MainPostContainer>
      <h3>TodoList</h3>
      <PostList>
        {posts.map((post) => (
          <PostItem key={post.id}>
            <PostTitle>Todo</PostTitle>
            <PostDate>작성일자: {post.target_date.slice(0,10)}</PostDate>
            <PostDate>내용: {post.description}</PostDate>
          </PostItem>
        ))}
      </PostList>
    </MainPostContainer>
  );
}

export default MainPost;
