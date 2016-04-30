var previousScroll = 0;
$(window).scroll(function() {
  var currentScroll = $(this).scrollTop();
  if (currentScroll > previousScroll) {
    // scrolling down, bring the header out of view.
  }else {
   //  scrolling up, bring the header into view
  }
  previousScroll = currentScroll;
});
