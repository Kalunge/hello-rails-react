import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/greeting" element={<Greeting message="Hello from Greeting"/>} />
      </Routes>
    </Router>
  );
};

export default App;
