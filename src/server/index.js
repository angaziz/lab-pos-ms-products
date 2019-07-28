const buildApp = require('./build-app');
const connectDb = require('./connect-db');

module.exports = async () => {
  try {
    await connectDb();
    const { app } = buildApp();

    app.listen({
      host: process.env.SERVICE_HOST,
      port: process.env.SERVICE_PORT,
    }, () => {
      // eslint-disable-next-line no-console
      console.log('Server is up and running');
    });
  } catch (error) {
    throw error;
  }
};
