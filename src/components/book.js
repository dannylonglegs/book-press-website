import React, { useEffect, useState, useContext } from "react"
import Gallery from "./gallery"
import StoreContext from "./store/context"
import { Link } from "gatsby"

const Book = props => {
  const {
    addVariantToCart,
    removeLineItem,
    store: { client, adding, checkout },
  } = useContext(StoreContext)

  const [top, setTop] = useState(0)
  const [bottom, setBottom] = useState(0)
  const [currentlyActive, setCurrentlyActive] = useState(false)
  const [isInCart, setIsInCart] = useState(false)
  const [idArr, setIdArr] = useState([])
  const [lineItemId, setLineItemId] = useState(null)

  useEffect(() => {
    getScrollPosition()
    checkCurrentlyActive()
    setFocusedThumbnail()
  }, [props.scrollPosition])

  useEffect(() => {
    setIdArray()
    getId(idArr, props.book.title)
    checkInCart(props.book.title)
  }, [isInCart, checkout.lineItems])

  const checkInCart = async title => {
    let titles = await checkout.lineItems.map(item => {
      return item.title
    })

    let inThere = await titles.includes(title)
    setIsInCart(inThere)
  }

  const setIdArray = () => {
    let idArr = checkout.lineItems.map(item => {
      return {
        title: item.title,
        id: item.id,
      }
    })
    setIdArr(idArr)
  }

  const getId = (array, title) => {
    array.map(item => {
      if (item.title === title) {
        setLineItemId(item.id)
      }
    })
  }

  const getScrollPosition = () => {
    let top = document.getElementById("book-" + props.index).offsetTop - 120
    let height = document.getElementById("book-" + props.index).offsetHeight
    let bottom = top + height
    setBottom(bottom)
    setTop(top)
  }

  const checkCurrentlyActive = () => {
    if (props.scrollPosition >= top && props.scrollPosition <= bottom) {
      setCurrentlyActive(true)
    } else {
      setCurrentlyActive(false)
    }
  }

  const setFocusedThumbnail = () => {
    let thumbnail = document.getElementById("thumbnail-" + props.index)
    if (currentlyActive) {
      thumbnail.classList.add("focused")
    } else {
      thumbnail.classList.remove("focused")
    }
  }

  const addToCart = () => {
    addVariantToCart(props.book.variants[0].shopifyId, 1).then(() => {
      setIsInCart(true)
    })
  }

  const removeFromCart = () => {
    removeLineItem(client, checkout.id, lineItemId).then(() => {
      setIsInCart(false)
    })
  }

  return (
    <div class={"book"} id={"book-" + props.index}>
      <h1>{props.book.title}</h1>
      <h2>{props.book.vendor}</h2>
      <Gallery images={props.book.images} />
      <div class="description-and-buttons">
        <div>
          <p>{props.book.description}</p>
        </div>
        <div class="buttons">
          <Link to={"/" + props.book.handle}>
            <button class="read-more">Read More</button>
          </Link>
          <button
            class="add-to-cart"
            onClick={isInCart ? removeFromCart : addToCart}
          >
            {isInCart ? "Remove From Cart" : "Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Book
