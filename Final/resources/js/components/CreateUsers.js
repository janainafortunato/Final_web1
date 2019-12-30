import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import MyGlobleSetting_Users from './MyGlobleSetting_Users';


class CreateUsers extends Component {
  constructor(props){
    super(props);
    this.state = {usersname: '', usersemail: '', userspassword: ''};


    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }
  handleChange1(e){
    this.setState({
      usersname: e.target.value
    })
  }
  handleChange2(e){
    this.setState({
      usersemail: e.target.value
    })
  }
  handleChange3(e){
    this.setState({
      userspassword: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    const users = {
      name: this.state.usersname,
      email: this.state.usersemail,
      password: this.state.userspassword
    }
    let uri = MyGlobleSetting.url + '/api/users';
    axios.post(uri, users).then((response) => {
      browserHistory.push('/display-item');
    });
  }


    render() {
      return (
      <div>
        <h1>Criar Usuario</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Users name:</label>
                <input type="text" className="form-control" onChange={this.handleChange1} />
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Users email:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleChange2}></textarea>
                </div>
                 </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Users password:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleChange2}></textarea>
                </div>
              </div>
            </div><br />
            <div className="form-group">
              <button className="btn btn-primary">Adicionar usuarios</button>
            </div>
        </form>
  </div>
      )
    }
}
export default CreateUsers;