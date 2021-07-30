import React from 'react';
import { Link } from 'react-router-dom';

export default function TheHeader() {
  return (
    <div className="flex items-center h-12">
      <div className="flex items-center">
        <Link to="/">Home</Link> &nbsp;
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
}
