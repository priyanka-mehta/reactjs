import React, { Component } from 'react';

class Login extends Component {
    setValue(e,id){
        let key=id;
        let value=e.target.value;
        this.props.setValue(key,value,'form2');
    }        
    onClick(e){
        this.props.onClick(e);
    }     
    render(){
        return(
            <div>
            <h1>Login</h1>
            
                <p><input type='text' placeholder='Enter email' onChange={e=>this.setValue(e,'email')}/></p>
                <p><input type='password' placeholder='Enter Password'  onChange={e=>this.setValue(e,'password')}/></p>
                <button onClick={e=>this.onClick(e)}>Login</button>
            
            </div>
            );
        }
    }
    
    export default Login;