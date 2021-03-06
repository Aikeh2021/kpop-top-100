import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';
import Home from '../src/Containers/Home/Home.jsx';
import Footer from '../src/Containers/Footer/Footer.jsx';
import Team from '../src/Containers/Team/Team.jsx';

function App() {
  return (
    <Router>
      {/* This is where your navbar's opening tag will go. Need conditional rendering so it doesn't appear on the home page */}
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team" component={Team} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
