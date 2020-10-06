import React, { Component } from "react"
import Img from "gatsby-image"

export default class ScrollNav extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let thumbnails = this.props.books.map((book, i) => {
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
    })
    return <section class="scroll-nav">{thumbnails}</section>
  }
}
