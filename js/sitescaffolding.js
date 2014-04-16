$(document).ready(function() {
    $('body').addClass('js');
    
    // Responsive menu
        var $menu = $('.menu');
        var $menuToggle = $('.menu-toggle');

        // On click toggle block class, overriding display: none;
        $menuToggle.click(function() {
            $menu.toggleClass('block');
            return false;
        });

    // Drop-down
        var $body = $('body');
        var $dropDown = $('.drop-down');
        var $dropDownToggle = $('.drop-down-toggle');

        // On click toggle block class, overriding display: none;
        $dropDownToggle.click(function() {
            $dropDown.toggleClass('block');
            return false;
        })

        // Prevent click on dropdown from closing it
        $dropDown.click(function() {
            event.stopPropagation();
        });

        // On click of body remove block to hide menu
        $body.click(function() {
            $dropDown.removeClass('block');
        });

    // Lightbox
        $('.lightbox-trigger').click(function(e) {
            
            // Prevent default link action
            e.preventDefault();

            // Get image link tag
            var imgLink = $(this).attr("href");

            // If lighbox exists
            if ($('#lightbox').length > 0) {

                // Show image that was linked
                $('#content').html('<img src="'+ imgLink + '" />');
                $('#ligthbox').show();
            }

            // If lightbox doesn't exist
            else {

                // Create lightbox HTML
                var lightbox =
                '<div id="lightbox-overlay">' +
                    '<div id="lightbox">' +
                        '<img src="' + imgLink + '" />' +
                    '</div>' +
                '</div>';

                // Append lightbox HTML to body
                $('body').append(lightbox);
            }
        });

        // Click anywhere to close lighbox
        $('#lightbox').click(function() {
            $('#lightbox').fadeOut("fast");
        });

    // Toggle button
        var $toggleButton = $('.toggle')

        $toggleButton.click(function() {
            $toggleButton.toggleClass('active');
            return false;
        });

    // Light/Dark
    //    $('#turn-off-lights').click(function (){
    //        if ($('head').has)
    //      $('head').append('<link rel="stylesheet" href="http://sitescaffolding.com/wp-content/themes/SiteScaffolding/css/light.css" type="text/css" />');
    //    });
});

jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value);
    }, "type the correct answer -_-");
 
// validate contact form
$(function() {
    $('#contact').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            },
            answer: {
                required: true,
                answercheck: true
            }
        },
        messages: {
            name: {
                required: "come on, you have a name don't you?",
                minlength: "your name must consist of at least 2 characters"
            },
            email: {
                required: "no email, no message"
            },
            message: {
                required: "um...yea, you have to write something to send this form.",
                minlength: "thats all? really?"
            },
            answer: {
                required: "sorry, wrong answer!"
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"notify.php",
                success: function() {
                    $('#contact :input').attr('disabled', 'disabled');
                    $('#contact').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#contact').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });
});