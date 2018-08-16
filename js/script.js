$(document).ready(function () {


// Display pop-up modal on "Open modal" button click
    $('#openModalBtn').on('click', function () {
        $('.alert-modal').addClass('show-modal');
    });

// Close pop-up modal on "x" button click
    $('.close-btn').on('click', function () {
        $('.alert-modal').removeClass('show-modal');
    });

// Close pop-up modal on "Cancel" button click
    $('.default-btn').on('click', function () {
        $('.alert-modal').removeClass('show-modal');
    });

// Close pop-up modal on "Uninstall" button click after 500 milliseconds
    function uninstallBtnClick() {
        alert('DONE');
    }

    $('.red-btn').on('click', function () {
        $('.alert-modal').removeClass('show-modal');
        setTimeout(uninstallBtnClick, 500);
    });

// Close pop-up modal on outside the modal click
    $(window).on('click', function (event) {
        var target = $(event.target);
        if (target.is('.alert-modal')) {
            $('.alert-modal').removeClass('show-modal');
        }
    });

});