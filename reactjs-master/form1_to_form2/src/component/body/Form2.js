import React, { Component } from 'react';

class Form2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            gender: '',
            degree: '',
            c: '',
            java: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            fname: nextProps.receiveValue.fname,
            lname: nextProps.receiveValue.lname,
            degree: nextProps.receiveValue.degree,
            gender: nextProps.receiveValue.gender,
            email: nextProps.receiveValue.email,
            c: nextProps.receiveValue.c,
            java: nextProps.receiveValue.java,
        });
    }

    render() {
        return (
            <div id='form'>
                <h1>Form2</h1>
                <p>
                    <input
                        id='input'
                        type='text'
                        name='fname'
                        className='form2'
                        placeholder='Enter First Name'
                        value={this.state.fname}
                    />
                </p>
                <p>
                    <input
                        id='input'
                        type='text'
                        name='lname'
                        className='form2'
                        placeholder='Enter Last Name'
                        value={this.state.lname}
                    />
                </p>
                <p>
                    <input
                        id='input'
                        type='text'
                        name='email'
                        className='form2'
                        placeholder='Enter Email'
                        value={this.state.email}
                    />
                </p>
                <p>
                    Gender :
                    <input
                        type='radio'
                        name='gender'
                        className='form1'
                        value='Female'
                        checked={this.state.gender === 'female'}
                    />
                    Female
                    <input
                        type='radio'
                        name='gender'
                        className='form1'
                        value='Male'
                        checked={this.state.gender === 'male'}
                    />
                    Male
                </p>
                <p>
                    Languages : &nbsp; {this.state.c}&nbsp;{this.state.java}
                    {/* <input type='checkbox' value='C' name='c'></input>C  
                   <input type='checkbox' value='java' name='java++'></input>Java */}

                </p>
                <p>
                    Degree :&nbsp;
                    <select name='degree' value={this.state.degree}>
                        <option value="BCA">BCA</option>
                        <option value="MCA">MCA</option>
                        <option value="BA">BA</option>
                        <option value="MA">MA</option>
                    </select>
                </p>
            </div>
        );
    }
}
export default Form2;