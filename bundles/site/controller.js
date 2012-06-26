module.exports.createRoutes = function(serviceLocator, bundleViewPath) {
  [
    { path: '/', action: getHomeController, method: 'get' }
  , { path: '/cycle', action: getCycleController, method: 'get' }
  ].forEach(function(route) {
    serviceLocator.app[route.method](route.path, route.action);
  });

  function getHomeController(req, res) {
    res.render(bundleViewPath + '/home');
  }

  function getCycleController(req, res) {
    var now = new Date()
      , then = new Date('2012-07-31')
      , days
      , weeks;

    days = Math.floor(((((then.getTime() - now.getTime()) / 1000) / 60) / 60) / 24);
    weeks = Math.ceil(days / 7);

    res.render(bundleViewPath + '/cycle', {days: days, weeks: weeks});
  }
};