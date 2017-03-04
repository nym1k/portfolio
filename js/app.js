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

        // Smooth Scroll
        $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });

        // Apply Header Style After Hero
        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          var height = $('#hero').height();
          var width = $(window).width();

          if (scroll >= height) {
            $(".nav").addClass("dark-header");
          } else {
            $(".nav").removeClass("dark-header");
          }
        });

        // Form Code
        // Get the form.
      	var form = $('#ajax-contact');

      	// Get the messages div.
      	var formMessages = $('#form-messages');

      	// Set up an event listener for the contact form.
      	$(form).submit(function(e) {
      		// Stop the browser from submitting the form.
      		e.preventDefault();

          $.ajax({
        		url: '//formspree.io/sleeping.stars@gmail.com',
        		method: 'POST',
        		data: $(this).serialize(),
        		dataType: 'json',
            success: function(response) {
        			// Make sure that the formMessages div has the 'success' class.
        			$(formMessages).removeClass('error');
        			$(formMessages).addClass('success');

        			// Set the message text.
        			$(formMessages).text("Message sent!");

              setTimeout(function(){
                $(formMessages).removeClass('success');
                $(formMessages).text("");
              }, 6000);

        			// Clear the form.
        			$('#name').val('');
        			$('#email').val('');
        			$('#message').val('');
        		},
        		error: function(data) {
        			// Make sure that the formMessages div has the 'error' class.
        			$(formMessages).removeClass('success');
        			$(formMessages).addClass('error');

        			// Set the message text.
        			if (data.responseText !== '') {
        				$(formMessages).text("Oops, there was an error.");
        			} else {
        				$(formMessages).text('Oops! An error occured and your message could not be sent.');
        			}

              setTimeout(function(){
                $(formMessages).removeClass('error');
                $(formMessages).text("");
              }, 6000);
        	   }
           });
      	});
      }
    };

App.Init();

})();
});
