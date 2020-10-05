import React, { Component } from "react"
import Img from "gatsby-image"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default class Gallery extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }

  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }

  render() {
    let images = this.props.images.map((img, i) => {
      console.log(img)

      return (
        <div class="image-wrapper">
          <Img
            fluid={img.localFile.childImageSharp.fluid}
            objectFit="contain"
            imgStyle={{
              objectFit: "contain",
            }}
          />
        </div>
      )
    })

    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    return (
      <div class="gallery">
        <Slider ref={c => (this.slider = c)} {...settings}>
          {images}
        </Slider>
        <button className="button previous" onClick={this.previous}>
        </button>
        <button className="button next" onClick={this.next}>
        </button>
      </div>
    )
  }
}
