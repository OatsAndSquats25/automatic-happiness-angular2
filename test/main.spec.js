(function() {
  'use strict';

  describe('Controller: AppController', function () {

    beforeEach(module('angular2_test_project'));
    beforeEach(module('ngComponentRouter'));

    var AppController;

    beforeEach(inject(function ($controller) {
      AppController = $controller('AppController');
    }));
  });
})();
