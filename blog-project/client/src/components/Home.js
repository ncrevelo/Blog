import React, { useState, useEffect } from 'react';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>
      <h1>Hola!!!!</h1>
      <p>Bienvenido a tu blog de interes, Que gusto saludarte !!! .</p>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
