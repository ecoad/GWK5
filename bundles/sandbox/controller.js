var urlPrefix = '/sandbox/'
  , snapshots = [];

module.exports.createRoutes = function(serviceLocator, bundleViewPath) {
  [
    { path: urlPrefix + 'webcam-capture', action: getWebcamCaptureController, method: 'get' }
  , { path: urlPrefix + 'post-to-server', action: getPostToServerController, method: 'get' }
  , { path: urlPrefix + 'post-to-server', action: postPostToServerController, method: 'post' }
  , { path: urlPrefix + 'video-to-server', action: getVideoToServerController, method: 'get' }
  , { path: urlPrefix + 'video-to-server', action: postPostToServerController, method: 'post' }
  ].forEach(function(route) {
    serviceLocator.app[route.method](route.path, route.action);
  });

  function getWebcamCaptureController(req, res) {
    res.render(bundleViewPath + '/webcam-capture');
  }

  function getPostToServerController(req, res) {
    res.render(bundleViewPath + '/post-to-server', {snapshots: snapshots.slice(snapshots.length - 10, 10).reverse()});
  }

  function postPostToServerController(req, res) {
    snapshots.push(req.body.data);
    res.send('ok');
  }

  function getVideoToServerController(req, res) {
    res.render(bundleViewPath + '/video-to-server');
  }

  function postVideoToServerController(req, res) {
    snapshots.push(req.body.data);
    res.send('ok');
  }
};