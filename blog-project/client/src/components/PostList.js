import React, { useState, useEffect } from 'react';
import './PostList.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/posts/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPosts(posts.filter(post => post.id !== id));
      })
      .catch(error => console.error('Error deleting post:', error));
  };

  return (
    <div className="post-list">
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="post-item">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => handleDelete(post.id)} className="btn btn-danger">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
