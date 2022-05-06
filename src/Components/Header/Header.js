import React from 'react';
import './Header.css'

function Header(props) {
    let changeValue = (prevValue) => {
        props.setSearchValue(prevValue.target.value);
    }


    return (
        <div>
            <div className="container">
                <header>
                    <div className="headerLogo">
                        <span>MOVIES</span>
                    </div>
                    <div className="headerInput">
                        <input onChange={changeValue} value={props.searchValue} className="form-control"
                               placeholder="Select a movie..." type="text"/>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default Header;