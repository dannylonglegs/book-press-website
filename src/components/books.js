import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery"

const Books = props => {
  console.log(props.books)

  let books = props.books.map(book => {
    console.log(book)
    return (
      <div class="book">
        <h1>{book.title}</h1>
        <p>{book.description}</p>
        <Gallery images={book.images} />
      </div>
    )
  })

  return <section class="books">{books}</section>
}

export default Books
