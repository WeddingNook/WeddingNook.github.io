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
        $('#turn-off-lights').click(function (){
            if ($('head').has)
           $('head').append('<link rel="stylesheet" href="http://sitescaffolding.com/wp-content/themes/SiteScaffolding/css/light.css" type="text/css" />');
        });
});