var http = require('http');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;
var app = express();
var server = http.Server(app);

server.listen(port);

var movieData = [
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
    },
    {title: 'Avengers: Civil War',
    views: {'January': 1030,
            'February': 5893,
            'March': 35010,
            'April': 9390,
            'May': 22390,
            'June': 400039
            }
    },

]
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Endpoint to get the searched movies

app.get('/movies/:movie', (req, res) => {
    console.log('HELLO FROM THE SERVER')
    var matches = [];
    var movieTitle = req.params.movie.toLowerCase();
    var movieInfo = movieData.find((movie) => {return movie.title.toLowerCase() === movieTitle});
    matches.push(movieInfo);
    var found = movieInfo !== undefined;
    if (found) {
        res.send(matches);
    } else {
        res.status(501).send('Could not find that movie');
    }
});


