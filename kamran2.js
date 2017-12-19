$(document).ready(function() {
  $('.close').click(function() {
    $(this).parentsUntil('body').remove();
  });
  $('.edit').click(function() {
    var surname = $(this).parentsUntil('.body').find('.surname');
    var surnameInput = $(this).parentsUntil('.body').find('.surname-edit');
    surname.toggle();
    surnameInput.toggle();

    if ($(this).hasClass('active')) {
      surname.text(surnameInput.val());
    } else {
      surnameInput.val(surname.text());
    }
    $(this).toggleClass('active');
  });

});
