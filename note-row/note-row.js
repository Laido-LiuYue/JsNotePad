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
                  +'<input class="search-row" type="text" autofocus>'
                +'</div>'
                +'<button class="btn-ok btn" type="submit">转到</button>'
                +'<button class="btn-cancel btn" type="submit">取消</button>'
              + '</div>'
            + '</div>'
          + '</div>';

  var $dlg = $(DOM),
      $btnOk = $dlg.find('.btn-ok'),
      $btnClose = $dlg.find('.btn-cancel'),
      $searchrow = $dlg.find('.search-row'),
      $titleBar = $dlg.find('titlebar');

  var cfg= {
    lineNum: 1,
    totalLine: 1,
    gotoHandler: null
  }

  function destoryDlg() { $dlg.remove();  }

  function gotoHandler() {
    if(!validateLineNum()) return;

    cfg.gotoHandler($searchrow.val()); 
    destoryDlg();             
  }

  function filterKey(e) {
    if(!/[0-9]/.test(e.key)) {
      e.preventDefault();
      showErrMsg();               
    }  
  }

  function showErrMsg() {
        alert('show Error Message!');   /*TODO: 需要改成气泡框提示错误信息*/ 
  }

  function validateLineNum() {
        var n = Number($searchrow.val());
        if(n === 0 || n > cfg.totalLine) {
            alert('行数超过了总行数');  /*TODO：需要改成自己的对话框*/
            $searchrow.select();
            return false;                        
        } else {
            return true;           
        }         
  }

  function show(conf) {
        $.extend(cfg,conf);

        $('body').append($dlg);
        $dlg.find('.dialogbox').draggable({handle: $dlg.find('.titlebar')});

        $btnOk.click(gotoHandler);
        $btnClose.click(destoryDlg);
        $searchrow.keypress(filterKey);

        $searchrow.val(cfg.lineNum);
        $searchrow.select();                  
  }
    return {show: show};

})();
