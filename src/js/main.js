$(document).ready(function() { // wait the DOM to be loaded
  $('#open_contact_modal').click(function(event) {
    showContactModal();
  });

  $('#contact_modal .modal-card-head .delete').click(function(event) {
    hideContactModal();
  });
  $('#contact_modal .modal-background').click(function(event) {
    hideContactModal();
  });
});

function showContactModal() {
  $('#contact_modal').addClass('is-active');
}

function hideContactModal() {
  $('#contact_modal').removeClass('is-active');
}

// send mail with ajax
$('#send_email').click(function(e) {
  e.preventDefault(); // the page won't restart with this
  var data = { // get data from #send_mail form to POST them later
    email: $('#email').val(),
    lastname: $('#lastname').val(),
    firstname: $('#firstname').val(),
    message: $('#message').val()
  };

  // AJAX
  $.ajax({
    url: "mail.php", // the php file that will treat the data from the form passed
    type: 'POST', // HTTP Method
    data: data, // data to POST
    success: function(data) { // function called in case of success
      $('#js_alert_success').css({'display' : 'block'}); // show success message
      setTimeout(function() {
        $('#js_alert_success').css({'display' : 'none'}); // after 3s hide success message
        $('#email').val("");
        $('#lastname').val("");
        $('#firstname').val("");
        $('#message').val("")
      }, 3000);
    },
      error: function(data) { // function called in case of error
        $('#js_alert_danger').css({'display' : 'block'}); // show error message
        setTimeout(function() {
          $('#js_alert_danger').css({'display' : 'none'}); // after 3s hide error message
          $('#email').val("");
          $('#lastname').val("");
          $('#firstname').val("");
          $('#message').val("")
        }, 3000);
        }
      });
  });
