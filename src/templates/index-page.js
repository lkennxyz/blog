import React from 'react'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

export default class IndexPage extends React.Component {
  render() {
    
  return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <div>
                <h1
                  className="has-text-weight-bold is-size-1"
                  style={{
                    boxShadow: '0.5rem 0 0 #1E88E5, -0.5rem 0 0 #1E88E5',
                    backgroundColor: '#1E88E5',
                    color: 'white',
                    padding: '1rem',
                  }}
                >
                  Latest Stories
                </h1>
              </div>
            </div>
            <BlogRoll />
          </div>
        </section>
      </Layout>
    )
  }
}
