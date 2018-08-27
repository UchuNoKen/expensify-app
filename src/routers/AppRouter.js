import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboadPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';









const HelpPage = () => (
    <div>
      This is from help component.
    </div>
);

const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path='/' component={ExpenseDashboardPage} exact={true}/>
          <Route path='/create' component={AddExpensePage}/>
          <Route path='/edit' component={EditExpensePage}/>
          <Route path='/help' component={HelpPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    </BrowserRouter>
);

export default AppRouter;
