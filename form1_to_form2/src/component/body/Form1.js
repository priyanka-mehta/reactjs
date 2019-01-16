import React, { Component } from 'react';

class Form1 extends Component {
    render() {
        return (
            <div id='form'>
                <h1>Form1</h1>
                <p>
                    <input
                        id='input'
                        type='text'
                        name='fname'
                        className='form1'
                        placeholder='Enter First Name'
                        value={this.props.value}
                        onChange={e => this.props.setValue('fname', e.target.value)}
                    />
                </p>
                <p>
                    <input
                        id='input'
                        type='text'
                        name='lname'
                        className='form1'
                        placeholder='Enter Last Name'
                        value={this.props.value}
                        onChange={e => this.props.setValue('lname', e.target.value)}
                    />
                </p>
                <p>
                    <input
                        id='input'
                        type='email'
                        name='email'
                        className='form1'
                        placeholder='Enter Email'
                        value={this.props.value}
                        onChange={e => this.props.setValue('email', e.target.value)}
                    />
                </p>
                <p>
                    Gender : 
                    <input
                        type='radio'
                        name='gender'
                        className='form1'
                        value='female'
                        onChange={e => this.props.setValue('gender', e.target.value)}
                    />
                    Female
                    <input
                        type='radio'
                        name='gender'
                        className='form1'
                        value='male'
                        onChange={e => this.props.setValue('gender', e.target.value)}
                    />
                    Male
                </p>
                <p>
                   Languages : &nbsp;
                   <input type='checkbox' value='C' name='c'  onChange={e => this.props.setValue('c', e.target.value)}></input>C  
                   <input type='checkbox' value='Java' name='java'  onChange={e => this.props.setValue('java', e.target.value)}></input>Java
                   
                </p>
                <p>
                Degree :&nbsp;
                    <select name='degree' onChange={e => this.props.setValue('degree', e.target.value)}>
                        <option value="BCA">BCA</option>
                        <option value="MCA">MCA</option>
                        <option value="BA">BA</option>
                        <option value="MA">MA</option>
                    </select>
                </p>
                <p>
                    <button onClick={e => this.props.onClickAction(e)}>Submit</button>
                </p>
            </div>
        );
    }
}

export default Form1;