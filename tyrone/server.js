
var
express     = require('express'),
app         = express();

// -- Configuration --
app.configure(function () {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');

  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.favicon());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function (req, res) {
  res.end('hello world');
});

app.post('/save', function (req, res) {

  var formData = {
    firstname : req.param('firstname'),
    lastname  : req.param('lastname'),
    email     : req.param('email'),
    password  : req.param('password')
  };

  console.log(formData);
  res.json(formData);
});



app.listen(4001);
