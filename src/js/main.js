$(document).ready(function() { // wait the DOM to be loaded
  $('#open_modal').click(function(event) {
    showModal();
  });

  $('.modal-card-head .delete').click(function(event) {
    hideModal();
  });
  $('.modal .modal-background').click(function(event) {
    hideModal();
  });
});

function showModal() {
  $('#modal_to_open').addClass('is-active');
}

function hideModal() {
  $('#modal_to_open').removeClass('is-active');
}
