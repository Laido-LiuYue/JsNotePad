/* exported $menubar*/
var $menubar = (function() {
  function show() {
    alert('hello menubar!');
  }

  return {show: show};
})();

$(function() {
  $menubar.show();
});
