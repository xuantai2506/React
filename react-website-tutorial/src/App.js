import logo from './logo.svg';
import './App.css';
import './assets/product.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Component 
import TopMenu from './components/TopMenu';
import ListProduct from './pages/ListProduct';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <TopMenu />

        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/list-products" component={ListProduct}></Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
