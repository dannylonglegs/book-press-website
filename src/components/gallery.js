import React, { useState, useEffect, createRef } from "react"
import Img from "gatsby-image"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Gallery = props => {

  const [currentIndex, setCurrentIndex] = useState( 1 )

  const customSlider = createRef();

  const next = () => {
    customSlider.current.slickNext()
  }
  const previous = () => {
    customSlider.current.slickPrev()
  }

  const afterChangeHandler = (e) => {
    setCurrentIndex(e + 1);
  }

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  let images = props.images.map((img, i) => {
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


    return (
      <div class="gallery">
        <Slider ref={customSlider} {...settings} afterChange={afterChangeHandler}>
          {images}
        </Slider>
        <button className="button previous" onClick={previous}>
        </button>
      
        <button className="button next"  onClick={next}>
          <div class="gallery-counter">{(currentIndex) + "/" + (props.images.length)}</div>
        </button>
      </div>
    )
}

export default Gallery;
