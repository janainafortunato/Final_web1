import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';


class MasterUsers extends Component {
  render(){
    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="https://itsolutionstuff.com">ItSolutionStuff.com</a>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="add-item">Criar Usuario</Link></li>
              <li><Link to="display-item">Usuario</Link></li>
            </ul>
          </div>
      </nav>
          <div>
              {this.props.children}
          </div>
      </div>
    )
  }
}
export default MasterUsers;
