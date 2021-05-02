import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import MyWorks from "./components/Home/MyWorks/MyWorks";
import Blogs from "./components/Blog/Blogs";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/myWorks">
          <MyWorks></MyWorks>
        </Route>
        <Route path="/blogs">
          <Blogs></Blogs>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
