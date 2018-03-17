$(document).ready(function() { // wait the DOM to be loaded
  $('#open_contact_modal').click(function(event) {
    showContactModal();
  });

  $('.modal-card-head .delete').click(function(event) {
    hideContactModal();
  });
  $('.modal .modal-background').click(function(event) {
    hideContactModal();
  });
});

function showContactModal() {
  $('#contact_modal').addClass('is-active');
}

function hideContactModal() {
  $('#contact_modal').removeClass('is-active');
}
