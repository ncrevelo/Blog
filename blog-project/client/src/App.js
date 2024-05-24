import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My Blog</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/add-post">Add Post</Link></li>
              <li><Link to="/posts">Posts</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-post" element={<PostForm />} />
            <Route path="/posts" element={<PostList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;


