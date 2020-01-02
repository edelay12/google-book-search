import React from 'react';
import './searchForm.css'



export default class SearchForm extends React.Component{

   render(){
    return (
        <form className='mainForm'>
            <input type='text' placeholder='Name of book..' onChange={this.props.change} className='searchBox' />
            <button type='submit' onClick={this.props.userInput} className='searchButton'>Search</button>
        </form>
    )
   }
}