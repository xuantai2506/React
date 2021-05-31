
import './App.css';
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import Login from './pages/LoginPage/LoginPage'
import routes from './routes'
import { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {
    const showContentMenu = (routes) =>  {
        let result = null
        if(routes.length > 0){
            result = routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))
        }
        return <Switch>
            {result}
        </Switch>
    }

    return (
        <Router>
            <Menu/>
            <div className="container" id="content">
                { showContentMenu(routes) }
            </div>
            <Footer/>
        </Router>
    );
}

export default App;
