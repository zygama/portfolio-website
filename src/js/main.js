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
