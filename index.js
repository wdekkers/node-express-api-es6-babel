import Express from 'express';
import bodyParser from 'body-parser';

let app = Express();

// Enable CORS calls
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// parse application/json
app.use(bodyParser.json());


// Loading the page list JSON file
let page_list = require("./json/page_list.json");

// Example static GET request
app.get('/page/list', function (req, res) {
  res.json(page_list);
});

// Example GET request with variable parameter
app.get('/page/detail/:id', function (req, res) { 
  let id = req.params.id;
  res.json(require("./json/pages/page_"+id+".json"));
});

// Example post request, just returns JSON send in
app.post('/page', function (req, res) { 
  res.json(req.body);
});

// Start the server
app.listen(3000, function () {
  console.log('Example API listening on port 3000!');
});

