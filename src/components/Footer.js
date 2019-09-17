import React from 'react'

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <div className="credit">
          Liam Kennedy - 2019
        </div>
        <div className="column is-6">
          Adapted from <a href="https://github.com/netlify-templates/gatsby-starter-netlify-cms">Gatsby+Netlify CMS Starter</a>
        </div>
      </footer>
    )
  }
}

export default Footer
