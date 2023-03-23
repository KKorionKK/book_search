import React from "react";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import '../styles/Detailed.css';

const ItemDetails = ({itemUrl}) => {
    const item = useParams().id;
    const books = useSelector(state => state.books);
  
    return(
        <div className="detailedPage">
            <h1>{books[item][0]}</h1>
            <div className="detailedInfo">
                <img className="detailedImg" src={books[item][3]}/>
                <div>
                    <h2>Категории</h2>
                    <span>{books[item][1]}</span>
                    <h2>Авторы</h2>
                    <span>{books[item][2]}</span>
                    <h2>Описание</h2>
                    <span>{books[item][5]}</span>
                </div>
            </div>
        </div>
    );
  }

export default ItemDetails;