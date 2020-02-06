import React from 'react';
import './AddPlayer.css';

const AddPlayer = (props) => {
    return (
        <form className="AddPlayer">
            <input type="text" className="AddPlayer__input" />
            <input type="submit" className="AddPlayer__submit" value="Add" />
        </form>
    )
};

export default AddPlayer;