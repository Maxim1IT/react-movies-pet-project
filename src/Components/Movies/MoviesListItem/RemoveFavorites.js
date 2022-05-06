import React from 'react';

function RemoveFavorites(props) {
    return (
        <div onClick={() => props.deleteFavorites(props.el)} className="moviesListItemHoverMenu">
            {props.hoverMenu}
        </div>
    );
}

export default RemoveFavorites;