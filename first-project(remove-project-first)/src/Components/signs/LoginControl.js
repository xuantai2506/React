import React from 'react';
import Greeting from './Greeting';
import LoginButton from './button/LoginButton';
import LogoutButton from './button/LogoutButton';

class LoginControl extends React.Component {
    constructor(props){
        super(props);
        this.handleClickLogin = this.handleClickLogin.bind(this);
        this.handleClickLogout = this.handleClickLogout.bind(this);
        this.state = {isLoggedIn : false};
    }
    handleClickLogin(){
        this.setState({isLoggedIn : true});
    }
    handleClickLogout(){
        this.setState({isLoggedIn : false});
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn ;
        let button ;
        if(isLoggedIn) {
            button = <LogoutButton onClick={this.handleClickLogout}/>
        }else {
            button = <LoginButton onClick={this.handleClickLogin}/>
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        );
    }
}

export default LoginControl ;