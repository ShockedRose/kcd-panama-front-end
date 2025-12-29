import * as React from "react"
import Layout from "../components/layout"

const SponsorsPage = () => {
  return (
    <Layout>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">Sponsors</h1>
            <p className="subtitle is-3">Support KCD Toronto 2026</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="box has-background-info-light">
            <h2 className="title is-3 has-text-centered">Become a Sponsor</h2>
            <div className="content">
              <p className="has-text-centered is-size-5">
                KCD Toronto 2026 is made possible by the generous support of our sponsors. By sponsoring KCD Toronto,
                you'll connect with the Canadian cloud native community and showcase your commitment to open source innovation.
              </p>
              <div className="has-text-centered mt-5">
                <a href="mailto:sponsors@kcdtoronto.ca" className="button is-primary is-large">
                  <strong>View Sponsorship Prospectus</strong>
                </a>
              </div>
            </div>
          </div>

          <h2 className="title is-2 mt-6 mb-5">Why Sponsor?</h2>
          <div className="columns is-multiline">
            <div className="column is-6">
              <div className="box">
                <h3 className="title is-4">Brand Visibility</h3>
                <p>Get your brand in front of hundreds of cloud native professionals</p>
              </div>
            </div>
            <div className="column is-6">
              <div className="box">
                <h3 className="title is-4">Community Engagement</h3>
                <p>Connect directly with developers, architects, and decision-makers</p>
              </div>
            </div>
            <div className="column is-6">
              <div className="box">
                <h3 className="title is-4">Talent Acquisition</h3>
                <p>Meet potential candidates in the cloud native space</p>
              </div>
            </div>
            <div className="column is-6">
              <div className="box">
                <h3 className="title is-4">Thought Leadership</h3>
                <p>Position your company as a leader in cloud native technologies</p>
              </div>
            </div>
          </div>

          <h2 className="title is-2 mt-6 mb-5 has-text-centered">Sponsorship Tiers</h2>

          <div className="box mb-5">
            <h3 className="title is-3" style={{ color: "#FFD700" }}>🏆 Platinum Sponsors</h3>
            <p>Premium visibility including keynote opportunity, largest booth space, logo placement on all materials, and 10 conference passes.</p>
            <div className="columns mt-4">
              <div className="column is-4">
                <div className="box has-text-centered has-background-light" style={{ border: "2px dashed #ccc" }}>
                  <p className="has-text-grey">Your Logo Here</p>
                </div>
              </div>
            </div>
          </div>

          <div className="box mb-5">
            <h3 className="title is-3" style={{ color: "#C0C0C0" }}>🥈 Gold Sponsors</h3>
            <p>High visibility including booth space, logo on website and signage, speaking opportunity, and 6 conference passes.</p>
            <div className="columns mt-4">
              {[1, 2].map((i) => (
                <div key={i} className="column is-4">
                  <div className="box has-text-centered has-background-light" style={{ border: "2px dashed #ccc" }}>
                    <p className="has-text-grey">Your Logo Here</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="box mb-5">
            <h3 className="title is-3" style={{ color: "#CD7F32" }}>🥉 Silver Sponsors</h3>
            <p>Logo on website, signage, and promotional materials, plus 3 conference passes.</p>
            <div className="columns is-multiline mt-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="column is-4">
                  <div className="box has-text-centered has-background-light" style={{ border: "2px dashed #ccc" }}>
                    <p className="has-text-grey">Your Logo Here</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="box has-background-light mt-6">
            <h3 className="title is-4">Interested in Sponsoring?</h3>
            <p>
              Contact us to discuss custom opportunities including lunch sponsorship, coffee breaks, swag bags, and more.
            </p>
            <p className="mt-3">
              <strong>Email:</strong> <a href="mailto:sponsors@kcdtoronto.ca">sponsors@kcdtoronto.ca</a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SponsorsPage

export const Head = () => <title>Sponsors - KCD Toronto 2026</title>
