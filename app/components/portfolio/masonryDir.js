angular.module('port')
  .directive('masonryDir', function(){

  return {
    restrict: 'A',
    link: function(scope, element, attribute) {
      $(document).ready(function(){
        $('.grid').masonry({
          itemSelector: '.grid-item',
          columnWidth: 160
        });

      });
    }
  };
});
