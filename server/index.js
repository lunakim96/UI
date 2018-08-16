var http = require('http');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;
var app = express();
var server = http.Server(app);

server.listen(port);

//Test Data
var movieData = [
    {title: 'Harry Potter',
    views: [49030,54893,2010,8390,3390,20039,1000]
    },
    {title: 'Avengers',
    views: [69030,84893,7010,5390,10039,20039,2000]
    },
    {title: 'Mission Impossible',
    views: [9030,4893,75010,6390,52390,100039,3000]
    },
    {title: 'Avengers: Civil War',
    views: [1030,5893,35010,9390,22390,40039,4000]
    },
    {title: 'Incredibles 2',
    views: [4030,5493,200,890,4590,2039,5000]
    },
]
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Endpoint to get the searched movies

app.get('/movies/:movie', (req, res) => {
    console.log('HELLO FROM THE SERVER')
  
    var movieTitle = req.params.movie.toLowerCase();
    var matches = movieData.filter((movie) => {return movie.title.toLowerCase().includes(movieTitle)});

    if (matches.length > 0) {
        res.send(matches);
    } else {
        res.status(501).send('Please try again');
    }
});


