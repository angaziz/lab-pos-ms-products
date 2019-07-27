const buildApp = require('./build-app')

module.exports = async () => {
  const app = await buildApp();

  app.listen({
    host: process.env.SERVICE_HOST,
    port: process.env.SERVICE_PORT
  }, () => {
    console.log('Server is up and running');
  });
};
