import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className="container">About Page</div>
      <Link to="/" className="btn">Back To Home</Link>
    </div>
  );
};

export default About;
