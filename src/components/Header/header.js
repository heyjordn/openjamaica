import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Bird from "../../images/bird.svg"
import "./header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-wrapper">
      <Link to="/">
        <div className="logo" aria-label="Logo">
          <img className="bird" src={Bird} alt="Logo" />

          <h1>{siteTitle}</h1>
        </div>
      </Link>

      <div className="star">
        <iframe
          src="https://ghbtns.com/github-btn.html?user=jordanliu&repo=openjamaica&type=star&count=true"
          frameBorder="0"
          scrolling="0"
          width="150"
          height="20"
          title="GitHub"
        />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
