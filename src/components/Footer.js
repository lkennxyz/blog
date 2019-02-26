import React from 'react'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
              <div className="columns">
                <div className="column is-6">
                  <div className="credit">
                    Liam Kennedy - 2019
                  </div>
                </div>
                <div className="column is-6">
                  Adapted from <a href="https://github.com/netlify-templates/gatsby-starter-netlify-cms">Gatsby+Netlify CMS Starter</a>
                </div>
              </div>
            </div>
        </div>
      </footer>
    )
  }
}

export default Footer
