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
    <nav className="breadcrumbs-wrapper" aria-label="Breadcrumb navigation">
      <div className="breadcrumbs-inner">
        <Link 
          to="/" 
          className="breadcrumb-link home-crumb"
          aria-label="Go to home page"
        >
          Home
        </Link>
        
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
            <span 
              key={routeTo} 
              className="breadcrumb-current"
              aria-current="page"
              aria-label={`Current page: ${displayName}`}
            >
              <span className="breadcrumb-separator" aria-hidden="true">→</span>
              {displayName}
            </span>
          ) : (
            <span key={routeTo} className="breadcrumb-step">
              <span className="breadcrumb-separator" aria-hidden="true">→</span>
              <Link 
                to={routeTo} 
                className="breadcrumb-link"
                aria-label={`Go to ${displayName}`}
              >
                {displayName}
              </Link>
            </span>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumbs;