import './login.css'
import { useState } from 'react';
import PropTypes from 'prop-types';
import callAPI  from '../../utils/apiCaller'
import { useHistory } from "react-router-dom";
import * as actions from '../../actions/index'
import { connect } from 'react-redux';
import useToken from '../../utils/userToken'


function LoginPage(props) {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [usernameErr,setUsernameErr] = useState({})
    const [passwordErr,setpasswordErr] = useState({})
    let history = useHistory();
    const {setToken, token} = useToken()

    async function loginUser(credentials) {
        return callAPI('auth/login/','POST',credentials)
    }
    
    const handleSubmit = async e => {
        e.preventDefault();
        const isValid = formValidation()
        if(isValid){
          await loginUser({
            username,
            password
          }).then(res => {
              let {access} = res.data
              setToken(access);
              props.getUserLogin()
              history.push('/company')
          })
          .catch(function (error) {
            setUsernameErr({msg : 'Tài khoản hoặc mật khẩu không chính xác'})
          });
        }
    }

    const formValidation = () => {
      const usernameErr = {}
      const passwordErr = {}
      let isValid = true
      // console.log(username);
      if(username.trim().length <= 0){
        isValid = false
        usernameErr.msg = "Username is required"
      }

      if(password.trim().length <= 0){
        isValid = false
        passwordErr.msg = "Password is required"
      }

      setUsernameErr(usernameErr)
      setpasswordErr(passwordErr)
      return isValid

    }
    

    return (
        <form className="form-signin" onSubmit={handleSubmit}>
            {/* <img className="mb-4" src="/docs/4.6/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/> */}
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputEmail">User name</label>
            <input type="text" id="inputEmail" className="form-control" onChange={e => setUserName(e.target.value)}/>
            {
              Object.keys(usernameErr).map((key) => {
                return <div style={{color : 'red'}}>{usernameErr[key]}</div>
              })
            }
            <label htmlFor="inputPassword">Password</label>
            <input type="password" id="inputPassword" className="form-control" onChange={e => setPassword(e.target.value)}/>
            {
              Object.keys(passwordErr).map((key) => {
                return <div style={{color : 'red'}}>{passwordErr[key]}</div>
              })
            }
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
    );
}

var mapDispatchToProps = (dispatch, props) => {
    return {
      getUserLogin: () => {
        dispatch(actions.getUserLogin());
      },
    }
  }
  
  
export default connect(null,mapDispatchToProps)(LoginPage);
  