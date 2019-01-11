import React, { Component } from 'react';
import Input from './Input';

class Signup extends Component {
    render() {
        return (
            <div id="form">
                <h1>Registration</h1>
                <p>
                    <Input
                        type="text"
                        className="signup"
                        name="fname"
                        placeholder="Enter First Name"
                        value={this.props.value}
                        onChange={e => this.props.setValue(e)}
                    />
                </p>
                <p>
                    <Input
                        type="text"
                        className="signup"
                        name="lname"
                        placeholder="Enter Last Name"
                        value={this.props.value}
                        onChange={e => this.props.setValue(e)}
                    />
                </p>
                <p>
                    <Input
                        type="text"
                        className="signup"
                        name="email"
                        placeholder="Enter Email"
                        value={this.props.value}
                        onChange={e => this.props.setValue(e)}
                    />
                </p>
                <p>
                    <Input
                        type="text"
                        className="signup"
                        name="password"
                        placeholder="Enter Password"
                        value={this.props.value}
                        onChange={e => this.props.setValue(e)}
                    />  
                </p>
                <p>
                    <button id="button" onClick={() => this.props.getValues()}>Signup</button><br />
                </p>
            </div>
        );
    }
}
export default Signup;