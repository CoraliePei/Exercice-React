import './Message.css';
import React from 'react';

export default function Message(props) {
    return (
        <div className='message'>
            <h2>Les props dans React</h2>
            <h3>Salut {props.prenom} !</h3>
            <p>{props.messagePasse}</p>
        </div>
    )
}