import React from 'react';
import { Line} from 'react-chartjs-2';
import {Grid, Segment, Container, GridColumn} from 'semantic-ui-react';
import DataViewEntry from './DataViewEntry.jsx';

class DataView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.sumofData = this.sumofData.bind(this);
      
    }
    sumofData(data) {
        return data.reduce((accumulator, currentValue) => {return accumulator + currentValue});
    }
    
    render() {  

        let gridView;

        //View when user selects only 1 movie

            if (this.props.movies.length === 1) {
                console.log(this.props.movies[0]);
                gridView = ( 
                <Grid stackable columns={1}>
                    <Grid.Row stretched>
                        <Grid.Column className='lineData'>
                            <center><h2 text-align='center'>Total Movie Sales</h2><p>Comparison - {this.props.movies[0].title} and </p><p className='addmessage'>'please add movie 2'</p>
                            Average value of sales in the past month in: <strong>United states</strong><br/>
                            <strong><h3>{this.props.movies[0].title}</h3></strong></center>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                )  
            }

        //View when user selects 2 movies
        
            else if(this.props.movies.length === 2) {
                let movieOne = this.props.movies[0].title;
                let movieOneData = this.props.movies[0].views
                let movieTwo = this.props.movies[1].title
                let movieTwoData = this.props.movies[1].views
                let sumofDataOne = this.sumofData(movieOneData);
                let sumofDataTwo = this.sumofData(movieTwoData);

                
                let data = {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                    datasets: [
                        {
                            label: movieOne,
                            fill: false,
                            data: movieOneData,
                            lineTension: 0.1,
                            backgroundColor: '#8D99AE',
                            borderColor: '#8D99AE',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                        },
                        {
                            label: movieTwo,
                            fill: false,
                            data: movieTwoData,
                            lineTension: 0.1,
                            backgroundColor: '#011627',
                            borderColor: '#011627',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(71,102,122,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                        },
                    ]
                };
                gridView = (
                <Grid stackable columns={2}>
                    <Grid.Row stretched>
                        <Grid.Column className='lineData'>
                                <h2>Total Movie Sales</h2><p>Comparison - {movieOne} and {movieTwo}</p>
                                <Line data={data} />
                        </Grid.Column>
                        <Grid.Column className='totalData'>
                        <h3>Average value of sales in the past month in: <strong>United states</strong></h3>
                            <p>All sales: {sumofDataOne + sumofDataTwo}
                            <h3>{sumofDataOne}</h3>
                            Total orders - {movieOne}
                            <h3>{sumofDataTwo}</h3>
                            Total orders - {movieTwo}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <p><strong>Analysis of sales: </strong>The value has been changed over time, and last month reached a level over $50,000.</p>
                    </Grid.Row>
                    <Grid.Row stretched>  
                        {this.props.movies.map((movie, i) => 
                        <DataViewEntry key={i} movie={movie} />
                            )}
                    </Grid.Row>
                </Grid>
                )
            }

            //View when no moves are selected

            else {
                gridView = (
                <Grid stackable columns={2}>
                    <Grid.Row stretched>
                        <Grid.Column className='lineData'>
                                <center><h2>Total Movie Sales</h2><p>'Please select 2 movies'</p></center>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                )
            }
    
        return (
            <Container>
                {gridView}
            </Container>
        );
    };
}

export default DataView;