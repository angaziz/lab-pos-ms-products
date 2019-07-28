const { createTestClient } = require('apollo-server-testing');
const buildApp = require('../../src/server/build-app');

module.exports = () => {
  const { server } = buildApp();

  return createTestClient(server);
};
