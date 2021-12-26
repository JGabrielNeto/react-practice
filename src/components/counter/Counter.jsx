import React from "react";

export const Counter = class Counter extends React.Component {
    state = {
        pace: 1,
        value: 0
    }

    inc = () => {
        this.setState({
            value: this.state.value + this.state.pace
        })
    }

    dec = () => {
        this.setState({
            value: this.state.value - this.state.pace
        })
    }

    render() {
        return (
            <>
                <h2>Counter</h2>
                <h4>Value: {this.state.value}</h4>
                <div>
                    <button onClick={this.inc}>Increase</button>
                    <button onClick={this.dec}>Decrease</button>
                </div>
                <h4>Increment: {this.state.pace}</h4>
                <input type="number" value={this.state.pace}
                onChange={e => this.setState({pace: parseInt(e.target.value)})}/>
            </>

        )
    }
}
