'use strict';

require("babel/polyfill");
let Express = require('express');
let app = Express();
let React = require('react');
let MainComponent = React.createFactory(require('./dist_ES5/components/TodoApp'));

// Set view paths
app.set('views', './app/views')

// Set view engine
app.set('view engine', 'ejs');

app.use("/www", Express.static(__dirname + '/www'));

// Routing
app.get('/', (req, res) => {
  res.render('index', {
    main: React.renderToString(MainComponent())
  });
});

let server = app.listen(8080, () => {

  let host = server.address().address;
  let port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);

});
