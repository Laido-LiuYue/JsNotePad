/* exported $dlgRow */
var $dlgRow = (function() {
    var DOM = ''
          + '<div class="notepad-dlg-row">'
            + '<div class="dialogbox">'
              + '<div class="titlebar">'
                + '<p class="title">转到指定行</p>'
                + '<span class="btn-cancel">✖</span>'
              + '</div>'
              +'<hr>'
              + '<div class="main">'
                + '<div class="row">'
                  +'<p class="title">行号（L)：</p>'
                  +'<input class="search-row" type="text" id="row" value="">'
                +'</div>'
                +'<button class="btn-ok" type="submit">转到</button>'
                +'<button class="btn-cancel" type="submit">取消</button>'
              + '</div>'
            + '</div>'
          + '</div>';

  var $dlg = $(DOM),
      //$row = Number($("#row").val()),
      $btnOk = $dlg.find('.btn-ok'),
      $btnClose = $dlg.find('.btn-cancel');

  function show() {
        $('body').append($dlg);
        $dlg.find('.dialogbox').draggable({handle: $dlg.find('.titlebar')});

        $btnOk.click(function() {
          $dlg.remove();    
          //if($row < 11 & $row < 0)){
          console.log('goto btn click!GOTO'+ Number($('#row').val()) +' lines!')
          //}else{
            //alert('error rows!');
          //}
        });
        $btnClose.click(function() {
          $dlg.remove();  
        });
                      
  }
    return {show: show};
})();
