/* exported $editor */
var $editor = (function() {
  function show() {
    alert('hello editor!');
  }

  return {show: show};
})();

$(function() {
  $editor.show();
});
