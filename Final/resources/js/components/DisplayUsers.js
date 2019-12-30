import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import TableRow_Users from './TableRow_Users';
import MyGlobleSetting_Users from './MyGlobleSetting_Users';
class DisplayProduct extends Component {
  constructor(props) {
       super(props);
       this.state = {value: '', users: ''};
     }
     componentDidMount(){
       axios.get(MyGlobleSetting.url + '/api/users')
       .then(response => {
         this.setState({ users: response.data });
       })
       .catch(function (error) {
         console.log(error);
       })
     }
     tabRow(){
       if(this.state.users instanceof Array){
         return this.state.users.map(function(object, i){
             return ;

         })
       }
     }


  render(){
    return (
      <div>
        <h1>Usuarios</h1>


        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/add-item">Criar Usuarios</Link>
          </div>
        </div><br />


        <table className="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Usuario name</td>
                <td>Usuario email</td>
                <td>Usuario password</td>
                <td width="200px">Actions</td>
            </tr>
            </thead>
            <tbody>
              {this.tabRow()}
            </tbody>
        </table>
    </div>
    )
  }
}
export default DisplayUserst;