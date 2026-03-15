import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import TechMinute from "./Games/TechMinute";
import MemoryGame from "./Games/MemoryGame";
import CardGuess from "./Games/CardGuess";
import SnakeGame from "./Games/SnakeGame";

function Home() {
 
  return (
    <>
      <div className="bg">
        <div className="stars"></div>
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud3"></div>

        <div className="hill hill1"></div>
        <div className="hill hill2"></div>
      </div>
        <div className="particles"></div>
      <div className="container">
        <h1 className="title">🎮 Arcadify</h1>
        <p className="subtitle">Enter the Game Universe</p>

        <div className="game-grid">
          <Link to="/tech"><button className="game-card">⚡ Tech Minute</button></Link>
          <Link to="/memory"><button className="game-card">🧠 Memory Game</button></Link>
          <Link to="/card"><button className="game-card">🃏 Card Guess</button></Link>
          <Link to="/snake"><button className="game-card">🐍 Snake Game</button></Link>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech" element={<TechMinute />} />
        <Route path="/memory" element={<MemoryGame />} />
        <Route path="/card" element={<CardGuess />} />
        <Route path="/snake" element={<SnakeGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;