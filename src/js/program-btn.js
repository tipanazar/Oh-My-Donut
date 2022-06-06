(() => {
  $('.program-btn').on('click', showText);

  function showText() {
    $('[data-more-text-program]').toggle('slow');
    $('[data-read-more-program]').toggleClass('is-shown');
  }
})();
