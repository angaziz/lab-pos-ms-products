const buildApp = require('./build-app')

const startServer = async () => {
  const app = await buildApp();

  app.listen({
    host: process.env.SERVICE_HOST,
    port: process.env.SERVICE_PORT
  }, () => {
    console.log('Server is up and running');
  });
};

startServer();
