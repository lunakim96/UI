import React from 'react';
import mainView from './mainView.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            searchQuery: '',
            movieList: [],
            selectedMovies: []          ,
        };
    }
    render() {  
        return (
            <div>
            <mainView />
            <h1>Title</h1>
            <p>Hello World!</p>
            </div>
        );
    };
}

export default App;