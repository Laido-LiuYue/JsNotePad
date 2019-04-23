/* exported $dlgAbout */
var $dlgAbout = (function() {
    var DOM = ''
          + '<div class="notepad-dlg-about">'
            + '<div class="dialogbox">'
              + '<div class="titlebar">'
                + '<p class="title">关于记事本</p>'
                + '<span class="btn-cancel">✖</span>'
              + '</div>'
              +'<hr>'
              + '<div class="main">'
                + '<h1 class="slogan">JSNotepad</h1>'
                + '<hr>'
                + '<div class="info">'
                  + '<p>作者:Laido-LiuYue</p>'
                  + '<p>QQ：578201842</p>'
                  + '<p>仓库地址：<a href="https://github.com/Laido-LiuYue/JsNotePad" target="_blank">https://github.com/Laido-LiuYue/JsNotePad</a></p>'
                + '</div>'
                + '<button class="btn-ok btn" type="button" value="确定">确定</button>'
              + '</div>'
            + '</div>'
          + '</div>';

  var $dlg = $(DOM),
      $btnOk = $dlg.find('.btn-ok'),
      $btnClose = $dlg.find('.btn-cancel'),
      $titleBar = $dlg.find('titlebar');

  
  function destoryDlg() { $dlg.remove();  }

  function show(conf) {
        
        $('body').append($dlg);
        $dlg.find('.dialogbox').draggable({handle: $dlg.find('.titlebar')});

        $btnOk.click(destoryDlg);
        $btnClose.click(destoryDlg);       
  }
    return {show: show};

})();
