const mongoose = require('mongoose');

const URI = 'mongodb+srv://1eduardo6:LOVEedu12@clusterdev.9iz4tr1.mongodb.net/barba-teste?retryWrites=true&w=majority';

const env = process.env.NODE_ENV || 'dev';
let options = {};

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose
  .connect(URI, options)
  .then(() => console.log('DB is Up!'))
  .catch((err) => console.log(err));
