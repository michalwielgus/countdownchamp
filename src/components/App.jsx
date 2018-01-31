import React from 'react';
import  '../styles/App.css';
import Clock from './Clock.jsx';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'May 13, 2018',
            newDeadline: ''
        }
    }

    changeDeadline() {
        this.setState({deadline: this.state.newDeadline})
    }

    render() {
        return (
            <div className="app">
                <div className="app-title">
                    Countdown to {this.state.deadline}
                </div>
                <Clock deadline={this.state.deadline}/>
                <Form inline>
                    <FormControl
                        placeholder="Enter date"
                        onChange={event => this.setState({newDeadline: event.target.value})}
                    />
                    <Button onClick={() => this.changeDeadline()}>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default App;
