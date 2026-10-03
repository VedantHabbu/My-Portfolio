$(document).ready(function () {
    // Display current year
    $('#year').text(new Date().getFullYear());

    // Highlight the current page
    const page = window.location.pathname.split('/').pop() || 'index.html';
    $('.navbar a').each(function () {
        if ($(this).attr('href') === page) {
            $(this).addClass('active');
        }
    });

    // Print resume
    $('#printBtn').click(function () {
        window.print();
    });
});
