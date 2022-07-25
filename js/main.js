$(function() {
    $(window).scroll(function() {
        $('.future').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+350) {
                $(this).addClass('fadeInUp');
                document.querySelector('.future').style.display = 'block';
            }
        });
    });

    $(window).scroll(function() {
        $('#tickets .container').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+350) {
                $(this).addClass('fadeInUp');
                document.querySelector('#tickets .container').style.display = 'block';
            }
        });
    });
})
