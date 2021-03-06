var
express     = require('express'),
routes      = require('./routes'),
http		= require('http'),
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
app.get('/', function(req,res){
  res.end('hello world');
});

app.post('/save',routes.index);

app.get('/display',routes.send);

app.listen(4001);

