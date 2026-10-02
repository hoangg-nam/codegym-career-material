
$(document).ready(function () {
  $('.navbar-nav .nav-link, .navbar-brand, .navbar .btn').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });

  $('#careerForm').on('submit', function (event) {
    event.preventDefault();

    if (!this.checkValidity()) {
      this.classList.add('was-validated');
      return;
    }

    $('#formMessage').removeClass('d-none').hide().fadeIn(250);
  });
});
