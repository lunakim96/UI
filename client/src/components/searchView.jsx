import React from 'react';
import debounce from 'lodash.debounce';
import SearchViewEntry from './SearchViewEntry.jsx';
import { Grid, Container, Icon, Input } from 'semantic-ui-react';

var sampleData = [
    {title: 'Harry Potter',
    views: {'January': 49030,
            'February': 54893,
            'March': 2010,
            'April': 8390,
            'May': 3390,
            'June': 20039
            }
    },
    {title: 'Avengers',
    views: {'January': 69030,
            'February': 84893,
            'March': 7010,
            'April': 4390,
            'May': 5390,
            'June': 10039
            }
    },
    {title: 'Mission Impossible',
    views: {'January': 9030,
            'February': 4893,
            'March': 75010,
            'April': 6390,
            'May': 52390,
            'June': 100039
            }
    }
]

class SearchView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            currentText: '',
        };
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.debounceInput = this.debounceInput.bind(this);
        
       
        this.handleEnter = this.handleEnter.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.debounceInput = debounce(this.debounceInput, 100);
    }
    
    
//Handle when the user types into the search box
    handleSearchInput(e) {
     
        this.setState({
            inputText: e.target.value,
        });

        this.debounceInput();
    }

//Handle when user presses the enter key
    handleEnter(e) {
       
        if(e.keyCode === 13 & !e.shiftKey) {
            console.log('enter key has been pressed');
            this.props.search(this.state.currentText);
        }
    }

//Handle when the user clicks submit
    handleSubmit() {
        this.props.search(this.state.currentText);
    }

//Debounce
    debounceInput() {
        this.setState({
            currentText: this.state.inputText
        });
    }

    

    render() {  
     
    let gridView;

    if(this.props.movies.length === 0) {
        gridView = (
            <Grid columns={1}>
                <Grid.Row>
                    <p className='searchtext'>please search a movie...</p>
                </Grid.Row>
            </Grid>
        )
        
    } else {
        gridView = (
            <Grid stackable columns={4}>
                <Grid.Row>
                    {this.props.movies.map((singleMovie, i) => 
                    <SearchViewEntry key={i} movie={singleMovie} select={this.props.select}/>
                    )}
                </Grid.Row>
            </Grid>
        )
    }

        return (
            <Container className='searchview'>
                <Input icon={<Icon name='search' />}  placeholder="Search a movie..." onKeyDown={this.handleEnter} onChange={this.handleSearchInput} onClick={this.handleSubmit} />
                {gridView}
            </Container>
        );
    };
}

export default SearchView;

