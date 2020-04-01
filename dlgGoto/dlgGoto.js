var $dlgGoto=(function(){
    var $dlg=$('<input type="button" class="timer-button">');
    var timer,num,
        cfg={
            container:'body',
            num:6,
            enable:'disabled',
            title:'同意',
            onClick:null
        };
    var html=''
    +'<div class="notepad-dlg-goto">'
        +'<div class="dialogbox">'
            +'<div class="titlebar">'
                +'<p class="title">转到指定行</p>'
                +'<span class="close-btn">✖</span>'
            +'</div>'
            +'<div class="main">'
                +'<label>行号(L):</label>'
                +'<br>'
                +'<input class="txt-line-num" type="text" autofocus>'
                +'<br>'
                +'<input class="btn-goto" type="button" value="转到">'
                +'<input class="btn-cancel" type="button" value="取消">'
            +'</div>'
        +'</div>'
    +'</div>',
    $dlg=$(html),
    cfg={
        container:'body',
        num:6,
        enable:'disabled',
        title:'同意',
        onClick:null
    };
    var $btnClose=$dlg.find('.close-btn'),
        $btnCancel = $dlg.find('.btn-cancel'),
        $btnGoto = $dlg.find('.btn-goto'),
        $txtLineNum = $dlg.find('.txt-line-num'),
        $titleBar = $dlg.find('.notepad-dlg-titlebar');

    $btnClose.click(destoryDlg);
    $btnCancel.click(destoryDlg);
    $btnGoto.click(gotoHandler);
    $txtLineNum.keypress(filterKey);
    function destoryDlg(){
        $dlg.remove();
    }
    function gotoHandler() {
        if(!validate()) return;

        cfg.gotoHandler($txtLineNum.val()); 
        destoryDlg();
    }
    function filterKey(e) {
        if(!/[0-9]/.test(e.key)) {
            e.preventDefault();
            showErrMsg('你只能在此输入数字!');
        }
    }
    function show(conf){
        // 1.DOM draw
        $(cfg.container).append($dlg);
        // 扩展
        $.extend(cfg,conf);
        num=cfg.num

        $btn.val(cfg.title+'('+cfg.num+'s)')
        $btn.attr("disabled",cfg.enable);
        timer=setInterval(function(){
            num--;
            if(num===0){
                clearInterval(timer);
                $btn.val(cfg.title);
                $btn.removeAttr('disabled');
            }else{
                $btn.val(cfg.title+'('+num+'s)')
            }
        },1000)
        $btn.click(function(){
            cfg.onClick();
        })
        // 2.event bind
    }
    return {
        show:show
    }
}());
