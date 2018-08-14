import React from 'react';
import MainView from './MainView.jsx';
import SearchView from './SearchView.jsx';
import DataView from './DataView.jsx';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            movieList: [],
            selectedMovies: []          ,
        };
        this.searchMovies = this.searchMovies.bind(this);
    }
    
searchMovies(movie) {
    axios.get('/movies/' + movie)
        .then((res) => {
            this.setState({
                movieList: res.data
            });
            console.log('here is my movie', this.state.movieList)
        })
        .catch((err) => {
            console.log(err);
        })
}

    render() {  
        return (
            <div>
            <MainView />
            <SearchView search={this.searchMovies} movies={this.state.movieList}/>
            <DataView />
            </div>
        );
    };
}

export default App;