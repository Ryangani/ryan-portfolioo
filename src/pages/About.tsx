import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="/profile.jpg" alt="Ryan Roferos" className="about-profile-img" />
          </div>
          <div className="about-text">
            <p style={{ textAlign: 'justify' }}>
              I'm a Frontend Developer with a background in technical support, and I enjoy creating clean, user-friendly web experiences. Over time, I've developed a solid foundation in modern web development while also gaining hands-on experience in troubleshooting and computer repair.
            </p>
            <p style={{ textAlign: 'justify' }}>
              I value writing efficient, maintainable code and taking a practical approach to problem-solving. My technical support experience has helped me better understand the systems behind the scenes, which allows me to approach development with a broader perspective.
            </p>
            <p style={{ textAlign: 'justify' }}>
              I'm committed to continuous learning and staying current with evolving technologies, and I appreciate opportunities to grow while contributing thoughtfully to a team.
            </p>
            
            <div className="education-section">
              <h3><i className="fas fa-graduation-cap"></i> Education</h3>
              <div className="education-list">
                <div className="education-item">
                  <div className="education-school">Misamis Oriental Institute of Science and Technology</div>
                  <div className="education-degree">Bachelor of Science in Information Technology</div>
                  <div className="education-location">Balingasag, Misamis Oriental</div>
                  <div className="education-year">2025-2026</div>
                </div>
                <div className="education-item">
                  <div className="education-school">San Jose National Senior High School</div>
                  <div className="education-degree">Accountancy, Business, and Management, Senior High School Graduate</div>
                  <div className="education-location">Talisayan, Misamis Oriental</div>
                  <div className="education-year">2021-2022</div>
                </div>
                <div className="education-item">
                  <div className="education-school">St. Mary's Academy of Carmen</div>
                  <div className="education-degree">High School Graduate</div>
                  <div className="education-location">Cagayan de Oro, Misamis Oriental</div>
                  <div className="education-year">2019-2020</div>
                </div>
                <div className="education-item">
                  <div className="education-school">St. Mary's Academy of Carmen</div>
                  <div className="education-degree">Grade School Graduate</div>
                  <div className="education-location">Cagayan de Oro, Misamis Oriental</div>
                  <div className="education-year">2015-2016</div>
                </div>
              </div>
            </div>
            
            <div className="certificates-section">
              <h3><i className="fas fa-certificate"></i> Certificates</h3>
              <div className="certificates-list">
                <div className="certificate-item">
                  <div className="certificate-name">Windows Server 2012</div>
                  <div className="certificate-issuer">Microsoft</div>
                  <div className="certificate-year">2022</div>
                </div>
                <div className="certificate-item">
                  <div className="certificate-name">Active Directory</div>
                  <div className="certificate-issuer">Microsoft</div>
                  <div className="certificate-year">2022</div>
                </div>
                <div className="certificate-item">
                  <div className="certificate-name">Manage AD DS domain controllers and FSMO roles</div>
                  <div className="certificate-issuer">Microsoft</div>
                  <div className="certificate-year">2022</div>
                </div>
                <div className="certificate-item">
                  <div className="certificate-name">Windows Server update management</div>
                  <div className="certificate-issuer">Microsoft</div>
                  <div className="certificate-year">2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
