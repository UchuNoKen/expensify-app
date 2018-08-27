import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
      This is from dashboard component.
    </div>
);


const AddExpensePage = () => (
    <div>
      This is from add expense component.
    </div>
);

const EditExpensePage = () => (
    <div>
      This is from edit expense component.
    </div>
);

const HelpPage = () => (
    <div>
      This is from help component.
    </div>
);

const NotFoundPage = () => (
    <div>
      404! - <Link to="/">Go Home</Link>
    </div>
);

const Header = () => (
    <header>
      <h1>Expensify</h1>
      <Link to="/create"> Go Home </Link>
      <Link to="/edit"> Edit </Link>
      <Link to="/help"> Help </Link>
    </header>
);

const routes = (
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

ReactDOM.render(routes, document.getElementById('app'));

