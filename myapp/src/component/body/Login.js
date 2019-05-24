import React, { Component } from 'react';
import './../../App.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state =
            {
                isloggedin: false,
                username: '',
                password: '',
                isValidName: true,
                isValidPassword: true
            };
        this.validateName = this.validateName.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
    }

    validateName(e) {
        const name = e.target.value;
        let isValid = false;
        var re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        isValid = re.test(String(name).toLowerCase());

        this.setState({ isValidName: isValid });
    }

    validatePassword(e) {
        const password = e.target.value;
        let isValid = false;
        var re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        isValid = re.test(String(password).toLowerCase());

        this.setState({ isValidPassword: isValid });
    }

    onChange(e, id) {
        let obj = {};
        obj[id] = e.target.value;
        this.setState(obj);
        console.log(this.state);
    }
    onClick() {
        let details = this.props.data;
        if (details.username !== this.state.username) {
            alert("Invalid Username");
        }
        else {
            if (details.password !== this.state.password) {
                alert("Invalid Password");
            }
            else {
                this.setState({ isloggedin: true });
            }
        }
    }
    render() {
        if (this.state.isloggedin === false) {
            const { isValidName, isValidPassword } = this.state;
            return (
                <div id='bg'>
                    <center>
                        <div class="oneline">
                            <h1 style={{ fontFamily: 'Times New Roman' }}>Log in</h1>
                            <p>
                                <input
                                    id='user'
                                    type='text'
                                    placeholder='Enter Username'
                                    onBlur={this.validateName}
                                    onChange={e => this.onChange(e, 'username')}
                                />
                            </p>
                            {isValidName ? null : <div><span style={{ color: 'red', fontFamily: 'Times New Roman' }}>Please enter valid name</span><br /></div>}
                            <p>
                                <input
                                    id='pwd'
                                    type='password'
                                    placeholder='Enter Password'
                                    onBlur={this.validatePassword}
                                    onChange={e => this.onChange(e, 'password')}
                                />
                            </p>
                            {isValidPassword ? null : <div><span style={{ color: 'red', fontFamily: 'Times New Roman' }}>Please enter Strong Password.</span><br /></div>}<br />
                            <button onClick={() => this.onClick()}>LogIn</button>
                        </div>
                    </center>
                </div>
            );
        }
        else {
            return (
                <div id="bg">
                    <center>
                        <h1 style={{ fontFamily: 'Times New Roman', height: '700px' }}>Welcome  {this.state.username}</h1>
                    </center>
                </div>
            );
        }
    }
}
export default Login;