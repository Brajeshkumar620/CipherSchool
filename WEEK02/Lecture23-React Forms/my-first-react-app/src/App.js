import React, { useState } from 'react';
import './App.css'

function App() {
  const [clicks, setClicks] = useState(0);
  const [bgColor, setBgColor] = useState('white');

  const handleClick = () => {
    setClicks(clicks + 1);
    setBgColor(getRandomColor());
  };

  const handleAddClick = () => {
    setClicks(clicks + 1);
    setBgColor(getRandomColor());
  };

  const handleRemoveClick = () => {
    if (clicks > 0) {
      setClicks(clicks - 1);
      setBgColor(getRandomColor());
    }
  };

  const handleRefresh = () => {
    setClicks(0);
    setBgColor('white');
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="App">
      <div
        className="card"
        style={{ backgroundColor: bgColor }}
        onClick={handleClick}
      >
        <p>{clicks}</p>
      </div>
      <div className="buttons">
        <button onClick={handleAddClick}>+</button>
        <button onClick={handleRemoveClick}>-</button>
        <button onClick={handleRefresh}>Refresh</button>
      </div>
    </div>
  );
}

export default App;
