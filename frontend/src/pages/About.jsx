import React from "react";
import "../styles/About.css";

const About = () => {
  const businessStats = [
    { value: "87", label: "Satisfied Clients" },
    { value: "0.6M+", label: "People Served" },
    { value: "150", label: "Projects Completed" },
    { value: "28", label: "Accolades Earned" },
  ];

  return (
    <div className="about-container">
      <section className="about-content" aria-label="About PrintfrAll">
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
      </section>

      {/* Metrics Section */}
      <section className="stats-container" aria-label="PrintfrAll Business Metrics">
        {businessStats.map((stat, idx) => (
          <div className="stat-item" key={idx}>
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;