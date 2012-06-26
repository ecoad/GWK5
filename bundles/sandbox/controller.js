var urlPrefix = '/sandbox/';

module.exports.createRoutes = function(serviceLocator, bundleViewPath) {
  [
    { path: urlPrefix + 'webcam-capture', action: getHomeController, method: 'get' }
  ].forEach(function(route) {
    serviceLocator.app[route.method](route.path, route.action);
  });

  function getHomeController(req, res) {
    res.render(bundleViewPath + '/webcam-capture');
  }
};