$(document).ready(function () {
    $('.remove-row').click(function () {
        var userId = $(this).data('id');

        $.ajax({
            url: `/delete/${userId}`,
            type: 'DELETE',
        }).done(function (response, textStatus) {
            if (response === 'success') {
                window.location.reload();
            }
        })
    });
});