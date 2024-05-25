import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
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
    <div className="home">
      <section className="welcome-section">
        <h2>¡Bienvenidos a este blog! </h2>
        <p>Aqui  encontrarás artículos interesantes y publicaciones sobre diversos temas! ¡Siéntete libre de explorar y disfrutar!</p>
      </section>
      <section className="posts-section">
        <h2>Publicaciones recientes</h2>
        <div className="posts-grid">
          {posts.map(post => (
            <div key={post.id} className="post-card">
              <h3>{post.title}</h3>
              <p>{post.content.substring(0, 100)}...</p>
              <Link to={`/posts/${post.id}`} className="read-more-btn">Read More</Link>
              <button className="delete-btn" onClick={() => handleDelete(post.id)}>Delete</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

