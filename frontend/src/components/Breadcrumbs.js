// components/Breadcrumbs.js
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  
  // Split path and filter out empty strings
  const pathnames = location.pathname.split('/').filter((x) => x && x !== 'services');

  // Don't show breadcrumbs on home page
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <div style={{
      padding: '12px 20px',
      backgroundColor: '#f0f4f7', // soft background matching palette
      borderBottom: '1px solid #e0e7ed',
      fontSize: '14px',
      marginBottom: '20px'
    }}>
      <Link to="/" style={{ color: '#19485D', textDecoration: 'none' }}>Home</Link>
      
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const displayName = name
          .replace(/-/g, ' ')
          .replace(/\(long\)/g, '')
          .replace(/hash10/g, '#10')
          .replace(/(^|\s)\S/g, (char) => char.toUpperCase());

        return isLast ? (
          <span key={name} style={{ color: '#5a6e7a' }}>
            <span style={{ margin: '0 8px', color: '#5a6e7a' }}>/</span>
            {displayName}
          </span>
        ) : (
          <span key={name}>
            <span style={{ margin: '0 8px', color: '#5a6e7a' }}>/</span>
            <Link to={routeTo} style={{ color: '#70CB97', textDecoration: 'none' }}>
              {displayName}
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;