namespace mainsos.Service {

  class TestService {
    private TEST_RESOURCE =  this.$resource('app.listen(process.env.TESTPORT)')

    constructor(private $resource){}

    public getAll(){
      return this.TEST_RESOURCE.query();
    }

  }
  angular.module('mainsos').service('testService', TestService);
}
