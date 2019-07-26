// Smooth Scrolling
$('#navbar a, .btn,navbar-link').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
                scrollTop: $(hash).offset().top - 5
            },
            1000
        );
    }
});