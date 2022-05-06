import React from 'react';
import './MoviesListItem.css'
import AddFavorites from "./AddFavorites";

function MoviesListItem(props) {
    console.log((props.el))
    return (
        <a className='moviesListItemLink' >
            <div className="moviesListItem">
                {props.FavoritesBlock}
                <img className='moviesListItemImg' src={props.img} alt=""/>
                <p>{props.title}</p>
            </div>
        </a>

    );
}

export default MoviesListItem;