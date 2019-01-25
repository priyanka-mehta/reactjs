import React, { Component } from 'react';
// import './Edit.css';
import Axios from 'axios';
class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: ''
        }
        this.getData = this.getData.bind(this);
        this.addData = this.addData.bind(this);
        this.setValue=this.setValue.bind(this);
    }

    setValue(key, value) {
        let obj = {};
        obj = this.state;
        obj[key] = value;
        this.setState(obj);
    }

    addData() {
        Axios.post(`https://reqres.in/api/users/${this.props.match.params.id}`, { fname: this.state.fname, lname: this.state.lname })
            .then(function (res) {
                console.log(res);
            })
            .catch(function (error) {
                alert("Oops! Something went wrong.");
            });
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        Axios.get(`https://reqres.in/api/users/${this.props.match.params.id}`)
            .then(res => {
                return res;
            })
            .then(res => {
                console.log('res :', res);
                this.setState({ fname: res.data.data.first_name, lname: res.data.data.last_name })
            })
            .catch(function (error) {
                alert("Oops! Something went wrong.");
            });
    }


    render() {
        return (
            <div>
                <b className='form'> Edit User</b><br /><br />
                <div className='form'>
                    <p> Name : </p>
                    <p> <input type='text' name='fname' value={this.state.fname} placeholder='Enter First Name' onChange={e=>this.setValue('fname',e.target.value)}/></p>
                    <p> Job : </p>
                    <p> <input type='text' name='lname' value={this.state.lname} placeholder='Enter Last Name' onChange={e=>this.setValue('lname',e.target.value)}/></p>
                    <p>
                        <button className='submit' onClick={this.addData}>Edit</button>
                        <button className='cancel'>Cancel</button>
                    </p>
                </div>
            </div>
        );
    }
}
export default Edit;