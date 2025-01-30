import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "../styles/styles.css";


const Books = () =>{
    const[books, setBooks] = useState([]);

    useEffect (()=>{
        fetch("https://beryl-ember-havarti.glitch.me/books")
        .then((res) => res.json())
        .then((data) => setBooks(data));

    },[]);

    return(
        <div className="container">
            <h2>Books</h2>
            <ul>
                {books.map((book)=>(
                    <li key={book.id}>
                        <Link to = {`/books/${book.id}`}>{book.name} - ${book.price}</Link>
                    </li>
                    
                ))}
            </ul>
        </div>
    );
};

export default Books;