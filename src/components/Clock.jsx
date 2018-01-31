import React from 'react';
import '../styles/App.css';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }

    }

    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }

    getTimeUntil(deadline) {
        const time = this.leading0(Date.parse(deadline) - Date.parse(new Date()));
        const seconds = this.leading0(Math.floor((time / 1000) % 60));
        const minutes = this.leading0(Math.floor((time / 1000 / 60) % 60));
        const hours = this.leading0(Math.floor(time / (1000 * 60 * 60) % 24));
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

        this.setState({time, seconds, minutes, hours, days});
    }

    leading0(num) {
        return num < 10 ? '0' + num : num;
    }

    render() {
        return (
            <div>
                <div className="clock clock-days">{this.state.days} days</div>
                <div className="clock clock-hours">{this.state.hours} hours</div>
                <div className="clock clock-minutes">{this.state.minutes} minutes</div>
                <div className="clock clock-seconds">{this.state.seconds} seconds</div>
            </div>
        )
    }
}

export default Clock;
