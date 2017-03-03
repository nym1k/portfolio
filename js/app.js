$(function(){
  (function(){
    var App = {
      Init: function() {
        App.UI();
      },
      UI: function(){

        // Full Screen Hero
        checkSize();
        $(window).resize(checkSize);
        function checkSize() {
          var height = $('#hero').height();
          $('.fullscreen').css('height', height);
        }

        // Navbar Toggle
        $('.nav-toggle').on('click', function(){
          $('.nav-menu').toggleClass('active');
        });
      }
    };

App.Init();

})();
});
