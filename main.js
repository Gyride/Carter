// Home Page

$('#password').click(function() {
    $('#setter').focus();
    $('#cursor').css('display', 'inline-block');
    if(!$('#unfocus').length) {
        $('body').append('<div id="unfocus"></div>');
        $('#unfocus').css('position', 'absolute')
        .css('top', '0')
        .css('left', '0')
        .css('width', '100%')
        .css('height', '100%')
        .css('z-index', '1').click(function(){
            $('#cursor').css('display', 'none');
            $(this).remove();
        });
    }
});

$('#setter').keyup(function(e) {
    if (e.keyCode == 13) {
        console.log("enter");
    } else {
        write();
    }
});

function write(e) {
    e = e || window.event;
    var w = $("#writer");
    var tw = $('#setter').val();
    w.html(tw);
}

// Other