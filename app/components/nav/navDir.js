angular.module('port')
  .directive('navDir', function(){

  return {
    restrict: 'A',
    templateUrl: 'app/components/nav/navTmpl.html',
    link: function(scope, element, attribute) {
      console.log('loaded');
      $('#toggle-nav').on('click', function(){
        console.log('here');
          $(this).toggleClass('active');
          $('#menu').toggleClass('open');
          $('main').toggleClass('hide');
      });
      $('.menu-list').on('click', '.nav-link',  function(e){
        $('#toggle-nav').trigger(e.type);
      });
    }
  };
});
