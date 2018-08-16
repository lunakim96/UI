import React from 'react';
import { Button, Grid, Table, Segment } from 'semantic-ui-react';

//Display the buy option for each individual movie

const DataViewEntry = (props) => {

   return(
    <Grid.Column>
         <Segment>
        <h2 className='lineData'>{props.movie.title}</h2>  
        <p className='purchase'><strong>Release Date </strong>04 Jan 2018</p>

          <Table basic='very'>
            <Table.Body>
                <Table.Row>
                    <Table.Cell width={10}><center><h3 className='purchase'>Jul 3 2018</h3></center></Table.Cell>
                    <Table.Cell width='six'><center><Button className='selectbutton'>Buy Tickets</Button></center></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell><center><h3 className='purchase'>Jul 4 2018</h3></center></Table.Cell>
                    <Table.Cell><center><Button className='selectbutton'>Buy Tickets</Button></center></Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
        </Segment>
    </Grid.Column>
   );
}

export default DataViewEntry;