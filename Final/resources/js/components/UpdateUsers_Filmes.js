import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import MyGlobleSetting_Users_Filmes from './MyGlobleSetting_Users_Filmes';


class UpdateUsers_Filmes extends Component {
  constructor(props) {
      super(props);
      this.state = {watched: '', grade: ''};
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    axios.get(MyGlobleSetting.url + `/api/users_Filmes/${this.props.params.id}/edit`)
    .then(response => {
      this.setState({ watched: response.data.watched, grade: response.data.grade });
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  handleChange1(e){
    this.setState({
      watched: e.target.value
    })
  }
  handleChange2(e){
    this.setState({
      grade: e.target.value
    })
  }


  handleSubmit(event) {
    event.preventDefault();
    const users_Filmes = {
      watched: this.state.watched,
      grade: this.state.grade
    }
    let uri = MyGlobleSetting.url + '/api/users_filmes/'+this.props.params.id;
    axios.patch(uri, users_filmes).then((response) => {
          this.props.history.push('/display-item');
    });
  }
  render(){
    return (
      <div>
        <h1>Update users_filmes</h1>
        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/display-item" className="btn btn-success">Return to users_filmes</Link>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Users_Filmnes watched</label>
                <input type="text"
                  className="form-control"
                  value={this.state.watched}
                  onChange={this.handleChange1} />
            </div>


            <div className="form-group">
                <label name="users_filmes_grade">Users_Filmnes grade</label>
                <textarea className="form-control"
                  onChange={this.handleChange2} value={this.state.grade}></textarea>  
            </div>


            <div className="form-group">
                <button className="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
    )
  }
}
export default UpdateUsers_Filmes;