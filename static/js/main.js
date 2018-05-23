//全局变量
var app = window.app || {};
app.width = window.innerWidth;
app.height = window.innerHeight;
app.pixelRatio = window.devicePixelRatio || 1;
app.isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
app.isAndroid = navigator.userAgent.toLowerCase().match(/Android/i)=="android";
app.isPC = !app.isIOS && !app.isAndroid;
app.isWX = navigator.userAgent.toLowerCase().match(/MicroMessenger/i)=="micromessenger";
app.isZZXC = navigator.userAgent.toLowerCase().match(/zzxc/i)=="zzxc";
app.isTOUCH = "ontouchend" in document;
app.systemScroll = false;

window.imgCache = {}; 

/***** 环境设置 *****/
//禁止系统滚动
window.addEventListener('touchmove', function(e){ 
    !app.systemScroll && e.preventDefault();
}, {passive: false});

//禁止ios双击屏幕放大
app.isIOS && document.querySelector('html').addEventListener('touchend', function(e){ 
    var time = new Date().getTime();
    if(!app._last_touchend_time){ app._last_touchend_time=time; return; }
    if(time-app._last_touchend_time<500 && e.cancelable){ e.preventDefault(); }
    app._last_touchend_time = time;
}, false);

/***** 切屏 ******/
function slideTo(el, isBack, callback){
    var curr = $(".app>section:visible");
    var next = $(el);
    if(next.is(curr)){ return; }
    curr.length && curr.addClass('no_animation').transit({y: isBack?'100%':'-100%'}, 300, function(){
        $(this).removeClass('no_animation').removeAttr('style');
    });
    next.css({display:'block', y:isBack?'-100%':'100%'}).addClass('no_animation').transit({y: 0}, 300, function(){ 
        $(this).removeClass('no_animation');
        typeof(callback)=='function' && callback();
    });
};

/***** 音频设置 *****/
app.sound = {};
app.sound._mute = false;
app.sound._loaded = false;
app.sound.click = new Audio('static/sound/click.mp3');
app.sound.Load = function(){
    if(app.sound._loaded){ return; }
    for(var i in app.sound){
        if(!app.sound[i].play){ continue; }
        if(!app.sound[i]._play){
            app.sound[i]._play = app.sound[i].play;
            app.sound[i].play = function(){ !app.sound._mute && this._play();}
            app.sound[i].addEventListener('ended', function(e){ e.target.loop && e.target.play(); });
            app.sound[i].load();
        }
    }
    app.sound._loaded = true;
    window.removeEventListener('touchstart', app.sound.Load, false);
};
window.addEventListener('touchstart', app.sound.Load, false);


// 设置屏幕大小
app.setSizeCallback = undefined;
app.setSize = function(){
    // if(window.$ && $('.s3>center').is(':visible')){ return; }
    var fun = function(){
        var aspect = 0.7;
        var el_app = document.querySelector('.app');
        app.width = window.innerWidth;
        app.height = window.innerHeight;
        if(app.width/app.height>aspect){ app.width = app.height*aspect; }
        if(el_app){
            el_app.style.width = app.width+'px';
            el_app.style.height = app.height+'px';
            el_app.style.fontSize = app.width/320*12+'px';
        };
        typeof(app.setSizeCallback)=='function' && app.setSizeCallback();
    }
    fun();
    if(app.isIOS){ setTimeout(fun, 200); }else{ fun(); }
};
app.setSize();
window.addEventListener('resize', app.setSize, false);

// 启动声音
app.sound.Load();

// 背景选择项滚动
app.bgScroll = new IScroll($(".s2 menu")[0], {click: true, scrollY:false, scrollX:true});

// 程序开始加载
setTimeout(function() {
    $('.load').hide().remove();
    $('.s1').show();
}, 8000);

// s1  点击开始生成
$('.s1 h4 a').click(function() {
    setTimeout(function(){ app.sound.click.play(); });
    slideTo('.s2');
    app.bgScroll.refresh();
    app.bgScroll.scrollTo(0,0,0);
});

// s2 
$(".s2 ol li").click(function(){
    var li = $(this);
    if(li.addClass('curr').parent('ol').hasClass('selected')) {
        li.removeClass('curr').parent('ol').removeClass('selected');
        $(".s2 menu").hide().find('ul').hide();
        app.bgScroll.refresh();
        app.bgScroll.scrollTo(0,0,0);
        setTimeout(function(){ app.sound.click.play(); });    
    } else {
        li.addClass('curr').parent('ol').addClass('selected');
        $(".s2 menu").show().find('ul').hide().eq(li.index()).show();
        app.bgScroll.refresh();
        app.bgScroll.scrollTo(0,0,0);
        setTimeout(function(){ app.sound.click.play(); });        
    }
});
$(".s2 ul li").click(function() {
    setTimeout(function(){ app.sound.click.play(); });
    var $ul = $(this).parent('ul');
    var ul_index = $ul.index();
    $(this).addClass('cur').siblings().removeClass('cur');
    var figure_index = (ul_index+1 >= 4)? 2 : ul_index+1;

    var img = $(this).attr('data-img');
    $(".s2 figure p:eq("+figure_index+")").css('background-image', 'url('+img+')');



});

$(".s2 footer h3").click(function() {
    setTimeout(function(){ app.sound.click.play(); });
    slideTo('.s3');

    $(".s3 center").show();
    createPoster();
    setTimeout(function() {$(".s3 center").hide()}, 2000);
});

function extractUrl(input)
{
    // remove quotes and wrapping url()
    return input.replace(/"/g,"").replace(/url\(|\)$/ig, "");
}
function createPoster() {
    var bgColor = '#fff';
    var title = new Image();
    var bg = new Image();
    var animal = new Image();
    var organ = new Image();
    title.src = extractUrl($(".s2 figure .title").css('background-image'));
    bg.src = extractUrl($(".s2 figure .bg").css('background-image'));
    animal.src = extractUrl($(".s2 figure .animal").css('background-image'));
    organ.src = extractUrl($(".s2 figure .organ").css('background-image'));

    canvas = document.createElement('canvas');
    canvas.width = title.naturalWidth;
    canvas.height = title.naturalHeight;
    ctx = canvas.getContext('2d');
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(title, 0, 0);
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(animal, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(organ, 0, 0, canvas.width, canvas.height);


    var poster = canvas.toDataURL('image/jpeg', 0.9);
    $(".s3 figure img").attr('src', poster);
}

// s3
$(".s3 footer .btn1").click(function() {
    setTimeout(function(){ app.sound.click.play(); });
    slideTo('.s2');
});
$(".s3 footer .btn3").click(function() {
    setTimeout(function(){ app.sound.click.play(); });
    slideTo('.share');
});

// share
$(".share header a").click(function() {
    setTimeout(function(){ app.sound.click.play(); });
    slideTo('.s3');
});