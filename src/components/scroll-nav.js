import React from "react"
import Img from "gatsby-image"

const ScrollNav = props => {

  console.log(props.books, "books in scroll-nav")

  let thumbnails = props.books ? props.books.map((book, i) => {
    return (
      <div class="thumbnail" id={"thumbnail-" + i}>
        <Img
          fluid={book.images[0].localFile.childImageSharp.fluid}
          objectFit="contain"
          imgStyle={{
            objectFit: "contain",
          }}
        />
      </div>
    )
  }) : null;

  return <section class="scroll-nav">{thumbnails}</section>
}

export default ScrollNav
