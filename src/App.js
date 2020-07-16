import React from "react";
import "./styles/App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/portfolio" exact component={Home} />
          <Route path="/portfolio" component={About} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
