import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import PostForm from './components/PostForm';
import PostDetails from './components/PostDetails';
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
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/add-post" element={<PostForm />} />
            <Route path="/posts/:id" element={<PostDetails />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 My Blog. Hecho con amor .</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;

