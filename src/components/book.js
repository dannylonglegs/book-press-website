import React, { useEffect, useState } from "react"
import Gallery from "./gallery"

const Book = props => {

    const [top, setTop] = useState(0);
    const [bottom, setBottom] = useState(0);
    const [currentlyActive, setCurrentlyActive] = useState(false);

    useEffect( () => {
        getScrollPosition();
        checkCurrentlyActive();
        setFocusedThumbnail();
    }, [props.scrollPosition]);

    const getScrollPosition = () => {
       let top = document.getElementById("book-" + props.index).offsetTop - 50 ;
       let height = document.getElementById("book-" + props.index).offsetHeight;
       let bottom = top + height - 50;
       setBottom(bottom);
       setTop(top);
    }

    const checkCurrentlyActive = () => {
        if(props.scrollPosition >= top && props.scrollPosition <= bottom ) {
            setCurrentlyActive(true)
        } else {
            setCurrentlyActive(false)
        }
    }

    const setFocusedThumbnail = () => {
        let thumbnail = document.getElementById("thumbnail-" + props.index);
        if(currentlyActive){
            thumbnail.classList.add("focused")
        } else {
            thumbnail.classList.remove("focused")
        }
    }

    return (
        <div class={ "book" } id={"book-" + props.index}>
          <h1>{props.book.title}</h1>
          <p>{props.book.description}</p>
          <Gallery images={props.book.images} />
        </div>
      )
}

export default Book;