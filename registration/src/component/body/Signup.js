import React, { Component } from 'react';

class Signup extends Component {
    setValue(e,id){
        let key=id;
        let value=e.target.value;
        this.props.setValue(key,value,1);
    }
    onClick(e){
        this.props.onClick(e);
    }        
    render(){
        return(
            <div>
                <h1>Signup</h1>
                <p><input type='text' placeholder='Enter Firstname' onChange={e=>this.setValue(e,'firstname')}/></p>
                <p><input type='text' placeholder='Enter Lastname' onChange={e=>this.setValue(e,'lastname')}/></p> 
                <p><input type='email' placeholder='Enter email' onChange={e=>this.setValue(e,'email')}/></p>
                <p><input type='password' placeholder='Enter Password'  onChange={e=>this.setValue(e,'password')}/></p>
                <button onClick={e=>this.onClick(e)}>Signup</button>
            </div>
        );
    }
}

export default Signup;
