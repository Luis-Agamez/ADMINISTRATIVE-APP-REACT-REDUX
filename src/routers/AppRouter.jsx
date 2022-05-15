import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { CategoryScreen } from "../components/category/CategoryScreen";
import { ClientsScreen } from "../components/clients/ClientsScreen";
import { InventoryScreen } from "../components/inventory/InventoryScreen";
import { ProductsScreen } from "../components/product/ProductsScreen";
import { SalesScreen } from "../components/sales/SalesScreen";
import { SuppliersScreen } from "../components/suppliers/SuppliersScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/product" component={ProductsScreen} />
          <Route exact path="/category" component={CategoryScreen} />
          <Route exact path="/clients" component={ClientsScreen} />
          <Route exact path="/suppliers" component={SuppliersScreen} />
          <Route exact path="/sales" component={SalesScreen} />
          <Route exact path="/" component={InventoryScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
