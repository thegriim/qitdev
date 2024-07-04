/*=========================================================================
Contact Form
=========================================================================*/

function isJSON(val) {
    var str = val.replace(/\\./g, '@').replace(/"[^"\\\n\r]*"/g, '');
    return (/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/).test(str);
}

$('#contact-form').validator().on('submit', function (e) {
    if (!e.isDefaultPrevented()) {
        // Prevent default form submission
        e.preventDefault();
        var $this = $(this),
            name = $this.find('input[name="name"]').val(),
            alerts = {
                success: "<div class='form-group' >\
                            <div class='alert alert-success alert-dismissible' role='alert'> \
                                <button type='button' class='close' data-dismiss='alert' aria-label='Close' > \
                                    <i class='ion-ios-close-empty' ></i> \
                                </button> \
                                <strong>Thank you, " + name + "!</strong> Your message has been sent. We'll get back to you as soon as possible.\
                            </div>\
                          </div>",
                error: "<div class='form-group' >\
                            <div class='alert alert-danger alert-dismissible' role='alert'> \
                                <button type='button' class='close' data-dismiss='alert' aria-label='Close' > \
                                    <i class='ion-ios-close-empty' ></i> \
                                </button> \
                                <strong>Error!</strong> Sorry, an error occurred. Please try again.\
                            </div>\
                         </div>"
            };

        $.ajax({
            url: 'https://formkeep.com/f/34aa7c1166b4',
            type: 'post',
            data: $this.serialize(),
            success: function (data) {
                $('#contact-form-result').html(alerts.success);
                $('#contact-form').trigger('reset');
            },
            error: function () {
                $('#contact-form-result').html(alerts.error);
            }
        });
    }
});
