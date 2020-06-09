module.exports = {
    currentUrl: `http://${process.env.WEBCLIENT_HOST}:${process.env.WEBCLIENT_PORT}`,
    responseCheck: '[{"message":"hello world"}]',
    incorrectserverURLInput: `http://${process.env.WEBCLIENT_HOST}:8992/incorrect-endpoint`,
    incorrectResponseCheck: 'TypeError: Failed to fetch'
  };
  