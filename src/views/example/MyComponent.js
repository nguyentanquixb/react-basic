import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends Component {

  state = {
    arrJob:[
      {id:1, title:'dev', salary:'500'},
      {id:2, title:'tester', salary:'400'},
       {id:3, title:'managers', salary:'1000'}
    ]
  } 

  addNewJob = (job)=>{
    console.log('job',job)
    this.setState({
      arrJob: [...this.state.arrJob,job]
    })
  }

  render() {
    return (
      <React.Fragment>
        <AddComponent addNewJob={this.addNewJob} />
        <ChildComponent  arrJob ={this.state.arrJob} />
    
      </React.Fragment>
    );
  }
}

export default MyComponent;
