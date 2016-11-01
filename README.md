# node-express-api-es6-babel
A node JS server using express for routing, compiled with babel to use ES6

### Getting started
* clone/fork this repo `git clone https://github.com/wesleyd85/node-express-api-es6-babel.git`
* run `npm install`
* run `npm start`

Your server is up and running now. Test it by going to:
* [GET] http://localhost:3000/page/list
* [GET] http://localhost:3000/page/detail/:id
* [POST] http://localhost:3000/page/
* [PUT] http://localhost:3000/page/:id
* [DELETE] http://localhost:3000/page/:id

All the routes are currently working and have no logic what so ever to return. They just send back the JSON send to the route or give a success message.