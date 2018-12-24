import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFilms } from '../../redux/actions/filmsAction';

class FilmsPage extends Component {

    componentDidMount() {
        this.props.fetchFilms();
    }

    render() {
        return (
            <div>
                <h2> Films Page</h2>
            </div>
        );
    }
}
const mapStateToProps = ({ filmsReducer }) => {
	return {
		filmsReducer
	}
};


const mapDispatchToProps = {
    fetchFilms
};

export default connect(mapStateToProps, mapDispatchToProps) (FilmsPage);