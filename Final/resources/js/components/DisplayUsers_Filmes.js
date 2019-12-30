import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import TableRow_Users_Filmes from './TableRow_Users_Filmes';
import MyGlobleSetting_Users_Filmes from './MyGlobleSetting_Users_Filmes';
class DisplayProduct extends Component {
  constructor(props) {
       super(props);
       this.state = {value: '', users_filmes: ''};
     }
     componentDidMount(){
       axios.get(MyGlobleSetting.url + '/api/users_filmes')
       .then(response => {
         this.setState({ users_filmes: response.data });
       })
       .catch(function (error) {
         console.log(error);
       })
     }
     tabRow(){
       if(this.state.users_filmes instanceof Array){
         return this.state.users_filmes.map(function(object, i){
             return ;

         })
       }
     }


  render(){
    return (
      <div>
        <h1>Filmes assistendo pelos os usuarios</h1>


        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/add-item">Criara lista de Filme e suarios </Link>
          </div>
        </div><br />


        <table className="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>users_filmes watched</td>
                <td>users_filmes grade</td>
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
export default DisplayUsers_Filmes;
