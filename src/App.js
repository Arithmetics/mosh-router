import React, { Component } from "react";
import Movies from "./components/movies";
import Rentals from "./components/Rentals";
import Customers from "./components/Customers";
import NavBar from "./components/common/navBar";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import NotFound from "./components/NotFound";
import MovieForm from "./components/movieForm";

class App extends Component {
  render() {
    return (
      <main className="container">
        <NavBar />
        <br />
        <Switch>
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/customers" component={Customers} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Movies} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  }
}

export default App;
