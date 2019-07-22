const buildApp = require('./build-app')

const startServer = async () => {
  const app = await buildApp();

  app.listen({ port: 3000 }, () => {
    console.log('Server is up and running');
  });
};

startServer();
