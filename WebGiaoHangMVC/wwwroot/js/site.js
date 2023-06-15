// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $('#loginForm').on('submit', function (e) {
        e.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();
        if (username === "") {
            $('#username-error').css("visibility", "visible");
        }
        if (password === "") {
            $('#password-error').css("visibility", "visible");
        }
        if (username !== "" && password !== "") {
            this.submit();
        }
    });
    $('input[name=username]').on("keyup", function (e) {
        var username = $(this).val();
        if (username === "") {
            $('#username-error').css("visibility", "visible");
        } else {
            $('#username-error').css("visibility", "hidden");
        }
    });
    $('input[name=password]').on("keyup", function (e) {
        var password = $(this).val();
        if (password === "") {
            $('#password-error').css("visibility", "visible");
        } else {
            $('#password-error').css("visibility", "hidden");
        }
    });
    $('#registerForm').on('submit', function (e) {
        e.preventDefault();
        var email = $('#email').val();

        if (!validateEmail(email)) {
            $('#email-error').css("visibility", "visible");
        }

        var username = $('#username').val();
        var password = $('#password').val();
        if (username === "") {
            $('#username-error').css("visibility", "visible");
        }
        if (password === "") {
            $('#password-error').css("visibility", "visible");
        }

        var cfpassword = $('#cfpassword').val();
        if (cfpassword !== password) {
            $('#cfpassword-error').css("visibility", "visible");
        }

        var fullname = $('#fullName').val();
        if (fullname === "") {
            $('#cfpassword-error').css("visibility", "visible");
        }

        var phone = $('#phone').val();
        if (phone === "") {
            $('#phone-error').css("visibility", "visible");
        }

        var fullname = $('#fullName').val();
        if (fullname === "") {
            $('#fullname-error').css("visibility", "visible");
        }
        if (fullname !== "" && username !== "" && password !== "" && email !== "" && phone !== "") {
            this.submit();
        }

    });
    $('input[name=fullName]').on("keyup", function (e) {
        var data = $(this).val();
        if (data === "") {
            $('#fullname-error').css("visibility", "visible");
        } else {
            $('#fullname-error').css("visibility", "hidden");
        }
    });
    $('input[name=cfpassword]').on("keyup", function (e) {
        var data = $(this).val();
        var password = $('#password').val();
        if (data !== password) {
            $('#cfpassword-error').css("visibility", "visible");
        } else {
            $('#cfpassword-error').css("visibility", "hidden");
        }
    });
    $('input[name=email]').on("keyup", function (e) {
        var data = $(this).val();
        if (!validateEmail(data)) {
            $('#email-error').css("visibility", "visible");
        } else {
            $('#email-error').css("visibility", "hidden");
        }
    });
    $('input[name=phoneNumber]').on("keyup", function (e) {
        var data = $(this).val();
        if (data === "") {
            $('#phone-error').css("visibility", "visible");
        } else {
            $('#phone-error').css("visibility", "hidden");
        }
    });
    $('#productForm').on('submit', function (e) {
        e.preventDefault();

        var productName = $('input[name=productName]').val();
        var address = $('input[name=address]').val();
        var area = $('input[name=area]').val();
        var phone = $('input[name=phoneNumber]').val();

        if (productName === "") {
            $('#productName-error').css("visibility", "visible");
        }
        if (address === "") {
            $('#address-error').css("visibility", "visible");
        }
        if (area === "") {
            $('#area-error').css("visibility", "visible");
        }
        if (!validatePhone(phone)) {
            $('#phone-error').css("visibility", "visible");
        }
        if (productName !== "" && address !== "" && area !== "" && validatePhone(phone)) {
            this.submit();
        }
    })
});

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const validatePhone = (phone) => {
    return String(phone).toLowerCase().match(/^0{1}[0-9]{9}$/);
}