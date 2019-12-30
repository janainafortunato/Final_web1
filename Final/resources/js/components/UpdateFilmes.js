import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import MyGlobleSetting_Filmes from './MyGlobleSetting_Filmes';


class UpdateFilmes extends Component {
  constructor(props) {
      super(props);
      this.state = {name: '', genre: '', year: '', duration: '', synopsis: ''};
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleChange3 = this.handleChange3.bind(this);
      this.handleChange4 = this.handleChange4.bind(this);
      this.handleChange5 = this.handleChange5.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount(){
    axios.get(MyGlobleSetting.url + `/api/filmes/${this.props.params.id}/edit`)
    .then(response => {
      this.setState({ name: response.data.name, genre: response.data.genre, year: response.data.year, duration: response.data.duration, synopsis: response.data.synopsis });
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  handleChange1(e){
    this.setState({
      name: e.target.value
    })
  }
  handleChange2(e){
    this.setState({
      genre: e.target.value
    })
  }
  handleChange3(e){
    this.setState({
      year: e.target.value
    })
  }
  handleChange4(e){
    this.setState({
      duration: e.target.value
    })
  }
  handleChange5(e){
    this.setState({
      synopsis: e.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const filmes = {
      name: this.state.title,
      genre: this.state.body
      year: this.state.body
      duration: this.state.body
      synopsis: this.state.body
    }
    let uri = MyGlobleSetting_Filmes.url + '/api/filmes/'+this.props.params.id;
    axios.patch(uri, filmes).then((response) => {
          this.props.history.push('/display-item');
    });
  }
  render(){
    return (
      <div>
        <h1>Update Filmes</h1>
        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/display-item" className="btn btn-success">Return to Filmes</Link>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Filmes name</label>
                <input type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.handleChange1} />
            </div>


            <div className="form-group">
                <label name="filmes_genre">Filmes Genre</label>
                <textarea className="form-control"
                  onChange={this.handleChange2} value={this.state.body}></textarea>  
            </div>

            <div className="form-group">
                <label name="filmes_year">Filmes year</label>
                <textarea className="form-control"
                  onChange={this.handleChange2} value={this.state.year}></textarea>  
            </div>

            <div className="form-group">
                <label name="filmes_duration">Filmes duration</label>
                <textarea className="form-control"
                  onChange={this.handleChange2} value={this.state.duration}></textarea>  
            </div>

            <div className="form-group">
                <label name="filmes_synopsis">Filmes synopsis</label>
                <textarea className="form-control"
                  onChange={this.handleChange2} value={this.state.synopsis}></textarea>  
            </div>

            <div className="form-group">
                <button className="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
    )
  }
}
export default UpdateFilmes;