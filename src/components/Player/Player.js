import React from 'react';

import { Button } from 'reactstrap';
import './Player.css';

const Player = (props) => (

    <th className="Player" scope="row">
        <td className="Player__name">{props.name}</td>
        <td className="Player__score">{props.score}</td>
        <td className="Player__button_set">
            <Button color='secondary' className="Player__button" onClick={() => props.onPlayerScoreChange(1)}>+</Button>
            <Button color='secondary' className="Player__button" onClick={() => props.onPlayerScoreChange(-1)}>-</Button>
        </td>    
    </th>
);

export default Player;