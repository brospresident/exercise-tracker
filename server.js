const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const usersRouter = require('./routes/users/users.router');
const exerciseRouter = require('./routes/exercises/exercises.router')

app.use(cors());
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use('/api/users', usersRouter);
app.use('/api/users', exerciseRouter);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});





const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
