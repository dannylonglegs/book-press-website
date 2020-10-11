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
      <h1 class="title">
        <Link to="/">
          <span class="title-letter">N</span>
          <span class="title-letter">O</span>
          <span class="title-letter">N</span>
          <span class="title-letter">A</span>
          <span class="title-letter">M</span>
          <span class="title-letter">E</span> <span class="title-letter">P</span>
          <span class="title-letter">R</span>
          <span class="title-letter">E</span>
          <span class="title-letter">S</span>
          <span class="title-letter">S</span>
        </Link>
      </h1>
      <div class="nav-links">
        <Link to="/blog">→ Blog</Link>
        <Link to="/about">→ About</Link>
        <Link to="/cart" className="cart">Cart: {checkout.lineItems.length}</Link>
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
