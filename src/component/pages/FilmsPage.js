import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFilms } from '../../redux/actions/filmsAction';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

class FilmsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: 0,
            page: 0,
            pageSize: 10,
            sortDirection: 'ASC',
            sortParameter: 'filmId'
        };
    }



    componentDidMount() {
        this.props.fetchFilms(this.state.page, this.state.pageSize, this.state.sortDirection, this.state.sortParameter, this.props.loginReducer.token);
    }

    onPage = (event) => {
        console.log(event);
        this.props.fetchFilms(parseInt(event.page), parseInt(event.rows), "", "", this.props.loginReducer.token);
        this.setState({
            first: event.page * event.rows,
            page: event.page,
            pageSize: event.rows
        });
    }


    render() {
        return (
            <div>
                <DataTable value={this.props.filmsReducer.films} paginator={true}
                    rows={this.state.pageSize} rowsPerPageOptions={[5, 10, 50, 100]}
                    totalRecords={parseInt(this.props.filmsReducer.totalFilmsCount)}
                    loading={this.props.filmsReducer.fetching}
                    lazy={true} onPage={this.onPage} first={this.state.first}>

                    <Column field="filmId" header="Film ID" />
                    <Column field="title" header="Title" />
                    <Column field="releaseYear" header="Year" />
                </DataTable>
            </div>
        );
    }
}

const mapStateToProps = ({ filmsReducer, loginReducer }) => {
    return {
        filmsReducer,
        loginReducer
    }
};


const mapDispatchToProps = {
    fetchFilms
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmsPage);