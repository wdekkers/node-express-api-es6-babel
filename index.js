import Express from 'express';
let app = Express();

// Enable CORS calls
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Define the timeout
const timeout_ms = 500;

// Loading the page list JSON file
let page_list = require("./json/page_list.json");

app.get('/page/list', function (req, res, next) {
  res.json(page_list);
});

app.get('/page/detail/:id', function (req, res, next) { 
  let id = req.params.id;
  res.json(require("./json/pages/page_"+id+".json"));
});

// Start the server
app.listen(3000, function () {
  console.log('Example API listening on port 3000!');
});

