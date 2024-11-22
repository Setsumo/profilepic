$(document).ready(function () {
  $('.toggle-button').on('click', function () {
    const card = $('.profile-card');
    const bio = $('.profile-bio');
    const img = $('.profile-image');
    const button = $(this);

    if (card.hasClass('expanded')) {

      card.animate({ height: '150px' }, 300, function () {
        bio.hide();
      });
      img.css('filter', 'blur(0)');
      button.text('Show More');
    } else {
      card.animate({ height: 'auto' }, 300, function () {
        bio.show(); 
      });
      img.css('filter', 'blur(5px)');
      button.text('Show Less');
    }

    card.toggleClass('expanded');
  });
});

  