$(document).ready(function() {
    $('#btnValidate').click(function(e) {
        e.preventDefault;
        var sEmail = $('#txtEmail').val();
        if ($.trim(sEmail).length == 0) {
            alert('Please enter valid email address');
            e.preventDefault();
        }
        if (validateEmail(sEmail)) {
            console.log("email is valid");
        }
        else {
            alert('Invalid Email Address');
            e.preventDefault();
        }
    });
});

function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}
