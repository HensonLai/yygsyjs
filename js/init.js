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
app.poster = {
    img1: undefined,
    img2: undefined,
    role: undefined,
    sex: 0,
    name: '',
    label: '',
    wordCheck: false,
    bg: 20,
    items: [
        [
            [1, 70,71, 4, 5, 6, 7, 8, 9, 10, 11, 3, 12, 13, 14, 15, 16, 17, 18, 19, 20, 48, 49, 59, 60, 61, 62, 63, 64, 65, 67, 68, 28, 29, 56, 57, 66, 21, 22, 23, 24],
            [2, 69, 70,71, 72, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 9, 10, 15, 16, 21, 22],
        ],
        [
            [1, 92, 93, 84, 89, 90, 91 , 85, 6, 7, 49, 50, 51, 52, 53, 54, 55, 57, 2, 3, 4, 5, 8, 9, 12, 17, 19, 20, 21, 24, 26, 27, 28, 29, 30, 32, 33, 34, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
            [1, 92, 93, 81, 82, 84, 88, 89, 90 , 91, 85, 6, 7, 49, 50, 51, 52, 53, 54, 55, 56, 2, 3, 4, 5, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58]
        ],
        [
            [1, 31, 25, 28, 29, 30, 27,22 , 3, 6, 7, 8, 9, 10, 11, 13, 16, 18, 19, 20],
            [1, 31, 25, 27, 28, 29 , 30,27, 21, 3, 4, 5, 2, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20]
        ],
        [
            [41, 40, 44, 45, 46, 47, 42,1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 35, 36, 37, 38, 39],
            [41, 43, 40, 44, 45, 46, 47,42, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 31, 32, 33, 35, 36, 37, 38, 39]
        ],
        [
            //          [34,35,36,37,38,39,1,2,4,5,6,7,10,12,13,14,15,16,18,19,21,22,23,24,25,26,27,28,29,30,31,32],
            //          [34,35,36,37,38,39,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,18,19,21,22,23,24,25,26,27,28,29,30,31,32]
            [ 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 51, 52, 53, 54, 34, 35, 36, 37, 38, 39, 1, 5, 6, 10, 12, 13, 14, 15, 22, 23, 24, 25, 26, 27, 29, 30, 31, 32],
            [ 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 51, 52, 53, 54, 34, 35, 36, 37, 38, 39, 1, 3, 5, 6, 9, 10, 11, 12, 13, 14, 15, 22, 23, 24, 25, 26, 27, 29, 30, 31, 32]
        ]
    ],
    exLevel: [
        {},
        { 8: 51, 28: 51, 33: 51, 34: 51, 36: 51, 37: 51, 38: 51, 40: 51, 41: 51, 42: 51, 43: 51, 48: 1, 58: 1, 81: 1, 84: 31 },
        { 2: 21 },
        { 27: 9, 28: 9 },
        { 1: 39, 3: 39, 5: 39, 6: 39, 9: 39, 10: 39, 11: 39, 17: 39, 12: 60, 13: 60, 14: 60, 27: 60, 29: 60, 30: 60, 31: 60, 32: 60, 35: 60, 36: 39, 37: 60, 38: 60, 39: 60, 34: 39, 50: 39, 51: 60, 53:39,55: 60 }
    ],
    exCost: {
        33: { 1: { isOff: false, ids: [1] } },
        36: { 1: { isOff: false, ids: [1, 25] } },
        37: { 1: { isOff: false, ids: [1, 25] } },
        38: { 1: { isOff: false, ids: [1, 25] } },
        40: { 1: { isOff: false, ids: [1] } },
        41: { 1: { isOff: false, ids: [1] } },
        42: { 1: { isOff: false, ids: [1] } },
        43: { 1: { isOff: false, ids: [1] } },
        48: { 3: { isOff: false, ids: [] } },
        58: { 3: { isOff: false, ids: [] } },
        81: { 3: { isOff: false, ids: [] } },
        82: { 3: { isOff: false, ids: [] } },
        83: { 3: { isOff: false, ids: [] } },
        // 58:{1:{isOff:false, ids:[]}, 3:{isOff:false, ids:[]}, 4:{isOff:false, ids:[]}, 5:{isOff:false, ids:[30,31,32,37,38,39]}}
    },
    exPants: {
        11: 31, 19: 31, 25: 32,
        aboutCost: { 1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 49: true, 50: true, 51: true, 52: true, 53: true, 54: true, 55: true, 59: true, 60: true, 61: true, 62: true, 63: true, 64: true, 65: true, 66: true, 67: true, 68: true, 69: true, 70: true, 71: true, 72: true, 73: true, 74: true, 75: true, 78: true, 79: true, 80: true, 84: true, 86: true, 87: true ,90:true ,93:true}

    },
    exAcc: {
        1: 52, 3: 52, 9: 52, 10: 52, 11: 52, 36: 52,
        aboutCost: { 8: true, 28: true, 33: true, 34: true, 36: true, 37: true, 38: true, 40: true, 41: true, 42: true, 43: true }
    }
};


/***** 环境设置 *****/
window.addEventListener('touchmove', function(e){ //禁止系统滚动
    !app.systemScroll && e.preventDefault();
}, {passive: false});
app.isIOS && document.querySelector('html').addEventListener('touchend', function(e){ //禁止ios双击屏幕上弹
    var time = new Date().getTime();
    if(!app._last_touchend_time){ app._last_touchend_time=time; return; }
    if(time-app._last_touchend_time<500 && e.cancelable){ e.preventDefault(); }
    app._last_touchend_time = time;
}, false);
app.setSizeCallback = undefined;
app.setSize = function(){
    if(window.$ && $('.s3>center').is(':visible')){ return; }
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
window.addEventListener('resize', app.setSize, false);


/***** 获取URL参数 *****/
function getQueryString(name) {
   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
   var r = window.location.search.substr(1).match(reg);
   if (r!=null) return decodeURIComponent(r[2]);
   return undefined;
};


/***** 音频设置 *****/
app.sound = {};
app.sound._mute = false;
app.sound._loaded = false;
app.sound.click = new Audio('sound/click.mp3');
//app.sound.bg = new Audio('sound/bg.mp3');
//app.sound.bg.loop = true;
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


//加载资源
app.loadRes = function(){
    var load, load_text, load_line, res;
    if(document.readyState != 'complete'){ window.addEventListener('load', app.loadRes, false); return; };
    app.setSize();
    load = document.querySelector('.load');
    load_text = document.querySelector('.load center var');
    load_line = document.querySelector('.load center p i');
    appLoad(['img/load1.png'], undefined, function(){
        load.style.display = 'block';
        res = [
            'css/main.css',
            'js/jquery.2.1.1.min.js',
            'js/jquery.transit.min.js',
            'js/iscroll-lite.js',
            'js/main.js',
            'img/loading.png',
            'img/logo.png',
            'img/btn.png',
            'img/ewm.png',
            'img/item-class.png',
            'img/role1.png',
            'img/role2.png',
            'img/title.png',
            'img/title2.png',
            'img/sex.png',
            'img/share.png',
        ];
        for(var i=1; i<=app.poster.bg; i++){
            res.push('img/bg/bg-'+i+'.png');
        };
        load.addEventListener('webkitAnimationEnd', function(){
            appLoad({
                res: res,
                delayLoad: 300,
                delayLoaded: 300,
                onError: function(){
                    alert('资源加载错误，请检查URL是否正确');
                },
                //onLoading: function(p){   },
                onLoaded: function(){
                    window.appStart && appStart();
                }
            });
        });
    });
};


//分享
/*app.shareData = {
    title: '制造「我」的草莓音乐节',
    desc: '2018以「我」出发，一起大不同',
    imgUrl: 'cover.jpg',
    link: location.origin+location.pathname
};
app.shareData.imgUrl = app.shareData.link.substr(0, app.shareData.link.lastIndexOf('/')+1)+app.shareData.imgUrl;*/


//启动
if(app.isPC){ app.sound.Load(); };
if(app.isWX){
    appLoad('//res.wx.qq.com/open/js/jweixin-1.0.0.js', null, function(){
        /*wx.config({debug: false});
        wx.ready(app.sound.Load);
        wx.error(app.sound.Load);*/
        app.loadRes();
    });
}else if(app.isZZXC){
    app.loadRes();
}else{
    app.loadRes();
};


//分享
//获取参数方法
function getValue(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  decodeURIComponent(r[2]); return null;
}

var fromshare = getValue('from');
function share(){
    var _url = window.location.href;
    if(/detail\.html/.test(_url)&&/if_share/.test(_url)){
        _url = _url.split('?')[0]+'?albumId='+util.getValue('albumId')+'__1';
    }else if(/singerId/.test(_url)&&/if_share/.test(_url)){
        _url = _url.split('?')[0]+'?singerId='+util.getValue('singerId')+'__1';
    }else if(/news/.test(_url)&&/if_share/.test(_url)){
        _url = _url.split('?')[0]+'?id='+util.getValue('id')+'__1';
    }else{
        _url = _url.split('?')[0];
    }

    if(fromshare){
            window.location.href=_url;
    }else{
        var tit = tit?tit:"制造「我」的草莓音乐节";
        var img = img?img:'http://wap.zhengzai.tv/pages/strawberry2018/cover.jpg';
        var des = des?des:"2018以「我」出发，一起大不同";
        var url=url?url:_url;
        var zzurl="http://user.zhengzai.tv";
        var url_ = zzurl+'/api/open/wx/sign?url='+_url;
        $.ajax({
            url: url_,
            async: true,
            type: "get",
            dataType: "jsonp",
            success : function(data){
                var data = data.data;
                var appId = data.appId;
                var timestamp = data.timestamp;
                var nonceStr = data.nonceStr;
                var signature = data.signature;
                wx.config({
                    debug: false, // 开启调试模式，调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: appId, // 必填，公众号的唯一标识
                    timestamp: timestamp, // 必填，生成签名的时间戳
                    nonceStr: nonceStr, // 必填，生成签名的随机串
                    signature: signature,// 必填，签名，见附录1
                    jsApiList: [
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
                        'onMenuShareQQ',
                        'onMenuShareQZone'
                    ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                });
                wx.error(function(res){
                    /*alert(res);*/
                });
                wx.ready(function(){
                    // 分享到朋友圈
                    wx.onMenuShareTimeline({
                        title: tit,
                        link: url,
                        imgUrl: img,
                        success: function () {
                            //alert("分享成功")
                        },
                        cancel: function (data) {
                            alert('分享失败');
                        }
                    });
                    // 分享给好友
                    wx.onMenuShareAppMessage({
                        title: tit,
                        link: url,
                        desc: des,
                        imgUrl: img,
                        success: function () {
                            //alert("分享成功")
                        },
                        cancel: function () {
                            alert('分享失败');
                        }
                    });
                    // 分享给QQ好友
                    wx.onMenuShareQQ({
                        title: tit,
                        link: url,
                        desc: des,
                        imgUrl: img,
                        success: function () {
                            //alert("分享成功")
                        },
                        cancel: function () {
                            alert('分享失败');
                        }
                    });
                    // 分享到QQ空间
                    wx.onMenuShareQZone({
                        title: tit,
                        link: url,
                        desc: des,
                        imgUrl: img,
                        success: function () {
                            //alert("分享成功")
                        },
                        cancel: function () {
                            alert('分享失败');
                        }
                    });
                })
            }
        })
    }
}

share();