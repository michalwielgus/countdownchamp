import React from 'react';
import  '../styles/App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

var countdown;

class Stopwatch extends React.Component {

    constructor(props) {
        super(props);
        this.state = { timeToCountdown: 60, newTimeToCountdown: 0 };
    }

    componentDidMount() {
        this.startCountdown();
    }

    updateCountdown() {
        clearInterval(countdown);
        this.setState({ timeToCountdown: this.state.newTimeToCountdown });
        this.startCountdown();
        console.log(this.state.timeToCountdown);
    }

    startCountdown() {
        countdown = setInterval(() => {

            if(this.state.timeToCountdown == 1)
                clearInterval(countdown)
            this.setState(({ timeToCountdown: this.state.timeToCountdown - 1 }))
        }, 1000)
    }

    render(){
        return (
            <div className="app">
                <div className="app-title">
                    Time left: {this.state.timeToCountdown} s
                </div>
                <Form>
                    <FormControl placeholder="Time to countdown" onChange={event => this.setState({newTimeToCountdown: event.target.value})} />
                    <Button onClick={() => this.updateCountdown()}>Countdown</Button>
                </Form>
            </div>
        );
    };
}

export default Stopwatch;
