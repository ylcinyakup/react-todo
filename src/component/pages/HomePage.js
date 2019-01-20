import React, { Component } from 'react';
import { connect } from 'react-redux';


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
    
        };
    }

    componentDidMount() {
    }



    render() {
        return (
            <div>
               <h1> asdasd</h1>
            </div>
        );
    }
}
const mapStateToProps = () => {
    return {
    }
};


const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);