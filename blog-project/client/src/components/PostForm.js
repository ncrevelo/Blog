import React, { useState } from 'react';
import './PostForm.css';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Post added:', data);
        setTitle('');
        setContent('');
      })
      .catch(error => {
        console.error('Error adding post:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="form-control"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Add Post</button>
    </form>
  );
};

export default PostForm;

