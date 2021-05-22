import {
  Link,
  useRouteMatch
} from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../../actions/index'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import {removeToken} from '../../utils/utils'

const menus = [
  {
      activeOnlyWhenExact: true,
      to : "/",
      label : "Home"
  },
  {
      activeOnlyWhenExact: true,
      to : "/company",
      label : "Company"
  },
  {
    activeOnlyWhenExact: true,
    to : "/favorite-company",
    label : "Favorite Company"
  }
]

function MenuLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <Link className={`p-2 text-dark ${match ? "active" : ""}`} to={to}>{label}</Link>
  );
}

function showMenuLink(menus) {
  let result = null
  if(menus.length > 0){
      result = menus.map((menu,index) => {
          return (<MenuLink
              key={index}
              activeOnlyWhenExact = {menu.activeOnlyWhenExact}
              to = {menu.to}
              label = {menu.label}
          />)
      })
  }
  return result
}




function Menu(props) {

  let history = useHistory()

  useEffect(() => {
    props.getUserLogin()
    // console.log(props.userLogin);
  },[])

  function showMenuLogin(){
    let userLogin = props.userLogin
    let isLogin = userLogin ? true : false
    if(isLogin){
      return (
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Hi, {userLogin.username}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link className="dropdown-item" to="/change-pass">Change Password</Link>
            <a className="dropdown-item" onClick={() => handleLogout()}>Logout</a>
          </div>
        </div>
      )
    }
    return (
      <div>
        <Link to="/login" className="btn btn-outline-info mr-2">Sign in</Link>
        {/* <Link to="/register" className="btn btn-outline-primary">Sign up</Link> */}
      </div>
    )
  }

  function handleLogout(){
    removeToken()
    history.push('/login')
  }

  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          {showMenuLink(menus)}
        </nav>
        {showMenuLogin()}
        
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    userLogin : state.userLogin
  }
}

let mapDispatchToProps = (dispatch, props) => {
  return {
    getUserLogin: () => {
      dispatch(actions.getUserLogin());
    },
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Menu);
