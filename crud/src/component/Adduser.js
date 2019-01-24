import React, { Component } from 'react';
import './Adduser.css';
import Axios from 'axios';
class Adduser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: ''
        }
        this.setValue = this.setValue.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    setValue(key, value) {
        let obj = {};
        obj = this.state;
        obj[key] = value;
        this.setState(obj);
    }

    onClick() {
    }

    render() {
        return (
            <div>
                <b className='form'> Add User</b><br /><br />
                <div className='form'>
                    <p> Name : </p>
                    <p> <input type='text' name='fname' value={this.state.fname} placeholder='Enter First Name' onChange={e => this.setValue('fname', e.target.value)} /></p>
                    <p> Job : </p>
                    <p> <input type='text' name='lname' value={this.state.lname} placeholder='Enter Last Name' onChange={e => this.setValue('lname', e.target.value)} /></p>
                    <p> <button className='submit' onClick={this.onClick()}>Submit</button><button className='cancel'>Cancel</button></p>
                </div>
            </div>
        );
    }
}
export default Adduser;