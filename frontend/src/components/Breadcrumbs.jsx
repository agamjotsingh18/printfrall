import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import "../styles/Breadcrumbs.css";


const Breadcrumbs = () => {
  const location = useLocation();
  
  // Split path strings cleanly
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Hide completely on the landing homepage
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <div className="breadcrumbs-wrapper">
      <div className="breadcrumbs-inner">
        <Link to="/" className="breadcrumb-link home-crumb">Home</Link>
        
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          
          // Formatting words beautifully
          const displayName = name
            .replace(/-/g, ' ')
            .replace(/\(long\)/g, '')
            .replace(/hash10/g, '#10')
            .replace(/(^|\s)\S/g, (char) => char.toUpperCase());

          return isLast ? (
            <span key={routeTo} className="breadcrumb-current">
              <span className="breadcrumb-separator">→</span>
              {displayName}
            </span>
          ) : (
            <span key={routeTo} className="breadcrumb-step">
              <span className="breadcrumb-separator">→</span>
              <Link to={routeTo} className="breadcrumb-link">{displayName}</Link>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Breadcrumbs;