import React, { Component } from 'react';
//import logo from './logo.svg';
import './../../App.css';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isSigned: true,
            email: '',
            contact: '',
            isValidEmail: true,
            isValidNumber: true,
            isValidName: true,
            isValidPassword: true
        };
        this.validateEmail = this.validateEmail.bind(this);
        this.validateNumber = this.validateNumber.bind(this);
        this.validateName = this.validateName.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
    }
    onChange(e, id) {
        let obj = {};
        obj[id] = e.target.value;
        this.setState(obj);
    }
    onClick() {
        this.props.onChange(this.state);
    }
    validateEmail(e) {
        const email = e.target.value;
        let isValid = false;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        isValid = re.test(String(email).toLowerCase());

        this.setState({ isValidEmail: isValid });
    }

    validateNumber(e) {
        const number = e.target.value;
        let isValid = false;
        var re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        isValid = re.test(String(number).toLowerCase());

        this.setState({ isValidNumber: isValid });
    }

    validateName(e) {
        const name = e.target.value;
        let isValid = false;
        var re = /^[a-z ,.'-]+$/i;
        isValid = re.test(String(name).toLowerCase());

        this.setState({ isValidName: isValid });
    }

    validatePassword(e) {
        const password = e.target.value;
        let isValid = false;
        var re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        isValid = re.test(String(password).toLowerCase());
        this.setState({ isValidPassword: isValid });
    }

    render() {
        const { isValidEmail, isValidNumber, isValidName, isValidPassword } = this.state;
        return (
            <div id='bg'>
                <center>
                    <div class="oneline">
                        <h1 style={{ fontFamily: 'Times New Roman' }}>Sign Up</h1>
                        <p>
                            <input
                                id='user'
                                type='text'
                                placeholder='Enter username'
                                onBlur={this.validateName}
                                onChange={e => this.onChange(e, 'username')}
                            />
                            {isValidName ? null : <div><span style={{ color: 'red', fontFamily: 'Times New Roman' }}>Please enter valid name</span><br /></div>}
                        </p>
                        <p>
                            <input
                                id='email'
                                type='text'
                                placeholder='Enter email'
                                onChange={e => this.onChange(e, 'email')}
                                onBlur={this.validateEmail}
                            />
                            {isValidEmail ? null : <div><span style={{ color: 'red', fontFamily: 'Times New Roman' }}>Please enter valid email.</span><br /></div>}
                        </p>
                        <p>
                            <input
                                id='pwd'
                                type='password'
                                placeholder='Enter password'
                                onBlur={this.validatePassword}
                                onChange={e => this.onChange(e, 'password')}
                            />
                            {isValidPassword ? null : <div><span style={{ color: 'red', fontFamily: 'Times New Roman' }}>Please enter Strong Password.</span><br /></div>}
                        </p>
                        <p>
                            <input
                                id='contact'
                                type='text'
                                placeholder='Enter Contact No.'
                                onChange={e => this.onChange(e, 'contact')}
                                onBlur={this.validateNumber}
                            />
                            {isValidNumber ? null : <div><span style={{ color: 'red', fontFamily: 'Times New Roman' }}>Please enter valid Contact number.</span><br /></div>}
                        </p>

                        <button onClick={this.onClick.bind(this)}>Signup</button>

                    </div>
                </center>
            </div>
        );
    }
}
export default Signup;