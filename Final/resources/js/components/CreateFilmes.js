import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import MyGlobleSetting_Filmes from './MyGlobleSetting_Filmes';


class CreateFilmes extends Component {
  constructor(props){
    super(props);
    this.state = {filmesname: '', filmesgenre: '', filmesyear: '', filmesduration: '', filmessynopsis: ''};


    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }
  handleChange1(e){
    this.setState({
      filmesname: e.target.value
    })
  }
   handleChange2(e){
    this.setState({
      filmesgenre: e.target.value
    })
  }
   handleChange3(e){
    this.setState({
      filmesyear: e.target.value
    })
  }
  handleChange4(e){
    this.setState({
      filmesduration: e.target.value
    })
  }
   handleChange5(e){
    this.setState({
      filmessynopsis: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    const filmes = {
      name: this.state.filmesname,
      genre: this.state.filmesgenre,
      year: this.state.filmesyear,
      duration: this.state.filmesduration,
      synopsis: this.state.filmessynopsis,
    }
    let uri = MyGlobleSetting.url + '/api/filmes';
    axios.post(uri, filmes).then((response) => {
      browserHistory.push('/display-item');
    });
  }


    render() {
      return (
      <div>
        <h1>Criar Filmes</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Filmes name:</label>
                <input type="text" className="form-control" onChange={this.handleChange1} />
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Filmes Genre:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleChange2}></textarea>
                </div>
              </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Filmes year:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleChange3}></textarea>
                </div>
              </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Filmes duration:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleChange4}></textarea>
                </div>
              </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Filmes synopsis:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleChange5}></textarea>
                </div>
              </div>
            </div><br />
            <div className="form-group">
              <button className="btn btn-primary">Adicionar Novo Filme</button>
            </div>
        </form>
  </div>
      )
    }
}
export default CreateFilmes;