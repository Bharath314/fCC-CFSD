export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-info">
          <img
            src="../../../../static/dockVind_logo.png"
            alt="dockVind Logo"
            className="logo"
          />
          <p className="company-description">
            dockVind develops platforms and tools that empower creators,
            businesses, and developers to build the technology of tomorrow.
          </p>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <strong>Company</strong>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Manifesto</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
          <ul>
            <li>
              <strong>Resources</strong>
            </li>
            <li>
              <a href="#">Documentation Network</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">File a Bug</a>
            </li>
          </ul>
          <ul>
            <li>
              <strong>Community</strong>
            </li>
            <li>
              <a href="#">X</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Forum</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="copyright">
        <small>© 2025 dockVind. All Rights Reserved.</small>
      </p>
    </footer>
  );
};
