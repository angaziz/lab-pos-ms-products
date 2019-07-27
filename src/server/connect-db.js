const mongoose = require('mongoose');

module.exports = () => {
  const connectionString = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
  return mongoose.connect(connectionString, {
    useNewUrlParser: true
  });
};