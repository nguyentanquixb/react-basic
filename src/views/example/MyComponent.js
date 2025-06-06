import React, { Component } from "react";

class MyComponent extends Component {

  state = {
    firstName: '',
    lastName: ''
  } 

  handleOnchangeFirstName = (event)=>{
    this.setState({
      firstName: event.target.value
    })
  }
  handleOnchangeLastName = (event)=>{
    this.setState({
      lastName: event.target.value
    })
  }
  submit = (event)=>{
    event.preventDefault();
    console.log('check data state',this.state)
  }

  render() {
    return (
      <React.Fragment>
        <form >
          <label htmlFor="fname">First name:</label><br/>
          <input type="text" id="fname" name="fname" value={this.state.firstName} onChange = {(event)=>{this.handleOnchangeFirstName(event)}} /><br/>
          <label htmlFor="lname">Last name:</label><br/>
          <input type="text" id="lname" name="lname" value={this.state.lastName} onChange = {(event)=> {this.handleOnchangeLastName(event)}} /><br/><br/>
          <input type="submit" value="Submit" onClick ={(event)=> {this.submit(event)}} />
        </form> 
      </React.Fragment>
    );
  }
}

export default MyComponent;
