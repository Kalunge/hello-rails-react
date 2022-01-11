import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Home = ({ message }) => {
  return (
    <div>
      <Link to='/greeting'>
    <h3>Get Random greeting</h3>
      </Link>
    </div>
  );
};

Home.propTypes = {
  message: PropTypes.string,
};

export default Home;
