import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.inicial,
            step: this.props.step
        }
    }
    decrement = (step = 1) => {
        this.setState({
            counter: this.state.counter -= step
        })
    }
    increment = (step = 1) => {
        this.setState({
            counter: this.state.counter += step
        })
    }
    handleChange = event => {
        this.setState({ step: parseInt(event.target.value) })
    }
    render() {
        return (<div>
            <input type="number" onChange={this.handleChange} />
            <br />
            <button onClick={() => this.decrement(this.state.step)}>-</button>
            {this.state.counter}
            <button onClick={() => this.increment(this.state.step)}>+</button>
        </div>)
    }
}

export default Counter;