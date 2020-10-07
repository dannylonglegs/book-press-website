import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link to="/">
          <span class="title-letter">N</span>
          <span class="title-letter">O</span>
          <span class="title-letter">N</span>
          <span class="title-letter">A</span>
          <span class="title-letter">M</span>
          <span class="title-letter">E</span>
          {" "}
          <span class="title-letter">P</span>
          <span class="title-letter">R</span>
          <span class="title-letter">E</span>
          <span class="title-letter">S</span>
          <span class="title-letter">S</span>
        </Link>
      </h1>
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
