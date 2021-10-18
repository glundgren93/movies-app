import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/testDetail/:testId">{/* <TestDetail /> */}</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
