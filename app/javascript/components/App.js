import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';
import store from '../redux/configureStore';
import Home from './Home';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/greeting" element={<Greeting />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
