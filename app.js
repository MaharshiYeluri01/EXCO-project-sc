const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const Post = require('./models/posts');

mongoose.Promise = global.Promise;
//mongoose.connect(config.database, {useNewUrlParser: true});

//mongoose.connection.on('connected', () => {
  //console.log('Connected to database '+config.database);
//});

//mongoose.connection.on('error', (err) => {
  //console.log('Database error: '+err);
//});

mongoose.connect("mongodb://maharshi:maharshi22@ds161751.mlab.com:61751/myexco")
mongoose.connection.once('open',()=>{
  console.log("connected to db")
})
const app = express();

const users = require('./routes/users');
const posts = require('./routes/posts');
const collab = require('./routes/collab')

const port =process.env.PORT || 3000;


app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());



app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);


app.use('/users', users);
app.use('/posts', posts);
app.use('/collab',collab)

app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.listen(port, () => {
  console.log('Server started on port '+port);
});
