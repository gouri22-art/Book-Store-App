import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/styles.css";

const BookDetail = () =>{

    const{id} = useParams();
    const[book, setBook] = useState(null);

    useEffect(() =>{
        fetch(`https://beryl-ember-havarti.glitch.me/books/${id}`)
        .then((res)=> res.json())
        .then((data) => setBook(data));
    }, [id]);

    if(!book) return <p>Loading ...</p>;
    return(
        <div className="container">
            <h2>{book.name}</h2>
            <p>Category:{book.category}</p>
            <p>Price:{book.price}</p>
        </div>
    );
};

export default BookDetail;