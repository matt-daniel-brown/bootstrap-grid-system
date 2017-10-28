$(document).ready(function () {

  var tabsButton = $('#tabs-display-button');
  var tabsElements = $('.tab');
  var tabsAreVisible = true;


  function toggleTabsDisplay() {
    if (tabsAreVisible === true) {
      tabsElements.fadeOut();
      tabsButton.text('Show Tabs');
      tabsAreVisible = false;
    } else {
      tabsElements.fadeIn();
      tabsButton.text('Hide Tabs');
      tabsAreVisible = true;
    }
  }

  function togglePositionClassThenAnimate(callback) {
    $('.row').toggleClass('relPos');
    return callback();
  }
  function delayedAnimation(callback) {
    $('.row').animate({top: '50px'});
    // tabsElements.fadeToggle();
    return callback();
  }
  function finalToggleOriginalPositionClass(callback) {
    $('.row').toggleClass('relPos');
    return callback();
  }
  tabsButton.on('click', function () {
    // toggleTabsDisplay();

    togglePositionClassThenAnimate(delayedAnimation(finalToggleOriginalPositionClass(function () {
      tabsElements.toggle(100);
    })));

    // tabsElements.toggle(500);
    // tabsElements.fadeToggle();
  });

});
