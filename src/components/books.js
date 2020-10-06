import React, { useEffect, useState } from "react"

import Gallery from "../components/gallery"
import Book from "./book";

const Books = props => {
  const [bookPositions, setBookPositions] = useState([])
  const [currentPosition, setCurrentPosition] = useState(0)

  let books = props.books.map((book, i) => {
    return (
      <Book scrollPosition={currentPosition} book={book} index={i} />
    )
  })

  useEffect(() => {
    // getScrollPositions(books)
    document
      .getElementById("main")
      .addEventListener("scroll", handleScroll)
    return () =>
      document
        .getElementById("main")
        .removeEventListener("scroll", handleScroll)
  }, [bookPositions])

  // useEffect(()=> {
  //   focus(currentPosition, bookPositions);
  // }, [currentPosition])

  const handleScroll = event => {
    setCurrentPosition(event.target.scrollTop);
    // event.target.scrollTop
  }

  const getScrollPositions = async books => {
    // let tops = []
    // await books.map((book, i) => {
    //   let el = document.getElementById("book-" + i).offsetTop
    //   tops.push(el)
    // })
    // setBookPositions(tops)
  }

  const focus = (scrollPosition, bookPositions) => {
    // if(scrollPosition >= bookPositions[0]){
    //   let thumbnail = document.getElementById("thumbnail-0")
    //   thumbnail.classList.add("focused");
    // }
    // if(scrollPosition >= bookPositions[1]){
    //   let thumbnail = document.getElementById("thumbnail-1")
    //   thumbnail.classList.add("focused");
    // }
  }

  return (
    <section class="books" id="books">
      {books}
    </section>
  )
}

export default Books
