import React from 'react';
import { Button, Grid, Segment } from 'semantic-ui-react';


//This file requires debugging of the select button

const SearchViewEntry = (props) => {
console.log('search view ', props.movie) 
   return (
   
    <Grid.Column>
        <Segment>
            <h3>{props.movie.title} </h3>
            <Button className='selectbutton' onClick={() => props.select(props.movie)}>select</Button>
        </Segment>
    </Grid.Column>
   );
}

export default SearchViewEntry;