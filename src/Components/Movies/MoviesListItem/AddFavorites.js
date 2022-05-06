import React from 'react';

function AddFavorites(props) {
    return (
        <div onClick={() => props.handleFavorites(props.el)} className="moviesListItemHoverMenu">
            {props.hoverMenu}
        </div>
    );
}

export default AddFavorites;