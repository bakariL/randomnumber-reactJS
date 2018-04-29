import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Random Number Generator</h1>
        </header>
        <Body />
      </div>
    );
  }
}


class Body extends Component{
 constructor(props){
   super(props);
   this.state ={
     r: 0
   };
   this.getRandomNumber = this.getRandomNumber.bind(this);
 } 

 getRandomNumber(){
   console.log("random check here");
   this.setState({r:Math.floor(Math.random()*10)})
   
 }
  render() {
    return (
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.getRandomNumber}>Random Number</button>
        <Numberss myNumber={this.state.r}/>
      </div>
    );
  }
}


class Numberss extends Component{
  render(){
    return(
      <div>
        <br />
        {this.props.myNumber}
      </div>
    )
  }

}



export default App;
