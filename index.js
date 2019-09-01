const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/api/v1', require('./routes'));
// app.use('/users', require('./routes/users'));
// app.use('/projects', require('./routes/projects'));


app.listen(PORT, () => console.log('app server running at port ' + PORT))
