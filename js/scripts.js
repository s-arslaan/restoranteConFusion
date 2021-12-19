//modal triggers
$(document).ready(function() {
    $('#loginButton').click(function() {
        $('#loginModal').modal('toggle');
    });
    $('#reserveTableButton').click(function() {
        $('#reserveTableModal').modal('toggle');
    });
});

//carousel control buttons -- play & pauses
$(document).ready(function() {
     $('#mycarousel').carousel({ interval: 2000 });
     $('#carouselButton').click(function() {
        if ($('#carouselButton').children('span').hasClass('fa-pause'))
        {
            $('#mycarousel').carousel('pause'); //pause carousel
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play'))
        {
            $('#mycarousel').carousel('cycle'); //start carousel
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
});

// jQuery for tooltip on "Reserve Table" button
// $(document).ready(function() {
//     $('[data-toggle="tooltip"]').tooltip();
// });