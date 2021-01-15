import React from 'react';

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isGoing: true, numberOfGuest: 0 }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputState = this.handleInputState.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        let numberOfGuest = this.state.numberOfGuest;
        let isGoing = this.state.isGoing;
        console.log("number of guest : " + numberOfGuest + " and isGoing : " + isGoing);
    }
    handleInputState(event) {
        const target = event.target;
        const value = (target.type === "checkbox") ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Is Going
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputState}
                    />
                </label>
                <label>
                    Number of Guest
                    <input
                        name="numberOfGuest"
                        type="number"
                        value={this.state.numberOfGuest}
                        onChange={this.handleInputState}
                    />
                </label>
                <button>Oke</button>
            </form>
        );
    }
}

export default Reservation;