import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line
export default () => {
  return (
    <div> I'm on the other page!
      <Link to="/">Go Home</Link>
    </div>
  );
};