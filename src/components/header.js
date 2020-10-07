import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import StoreContext from "./store/context"

const Header = () => {

  const {
    store: { checkout },
  } = useContext(StoreContext)


  return (
    <header class="sticky">
      <h1>
        <Link to="/">
          <a class="title-letter">N</a>
          <a class="title-letter">O</a>
          <a class="title-letter">N</a>
          <a class="title-letter">A</a>
          <a class="title-letter">M</a>
          <a class="title-letter">E</a> <a class="title-letter">P</a>
          <a class="title-letter">R</a>
          <a class="title-letter">E</a>
          <a class="title-letter">S</a>
          <a class="title-letter">S</a>
        </Link>
      </h1>
      <div class="nav-links">
        <Link to="/contact">→ Blog</Link>
        <Link to="/about">→ About</Link>
      </div>
      <div class="cart">
        <Link to="/cart">Cart: {checkout.lineItems.length}</Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
