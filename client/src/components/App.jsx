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
            selectedMovies: [],
        };
       
        this.searchMovies = this.searchMovies.bind(this);
        this.updateSelectedMovies = this.updateSelectedMovies.bind(this);
    }

//Get the list of movies that matches the search query
searchMovies(movie) {

    axios.get('/movies/' + movie)
        .then((res) => {
            console.log(res.data);
            this.setState({
                movieList: res.data
            });
        })
        .catch((err) => {
            console.log(err);
        })
}

//Updated the list of movies being compared
updateSelectedMovies(movie) {

    let selectList = this.state.selectedMovies;
    
    if(selectList.length === 2) {
        selectList.shift();
        selectList.push(movie);
        this.setState({selectedMovies: selectList});
    } else {
        selectList.push(movie);
        this.setState({selectedMovies: selectList});
    }
}

    render() {  
        return (
            <div>
            <MainView />
            <SearchView search={this.searchMovies} movies={this.state.movieList} select={this.updateSelectedMovies}/>
            <DataView movies={this.state.selectedMovies}/>
            </div>
        );
    };
}

export default App;