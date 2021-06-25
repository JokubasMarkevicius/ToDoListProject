const mongoose = require('mongoose');
const dbName = "ToDoListItems";

mongoose.connect(`mongodb://localhost:27017/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once('open', () => console.log('Mongoose Connected'))
  .on('error', console.error.bind(console, 'Connection Error'));

module.exports = mongoose;