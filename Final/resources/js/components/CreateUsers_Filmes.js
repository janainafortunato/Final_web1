import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import MyGlobleSettingusers_Filmes from './MyGlobleSettingUsers_Filmes';


class CreateUsers_Filmes extends Component {
  constructor(props){
    super(props);
    this.state = {users_filmeswatched: '', users_filmesgrade: ''};


    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }
  handleChange1(e){
    this.setState({
      users_filmeswatched: e.target.value
    })
  }
  handleChange2(e){
    this.setState({
      users_filmesgrade: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    const products = {
      users_filmes: this.state.users_filmeswatched,
      users_filmes: this.state.users_filmesgrade
    }
    let uri = MyGlobleSetting.url + '/api/users_filmes';
    axios.post(uri, users_filmes).then((response) => {
      browserHistory.push('/display-item');
    });
  }


    render() {
      return (
      <div>
        <h1>Criar colocação de Filme</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>users_filmes watched:</label>
                <input type="text" className="form-control" onChange={this.handleChange1} />
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>users_filmes grade:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleChange2}></textarea>
                </div>
              </div>
            </div><br />
            <div className="form-group">
              <button className="btn btn-primary">Adicionar colocação de filme</button>
            </div>
        </form>
  </div>
      )
    }
}
export default CreateUsers_Filmes;
