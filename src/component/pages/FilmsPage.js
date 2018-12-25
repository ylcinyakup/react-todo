import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFilms } from '../../redux/actions/filmsAction';

class FilmsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 4,
            pageSize: 10,
            sortDirection: 'DESC',
            sortParameter: 'filmId'
        };
    }



    componentDidMount() {
        this.props.fetchFilms(this.state);
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

export default connect(mapStateToProps, mapDispatchToProps)(FilmsPage);