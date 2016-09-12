angular.module('port')
  .directive('scrollDir', function(){
    return {
      restrict: "A",
      link: function(scope, elem, attrs) {
            var section1Btn = document.getElementById("section1Btn"),
            section2Btn = document.getElementById("section2Btn"),
            section3Btn = document.getElementById("section3Btn");
            section4Btn = document.getElementById("section4Btn");
            section5Btn = document.getElementById("section5Btn");
            section6Btn = document.getElementById("section6Btn");

        section1Btn.onclick = function() {
          TweenLite.to(window, 1, {scrollTo:{y:"#section1", offsetY:0}});
        };

        section2Btn.onclick = function() {
          TweenLite.to(window, 1, {scrollTo:{y:"#section2", offsetY:0}});
        };

        section3Btn.onclick = function() {
          TweenLite.to(window, 1, {scrollTo:{y:"#section3", offsetY:40}});
        };

        section4Btn.onclick = function() {
          TweenLite.to(window, 1, {scrollTo:{y:"#section4", offsetY:0}});
        };

        section5Btn.onclick = function() {
          TweenLite.to(window, 1, {scrollTo:{y:"#section5", offsetY:0}});
        };

        section6Btn.onclick = function() {
          TweenLite.to(window, 1, {scrollTo:{y:"#section6", offsetY:0}});
        };
      }
    };
  });
