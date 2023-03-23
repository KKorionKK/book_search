import React from 'react';
import { Link } from 'react-router-dom';


function BookCard(props) {
    return (
        <div className='card'>
            <Link to={`/items/${props.id}`} className="cardLink">
            <img className='bookImage' src={props.imgSrc}/>
            <div>
                <p>{props.name}</p>
                <span>{props.category}</span><br/>
                <span>{props.authors}</span>
            </div>
            </Link>
        </div>
    );
  }
export default BookCard;