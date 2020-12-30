import React from 'react';
import ReactDOM, { render } from 'react-dom';

// function()

function push(){
  alert("Nice job, Igor!");
}
const myelement = <button onClick={push}>Click the button</button>
ReactDOM.render(myelement, document.getElementById('function'));

// event handlers

class Button extends React.Component {
  launch() {
    alert("Here is some message");
  }
  render() {
    return(
      <button onClick={this.launch}>Push the button</button>
    );
  }
}
ReactDOM.render(<Button />, document.getElementById('root'));


// bind this

class Option extends React.Component {
  pick() {
    alert("Pick 1 of 2.");
  }
  constructor(props){
    super(props);
    this.state=this.pick.bind(this);
  }
  render() {
    return(
      <button onClick={this.pick}>Choice</button>
    );
  }
}
ReactDOM.render(<Option />, document.getElementById('root2'));

// Arguments Passing

class Choice extends React.Component {
  choose(x) {
    alert(x);
  }
  render(){
    return(
      <button onClick={this.choose.bind(this, "You've made a lucky choice")}>What's your choice?</button>
    );
  }
}
ReactDOM.render(<Choice />, document.getElementById('root3'));


// React Event Object

class Variant extends React.Component {
  /*
  opt(a,b){
    alert(a.type);
  }
  */ // This method does work

  /*
  opt = (a,b) => {
    alert(a.type);
  }
  */ // This method does work
  /*
  opt(a,b) {
    alert(b.type);
  }
  */ // This method does work
  opt = (a,b) => {
    alert(b.type);
  }

  render(){
    return(
      <button onClick={this.opt.bind(this, "Done!")}>To click the button or not</button>
    );
  }
}
ReactDOM.render(<Variant />, document.getElementById('root4'));
