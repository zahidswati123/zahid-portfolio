function Footer() {
  return (
    <footer className="footer-section">
      <div className="container-fluid px-lg-5 px-3">
        <div className="footer-content">
          <h2>
            Zahid Aslam<span>.</span>
          </h2>

          <p>
            Software Engineer • Full Stack Developer • AI Developer
          </p>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Zahid Aslam. All rights reserved.
            </span>

            <span>
              Built with React & Bootstrap
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;