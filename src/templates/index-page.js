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
                  className="page-title"
                >
                  Thinking About Things
                </h1>
              </div>
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
