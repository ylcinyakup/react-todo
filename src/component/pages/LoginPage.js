import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendSignInRequest, sendSignUpRequest } from '../../redux/actions/loginAction';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
    
        };
    }

    componentDidMount() {
        //this.props.sendSignUpRequest('yakup yalcin','ylcinyakup','ylcinyakup@gmail.com','asdqwe123');
        this.props.sendSignInRequest('ylcinyakup','asdqwe123');
       
    }

    render() {
        return (
            <div>
                login page
            </div>
        );
    }
}

const mapStateToProps = ({ loginReducer }) => {
    return {
        loginReducer
    }
};

const mapDispatchToProps = {
    sendSignInRequest,
    sendSignUpRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);