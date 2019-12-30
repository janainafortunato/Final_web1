import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import TableRow_Filmes from './TableRow_Filmes';
import MyGlobleSetting_Filmes from './MyGlobleSetting_Filmes';
class DisplayFilmes extends Component {
  constructor(props) {
       super(props);
       this.state = {value: '', filmes: ''};
     }
     componentDidMount(){
       axios.get(MyGlobleSetting.url + '/api/filmes')
       .then(response => {
         this.setState({ filmes: response.data });
       })
       .catch(function (error) {
         console.log(error);
       })
     }
     tabRow(){
       if(this.state.filmes instanceof Array){
         return this.state.filmes.map(function(object, i){
             return ;

         })
       }
     }


  render(){
    return (
      <div>
        <h1>Filmes</h1>


        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/add-item">Criar Filmes</Link>
          </div>
        </div><br />


        <table className="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Filmes name</td>
                <td>Filmes genre</td>
                <td>Filmes year</td>
                <td>Filmes duration</td>
                <td>Filmes synopsis</td>
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
export default DisplayFilmes;