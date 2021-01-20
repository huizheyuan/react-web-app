import React, { Component } from 'react';
import { withRouter, NavLink, Link } from 'react-router-dom';
import ajax from '../../util/ajax';
import '../../looking/scss/login.scss';
class Login extends Component {
    constructor(props) {
        super(props);
        this.refUser = React.createRef();
        this.refPassword = React.createRef();
    }
    state = {  }
    
    render() { 
        return ( 
            <div className='login-container'>
                <NavLink to='/login/signin' activeClassName='selected'>Signin</NavLink>
                <NavLink to='/login/register' activeClassName='selected'>Register</NavLink>
                <Link to='/home' className='fr'>Home</Link>

                {this.renderOption(this.props)}
            </div>
        );
    }
    renderOption = (props) => {
        if (props.match.params.value === 'signin') {
            return (
                <div className='login-content'>
                    <p>Signin</p>
                    用户名：<input type='text' ref={this.refUser} />
                    密  码：<input type='password' ref={this.refPassword} />
                    <input type='button' onClick={this.toSignin} defaultValue='Signin'/>
                </div>
            )
        } else {
            return (
                <div className='login-content'>
                    <p>Register</p>
                    用户名：<input type='text' ref={this.refUser} />
                    密  码：<input type='password' ref={this.refPassword} />
                    确认密码：<input type='password' ref={this.refPassword} />
                    <input type='button' onClick={this.toRegister} defaultValue='Register'/>
                </div>
            )
        }
    }
    toSignin = ()=>{
        ajax.post('/user/check', {
            user: this.refUser.current.value,
            password: this.refPassword.current.value
        }).then(res=>{
            if (res.data.code===1 && res.data.token) {
                alert(res.data.msg)
                localStorage.setItem('token', res.data.token)
                // this.props.history.push('/home')
            } else {
                alert(res.data.msg)
            }
        })
    }
    toRegister = () => {}
}
 
export default withRouter(Login);