/*-------------------------------------
  EASY WAYPOINT FUNCTIONS
-------------------------------------*/
// Creates a standerd waypoint with the option of custom logic. To pass in
// the custom logic, just create a function with all the logic you would
// like to call when the waypoint is activated, then pass just the name of the
// function into this function without qoutes. Note that these waypoint functions are
// available to any js file in this project
// Example Single Waypoint: createWaypoint('.that', 'is-active', '35%', animateThat)
function createWaypoint(element, classToToggle, offset, cb) {
  return jQuery(element).waypoint(function(direction) {
    jQuery(element).toggleClass(classToToggle);
    if (typeof cb !== "undefined") {
      cb(element, classToToggle, offset, direction);
    }
  }, { offset: offset });
}

// A loop for standerd waypoint creation. Also has the ability to pass in custom
// logic, and classToToggle. Both are optional.
// Example Multiple Waypoints: waypointer(['.that', '#that', '#this'], 'resolved', '10%', animate);
function waypointer(elementArray, classToToggle, offset, cb) {
  for (var i=0; i < elementArray.length; i++) {
    createWaypoint(elementArray[i], classToToggle, offset, cb);
  }
  return true;
}

function showIntro() {
  $('.about_container_heading').toggleClass('active');
  $('.about_container_paragraph').toggleClass('active');
  $('.about_container_buttons_container').toggleClass('active');
}

// This will be invoked when the page loads
;(function($){
  $(function() {

    // $('#about_container').waypoint(function() {
    //   $('.about_container_heading').toggleClass('active');
    //   $('.about_container_paragraph').toggleClass('active');
    //   $('.about_container_buttons_container').toggleClass('active');
    // }, { offset: '20%' });

    // place waypoints here
    // waypointer(['#about_container'], 'active', '60%', showIntro);
    // waypointer(['#skills_heading', '.branding-icon', '.illustration-icon', '.responsive-icon', '.html-icon', '.css-icon', '.foundation-icon'], 'active', '33%');
    // waypointer(['.javascript-icon', '.jquery-icon', '.angular-icon', '.grunt-icon', '.node-icon', '.mongo-icon'], 'active', '15%');
    // createWaypoint('.javascript-icon', null, '45%', showSkills);
  });
}(jQuery));
