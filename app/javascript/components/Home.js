import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ message }) => {
  return (
    <div>
      <h2>Message: {message}</h2>
    </div>
  );
};

Home.propTypes = {
  message: PropTypes.string,
};

export default Home;
