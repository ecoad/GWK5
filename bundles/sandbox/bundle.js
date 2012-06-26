module.exports = {
  name: 'Sandbox',
  version: '0.0.1', 
  description: 'A technical playground',
  initialize: function (serviceLocator) {
    require('./controller').createRoutes(serviceLocator, __dirname + '/views');
  }
};