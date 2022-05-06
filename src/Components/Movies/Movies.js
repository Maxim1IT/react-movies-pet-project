import React, {useEffect, useState} from 'react';
import './Movies.css'
import MoviesListItem from "./MoviesListItem/MoviesListItem";
import AddFavorites from "./MoviesListItem/AddFavorites";
import RemoveFavorites from "./MoviesListItem/RemoveFavorites";

function Movies(props) {

    const hoverMenuHeart = <span>&#10084;</span>
    const hoverMenuClose = <span>&#x2715;</span>

    return (
        <main>
            <div className="container">
                <div className="moviesTitle">
                    <h3>Movies list</h3>
                </div>
                <div className="moviesList">
                    {
                        props.moviesList.map((el, key) => {
                            return <MoviesListItem key={key}
                                                   img={el.Poster}
                                                   title={el.Title}
                                                   hoverMenu={hoverMenuHeart}
                                                   handleFavorites={props.handleFavorites}
                                                   el={el}
                                                   FavoritesBlock={<AddFavorites hoverMenu={hoverMenuHeart}
                                                                                    handleFavorites={props.handleFavorites}
                                                                                    el={el}/>}

                            />
                        })
                    }
                </div>
                <div className="moviesTitle">
                    <h3>Favorites</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                        <path
                            d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                    </svg>
                </div>
                <div className="moviesList">
                    {
                        props.favoritesList.map((el, key) => {
                            return <MoviesListItem key={key}
                                                   img={el.Poster}
                                                   title={el.Title}
                                                   hoverMenu={hoverMenuClose}
                                                   deleteFavorites={props.deleteFavorites}
                                                   el={el}
                                                   FavoritesBlock={<RemoveFavorites hoverMenu={hoverMenuClose}
                                                                                    deleteFavorites={props.deleteFavorites}
                                                                                    el={el}/>}
                            />
                        })
                    }
                </div>

            </div>
        </main>
    );
}

export default Movies;