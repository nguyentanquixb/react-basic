import React, { Component } from "react";

class MyComponent extends Component {

    state = {
        name: 'qui',
        channel: 'react demo'
    }
    handleChangeName = (event)=>{
        this.setState({
            name :event.target.value
        })
    }
    handleClickButton = ()=>{
        alert('click me')
    }
  render() {
    return (
      <React.Fragment>
        <div>
            <input value = {this.state.name} type = "text" onChange = {(event) => this.handleChangeName(event)}  ></input>
            my name is {this.state.name}
        </div>
        <div>
            my channel {this.state.channel}
        </div>
        <div>
            
            <button onClick = {()=> this.handleClickButton()}  type="button" class="btn btn-default">click me</button>
            
        </div>
      </React.Fragment>
    );
  }
}

export default MyComponent;
