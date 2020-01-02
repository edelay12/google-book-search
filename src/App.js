import React from 'react';
import './App.css';
import SearchForm from './components/searchForm/searchForm';
import Result from './components/resultsPage/resultsPage'

class App extends React.Component {
 
 
  constructor(props){
    super(props);
    this.state = {
      input : 'hello from state',
      results : null,

    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.input)
    let input = this.state.input;
    const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${input}&key=AIzaSyBi6mpzqollrTUo2XgzQA_KxMD1JBAjNc4`;
    
    fetch(url)
    .then(Response => {
     if (Response.ok) {
       return Response.json();
     }
     throw new Error(Response.statusText)
    }).then(ResponseJson => {
      console.table(ResponseJson)
      this.setState({results: ResponseJson})
      console.log('response: '+ this.state.results)
      this.setState({display : true})
    }).catch(err => {
      console.log(err)
    })
  }
  
  handleInput = (f) => {
    console.log(f.target.value)
this.setState({input: f.target.value});
  }

  render() {

  return (
    <div className="App">
        <div className='header grid1'>
          <h1 className='title'>Google Book Search</h1>
        </div>

        <div className='searchForm grid2'>
          <SearchForm change={this.handleInput} userInput={this.handleSubmit}/>
        </div>

        <div className='filterForm grid3'>

</div>
  
        <div className='resultsPage grid4'>
          {this.state.results === null ? <h1></h1> : <Result li={this.state.results}/> }
        </div>
    </div>
  );
}
}

export default App;
