var openMenuLogo = function () {
  $('#logo').click(function () {
    $('.menu').fadeToggle(1000).removeClass('hidden');
  })
};

var openMenuKey = function () {
  $(document).keypress(function () {
    $('.menu').fadeToggle(1000).removeClass('hidden');
  })
};

$(document).ready(openMenuLogo);
$(document).ready(openMenuKey);
