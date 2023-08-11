import React, { useState, useEffect } from 'react';
import { SearchBar, SearchData, SearchItem, SearchList, SearchTitle } from '../styled/SearchStyle';
import Modal from './Modal';
export default function Search() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    
    fetch('http://3.35.134.247:3000/api/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setFilteredPosts(data);
      })
      .catch(error => {
        console.error('불러오지못했습니다.', error);
      });
  }, []);

  useEffect(() => {
    // 검색어에 따라 포스트를 필터링
    const filtered = posts.filter(post =>
      post.description.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [search, posts]);

  return (
    <>
      <SearchBar
        type="text"
        placeholder="ToDo를 검색해보세요"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <SearchList>
        {filteredPosts.map(post => (
            <SearchItem >
                <SearchTitle>TODO</SearchTitle>
                <SearchData>{post.description}</SearchData>
                <SearchData>{post.target_date.slice(2,10)}</SearchData>
                
            </SearchItem>
        ))}
      </SearchList>
    </>
  );
}

