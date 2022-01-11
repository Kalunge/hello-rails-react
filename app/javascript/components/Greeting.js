import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreeting } from '../redux/greeting/greeting';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  const { message } = useSelector((state) => state.greetingReducer);
  console.log(message);4

  const generateGreeting = () => {
    dispatch(getGreeting())
  }

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={generateGreeting}>Generate another random greeting</button>
    </div>
  );
};

export default Greeting;
