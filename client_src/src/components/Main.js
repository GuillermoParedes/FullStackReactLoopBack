import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Meetup from './Meetup';
import About from './About';
import Contact from './Contact';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Meetup} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
    </Switch>
  </main>
)


export default Main;
