
import { useState } from 'react';
import PropTypes from 'prop-types';
import callAPI  from '../../utils/apiCaller'
import { useHistory } from "react-router-dom";
import * as actions from '../../actions/index'
import { connect } from 'react-redux';
import { removeToken } from '../../utils/utils'


function ChangePassPage(props) {

    const [currentPass, setCurrentPass] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [currentPassErr,setcurrentPassErr] = useState({})
    const [newPasswordErr,setnewPasswordErr] = useState({})
    const [confirmPasswordErr,setconfirmPasswordErr] = useState({})
    let history = useHistory()
    
    async function ChangePass(credentials) {
        return callAPI('account/change-password/','PUT',credentials)
    }
    
    const handleSubmit = async e => {
        e.preventDefault();
        const isValid = formValidation()
        if(isValid){
          await ChangePass({
            old_password: currentPass,
            new_password: newPassword,
            confirm_password: confirmPassword,
          }).then(res => {
            removeToken()
            history.push('/login')
          })
          .catch(function (error) {
              let errors = error.response.data
              setcurrentPassErr({msg:errors.message})
          });
        }
    }

    const formValidation = () => {
        const currentPassErr = {}
        const newPasswordErr = {}
        const newconfirmPasswordErr = {}
        let isValid = true

        if(currentPass.trim().length <= 0){
          isValid = false
          currentPassErr.msg = "Username is required"
        }
  
        if(newPassword.trim().length <= 0){
          isValid = false
          newPasswordErr.msg = "Password is required"
        }
        
        if(confirmPassword.trim().length <= 0){
          isValid = false
          newconfirmPasswordErr.msg = "Password is required"
        }
        setcurrentPassErr(currentPassErr)
        setnewPasswordErr(newPasswordErr)
        setconfirmPasswordErr(newconfirmPasswordErr)
        return isValid
  
      }

    return (
        <form className="form-signin" onSubmit={handleSubmit}>
            {/* <img className="mb-4" src="/docs/4.6/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/> */}
            <h1 className="h3 mb-3 font-weight-normal">Change pass</h1>
            <label htmlFor="inputEmail">Current Pass</label>
            <input type="text" id="inputEmail" className="form-control" onChange={e => setCurrentPass(e.target.value)}/>
            {
              Object.keys(currentPassErr).map((key) => {
                return <div style={{color : 'red'}}>{currentPassErr[key]}</div>
              })
            }
            <label htmlFor="inputPassword">Password</label>
            <input type="password" id="inputPassword" className="form-control" onChange={e => setNewPassword(e.target.value)}/>
            {
              Object.keys(newPasswordErr).map((key) => {
                return <div style={{color : 'red'}}>{newPasswordErr[key]}</div>
              })
            }
            <label htmlFor="inputPassword">Password Confirm</label>
            <input type="password" id="inputPassword" className="form-control" onChange={e => setConfirmPassword(e.target.value)}/>
            {
              Object.keys(confirmPasswordErr).map((key) => {
                return <div style={{color : 'red'}}>{confirmPasswordErr[key]}</div>
              })
            }
            <button className="btn btn-lg btn-primary btn-block" type="submit">Change pass</button>
        </form>
    );
}

var mapDispatchToProps = (dispatch, props) => {
    return {
      
    }
  }
  
export default connect(null,mapDispatchToProps)(ChangePassPage);
  