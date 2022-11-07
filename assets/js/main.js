$(document).ready(() => {
  $('.navbar__btn').on('click', function () {
    $(this).toggleClass('active');
    $('.header-navbar__list').toggleClass('active');
  });
});