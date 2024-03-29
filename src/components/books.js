import React, { useEffect, useState } from "react"
import Book from "./book";

const Books = props => {
  const [currentPosition, setCurrentPosition] = useState(0)

  let books = props.books.map((book, i) => {
    return (
      <Book scrollPosition={currentPosition} book={book} index={i} />
    )
  })

  useEffect(() => {
    document
      .getElementById("main")
      .addEventListener("scroll", handleScroll)
    return () =>
      document
        .getElementById("main")
        .removeEventListener("scroll", handleScroll)
  }, [])

  const handleScroll = event => {
    setCurrentPosition(event.target.scrollTop);
  }

  return (
    <section class="books" id="books">
      <div class="books-title">
        <span class="">B</span>
        <span class="">O</span>
        <span class="">O</span>
        <span class="">K</span>
        <span class="">S</span>
      </div>
      {books}
    </section>
  )
}

export default Books
