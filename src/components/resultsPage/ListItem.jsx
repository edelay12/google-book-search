import React from 'react';
import './listItem.css'
export default function ListItem(props){
    return (
    <div>
        <h1 className='title'> {props.title}</h1>
        <h3 className='author'> {props.author}</h3>
        <h3 className='bio'> {props.bio}</h3>
        <img className='imgS' src={props.source} alt='image'/>
        <hr/>
    </div>
    )
}