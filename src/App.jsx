import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      deadLine: 'December 25, 2017',
      newDeadline: ''
    };
  }

  changeDeadline() {
    this.setState({ deadLine: this.state.newDeadline });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">
          Countdown to {this.state.deadLine}
        </div>
        <Clock
          deadLine={this.state.deadLine}
        />
        <Form inline>
          <FormControl
            className="Deadline-input"  
            onChange={event => this.setState({newDeadline:event.target.value})}
            placeholder="new date"
          />
          <Button onClick={()=> this.changeDeadline()}>
            Submit
          </Button>
        </Form>
      </div>  
    )
  }
} 

export default App;