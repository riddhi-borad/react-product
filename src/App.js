import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Product from './Components/product'
function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path="/" component={Product}></Route>
      </Router>
    </div>
  );
}

export default App;
