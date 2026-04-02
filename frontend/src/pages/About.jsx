import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>Our Journey</h1>
        <p>
          At <span className="highlight">PrintfrAll</span>, quality is not just a goal—it's our perfection. 
          Started in <span className="highlight">2008</span> with no expertise and countless difficulties, 
          we’ve grown into a trusted name in the printing industry. Today, we proudly collaborate with 
          big brands like <span className="highlight">Nestle, ITC, Dabur</span>, and many more, delivering 
          excellence in every project.
        </p>
        <p>
          Our mission is simple yet powerful: to provide <span className="highlight">innovative, reliable, 
          and high-quality printing solutions</span> that help businesses and individuals make a lasting 
          impression. From humble beginnings to serving clients <span className="highlight">pan India</span>, 
          we’ve come a long way, and our journey is a testament to our dedication and passion.
        </p>
      </div>

      <div className="stats-container">
        <div className="stat-item">
          <h2>87</h2>
          <p>Satisfied Clients</p>
        </div>
        <div className="stat-item">
          <h2>0.6M+</h2>
          <p>People Served</p>
        </div>
        <div className="stat-item">
          <h2>150</h2>
          <p>Projects Completed</p>
        </div>
        <div className="stat-item">
          <h2>28</h2>
          <p>Accolades Earned</p>
        </div>
      </div>
    </div>
  );
}

export default About;