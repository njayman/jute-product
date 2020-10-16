import React, { useState, useEffect } from 'react';
import './App.css';
import Routes from './router';

function App() {
  const [navHeight, setNavHeight] = useState()
  const [footHeight, setFootHeight] = useState()
  const [subHeight, setSubHeight] = useState()
  const navHeightSet = (nh) => {
    setNavHeight(nh)
  }

  const footHeightSet = (fh) => {
    setFootHeight(fh)
  }

  useEffect(() => {
    setSubHeight(navHeight + footHeight)
  }, [navHeight, footHeight])

  return (
    <div className="main-container">
      <Routes subHeight={subHeight} navHeightSet={nh => navHeightSet(nh)} footHeightSet={fh => footHeightSet(fh)} />
    </div>
  );
}

export default App;
