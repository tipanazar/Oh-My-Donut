(() => {
  $('.about-us-btn').on('click', showText);

  function showText() {
    $('[data-more-text-about]').toggle('slow');
    $('[data-read-more-about]').toggleClass('is-shown');
  }
})();