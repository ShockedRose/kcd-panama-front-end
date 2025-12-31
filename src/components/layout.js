import * as React from "react"
import { Link } from "gatsby"
import "bulma/css/bulma.min.css"
import "./layout.css"

const Layout = ({ children }) => {
  const [isActive, setIsActive] = React.useState(false)

  return (
    <div className="site-wrapper">
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <strong style={{ fontSize: "1.2rem" }}>KCD Toronto 2026</strong>
            </Link>

            <button
              className={`navbar-burger ${isActive ? "is-active" : ""}`}
              aria-label="menu"
              aria-expanded="false"
              onClick={() => setIsActive(!isActive)}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>

          <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
            <div className="navbar-end">
              <Link to="/about" className="navbar-item">
                About
              </Link>
              <Link to="/schedule" className="navbar-item">
                Schedule
              </Link>
              <Link to="/speakers" className="navbar-item">
                Speakers
              </Link>
              <Link to="/sponsors" className="navbar-item">
                Sponsors
              </Link>
              <Link to="/community" className="navbar-item">
                Community
              </Link>
              <Link to="/venue" className="navbar-item">
                Venue
              </Link>
              <Link to="/team" className="navbar-item">
                Team
              </Link>
              <Link to="/code-of-conduct" className="navbar-item">
                Code of Conduct
              </Link>
              <div className="navbar-item">
                <div className="buttons">
                  <a href="#register" className="button is-light">
                    <strong>Register</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="footer has-background-primary has-text-white-ter">
        <div className="container">
          <div className="columns">
            <div className="column is-4">
              <h4 className="title is-5 has-text-white">KCD Toronto 2026</h4>
              <p>
                Kubernetes Community Days Toronto is a community-organized event
                bringing together the cloud native community.
              </p>
            </div>
            <div className="column is-4">
              <h4 className="title is-5 has-text-white">Quick Links</h4>
              <ul>
                <li><Link to="/about" className="has-text-white-ter">About</Link></li>
                <li><Link to="/speakers" className="has-text-white-ter">Speakers</Link></li>
                <li><Link to="/sponsors" className="has-text-white-ter">Sponsors</Link></li>
                <li><Link to="/code-of-conduct" className="has-text-white-ter">Code of Conduct</Link></li>
              </ul>
            </div>
            <div className="column is-4">
              <h4 className="title is-5 has-text-white">Contact</h4>
              <p>
                Email: <a href="mailto:toronto-org@kubernetescommunitydays.org" className="has-text-white-ter">toronto-org@kubernetescommunitydays.org</a>
              </p>
              <h4 className="title is-5 has-text-white mt-4">Follow Us</h4>
              <p>
                <a
                  href="https://www.linkedin.com/company/kcdtoronto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="has-text-white-ter"
                  style={{ fontSize: "1.5rem", marginRight: "1rem" }}
                  aria-label="Follow us on LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ verticalAlign: "middle" }}
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  {" "}LinkedIn
                </a>
              </p>
            </div>
          </div>
          <div className="content has-text-centered mt-5">
            <p className="has-text-white-ter">
              &copy; 2026 KCD Toronto. Part of the{" "}
              <a href="https://www.cncf.io/" target="_blank" rel="noopener noreferrer" className="has-text-white">
                CNCF
              </a>{" "}
              Kubernetes Community Days program.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
