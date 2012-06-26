var urlPrefix = '/sandbox/'
  , snapshots = [];

module.exports.createRoutes = function(serviceLocator, bundleViewPath) {
  [
    { path: urlPrefix + 'webcam-capture', action: getWebcamCaptureController, method: 'get' }
  , { path: urlPrefix + 'post-to-server', action: getPostToServer, method: 'get' }
  , { path: urlPrefix + 'post-to-server', action: postPostToServer, method: 'post' }
  ].forEach(function(route) {
    serviceLocator.app[route.method](route.path, route.action);
  });

  function getWebcamCaptureController(req, res) {
    res.render(bundleViewPath + '/webcam-capture');
  }

  function getPostToServer(req, res) {
    res.render(bundleViewPath + '/post-to-server', {snapshots: snapshots.slice(0, 10).reverse()});
  }

  function postPostToServer(req, res) {
    snapshots.push(req.body.data);
    res.send('ok');
  }
};