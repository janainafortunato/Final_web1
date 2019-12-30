/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';


import MasterFilmes from './components/MasterFilmes';
import CreateFilmes from './components/CreateFilmes';
import DisplayFilmes from './components/DisplayFilmes';
import UpdateFilmes from './components/UpdateFilmes';
import MasterUsers from './components/MasterUsers';
import CreateUsers from './components/CreateUsers';
import DisplaUsers from './components/DisplayUsers';
import UpdateUsers from './components/UpdateUsers';
import MasterUsers_Filmes from './components/MasterUsers_Filmes';
import CreateUsers_Filmes from './components/CreateUsers_Filmes';
import DisplayUsers_Filmes from './components/DisplayUsers_Filmes';
import UpdateUsers_Filmes from './components/UpdateUsers_Filmes';

render(
  <Router history={browserHistory}>
      <Route path="/" component={MasterFilmes} >
        <Route path="/add-item" component={CreateFilmes} />
        <Route path="/displayfilmes-item" component={DisplayFilmes} />
        <Route path="/edit/:id" component={UpdateFilmes} />
        <Route path="/" component={MasterUsers} >
        <Route path="/add-item" component={CreateUsers} />
        <Route path="/displayusers-item" component={DisplayUsers} />
        <Route path="/edit/:id" component={UpdateUsers} />
        <Route path="/" component={MasterUsers_Filmes} >
        <Route path="/add-item" component={CreateUsres_Filmes} />
        <Route path="/displayusers_filmes-item" component={DisplayUsers_Filmes} />
        <Route path="/edit/:id" component={UpdateUsers_Filmes} />
      </Route>
    </Router>,
        document.getElementById('crud_app'));


require('./components/CreateFilmes');
require('./components/CreateUsers');
require('./components/CreateUsers_Filmes');
