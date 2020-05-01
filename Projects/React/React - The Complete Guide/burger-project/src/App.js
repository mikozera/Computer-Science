import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Layout from "./containers/Layout/Layout";
import Orders from "./containers/Orders/Orders";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route exact path={"/"} component={BurgerBuilder} />
            <Route path={"/checkout"} component={Checkout} />
            <Route path={"/orders"} component={Orders} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
