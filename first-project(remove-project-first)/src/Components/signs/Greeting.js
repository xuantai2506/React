import React from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreating';
class Greeting extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.isLoggedIn){
            return (
                <UserGreeting />
            );
        }else {
            return (
                <GuestGreeting />
            );
        }
    }
}

export default Greeting ;