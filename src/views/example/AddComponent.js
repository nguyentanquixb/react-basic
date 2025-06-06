import React, { Component } from 'react';

class AddComponent extends Component {

    state = {
        title: '',
        salary: '',
    } 

  handleOnchangetitle = (event)=>{
    this.setState({
      title: event.target.value
    })
  }
  handleOnchangesalary = (event)=>{
    this.setState({
      salary: event.target.value
    })
  }
  submit = (event)=>{
    event.preventDefault();
    console.log('check data state',this.state)
    if(!this.state.title || !this.state.salary){
        alert('missing required params')
        return;
    }
    this.props.addNewJob({
        id: Math.floor(Math.random()*100),
        title: this.state.title,
        salary: this.state.salary
    })
    this.setState({
        title:'',
        salary:''
    })
  }


    render() {
        return (
            <div>
                 <form >
          <label htmlFor="fname"> Title Job:</label><br/>
          <input type="text" id="fname" name="fname" value={this.state.title} onChange = {(event)=>{this.handleOnchangetitle(event)}} /><br/>
          <label htmlFor="lname">Salary :</label><br/>
          <input type="text" id="lname" name="lname" value={this.state.salary} onChange = {(event)=> {this.handleOnchangesalary(event)}} /><br/><br/>
          <input type="submit" value="Submit" onClick ={(event)=> {this.submit(event)}} />
        </form> 
            </div>
        );
    }
}

export default AddComponent;