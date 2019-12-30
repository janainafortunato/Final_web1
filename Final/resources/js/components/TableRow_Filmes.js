import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import MyGlobleSetting_Filmes from './MyGlobleSetting_Filmes';


class TableRow_Filmes extends Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    let uri = MyGlobleSetting.url + `/api/filmes/${this.props.obj.id}`;
    axios.delete(uri);
      browserHistory.push('/display-item');
  }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.genre}
          </td>
           <td>
            {this.props.obj.year}
          </td>
           <td>
            {this.props.obj.duration}
          </td>
           <td>
            {this.props.obj.synopsis}
          </td>
          <td>
          <form onSubmit={this.handleSubmit}>
            <Link to={"edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
           <input type="submit" value="Delete" className="btn btn-danger"/>
         </form>
          </td>
        </tr>
    );
  }
}


export default TableRow_Filmes;