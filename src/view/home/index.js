import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <h1>Homeaaaa</h1>
                <button onClick={this.jumpToLogin}>jumpToLogin</button>
            </>
        );
    }

    jumpToLogin = () => {
        this.props.history.push('/login/signin');
    }
}
 
export default withRouter(Home);