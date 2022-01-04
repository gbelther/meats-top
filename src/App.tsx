import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components";
import Contact from "./views/Contact";
import Home from "./views/Home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contato" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
