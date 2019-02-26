import React, { Component } from 'react';
import axios from 'axios';
import { Col, Row, Input, Container, Button } from 'reactstrap';

import './Add.css';

import history from '../../history';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      age: '',
      mobile: ''
    }
    this.setValue = this.setValue.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    if (this.props.match.path === '/edit/:id') {
      this.getUser();
    }
  }

  getUser() {
    axios.get(`http://localhost:8080/api/students/find/${this.props.match.params.id}`)
      .then(res => {
        console.log(res);
        return res.data;
      })
      .then(res => {
        this.setState({
          fname: res.data.fname,
          lname: res.data.lname,
          email: res.data.email,
          age: res.data.age,
          mobile: res.data.mobile,
        })
      })
  }

  editUser() {
    axios.put(`http://localhost:8080/api/students/update/${this.props.match.params.id}`,
      {
        fname: this.state.fname,
        lname: this.state.lname,
        email: this.state.email,
        age: this.state.age,
        mobile: this.state.mobile,
      }
    )
      .then((res) => {
        console.log(res.data);
        history.push('/');
      })
      .catch(function (error) {
        console.log("something went wrong");
      });
  }

  addUser() {
    axios.post('http://localhost:8080/api/students/create',
      {
        fname: this.state.fname,
        lname: this.state.lname,
        email: this.state.email,
        age: this.state.age,
        mobile: this.state.mobile,
      }
    )
      .then((res) => {
        console.log(res.data);
        history.push('/');
      })
      .catch(function (error) {
        console.log("something went wrong");
      });
  }

  setValue(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { fname, lname, email, age, mobile } = this.state;
    return (
      <div>
        <Container id='sign'>
          {this.props.match.path === '/add' ? <h1>Add user</h1> : <h1>Edit User</h1>}
          <Row>
            <Col>First Name</Col>
          </Row>
          <Row>
            <Col>
              <Input
                type='text'
                name='fname'
                value={fname}
                onChange={e => this.setValue(e)}
              />
            </Col>
          </Row>
          <Row>Last Name</Row>
          <Row>
            <Col>
              <Input
                type='text'
                name='lname'
                value={lname}
                onChange={e => this.setValue(e)}
              />
            </Col>
          </Row>
          <Row>Email</Row>
          <Row>
            <Col>
              <Input
                type='email'
                name='email'
                value={email}
                onChange={e => this.setValue(e)}
              />
            </Col>
          </Row>
          <Row>Age</Row>
          <Row>
            <Col>
              <Input
                type='text'
                name='age'
                value={age}
                onChange={e => this.setValue(e)}
              />
            </Col>
          </Row>
          <Row>Contact Number</Row>
          <Row>
            <Col>
              <Input
                type='text'
                name='mobile'
                value={mobile}
                onChange={e => this.setValue(e)}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>{
              this.props.match.path === '/add'
                ?
                <Button name='add' color='secondary' onClick={e => this.addUser(e)}>Add User</Button>
                :
                <Button name='add' color='secondary' onClick={e => this.editUser(e)}>Edit User</Button>
            }
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Add;