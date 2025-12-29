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
                Email: <a href="mailto:info@kcdtoronto.ca" className="has-text-white-ter">info@kcdtoronto.ca</a><br />
                Follow us on social media for updates
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
