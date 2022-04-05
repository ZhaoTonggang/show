//判断是否为移动设备
var pmkd = window.innerWidth;
var ismobile = false;
if (pmkd <= 800) {
	ismobile = true;
} else {
	ismobile = false;
}

//按钮可选控制
function play() {
	var diz = document.getElementById("url").value.replace(/[\u4e00-\u9fa5]|(^\s*)|(\s*$)/g, '');
	var dbz = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/g;
	var daz = document.getElementById("ksbf");
	var dck = document.getElementById("ckbf");
	// var dcz = document.getElementById("qpbf");
	if (dbz.test(diz)) {
		daz.disabled = false;
		dck.disabled = false;
	} else {
		daz.disabled = true;
		dck.disabled = true;
	}
}
setInterval("play()", 100);

//开始播放
function dihejk() {
	var jkurl = document.getElementById("jk");
	var jk = document.getElementById("jk").selectedIndex;
	var jkv = jkurl.options[jk].value;
	var diz = document.getElementById("url").value.replace(/[\u4e00-\u9fa5]|(^\s*)|(\s*$)/g, '');
	document.getElementById("player").src = jkv + diz;
}

//全屏播放
function dihejk2() {
	var diz = document.getElementById("url").value;
	diz = diz.replace(/(^\s*)|(\s*$)/g, '');
	if (diz != "" || diz == "null") {
		var jkurl = document.getElementById("jk");
		var jk = document.getElementById("jk").selectedIndex;
		var jkv = jkurl.options[jk].value;
		var cljurl = document.getElementById("player");
		window.open(jkv + diz, "_blank");
		document.getElementById("ksbf").disabled = true;
	} else {
		alert("您必须输入视频地址！");
		document.getElementById("ksbf").disabled = false;
	}
}

// 独立窗口
function dlck() {
	var diz = document.getElementById("url").value.replace(/(^\s*)|(\s*$)/g, '');
	var dbz = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/g;
	if (dbz.test(diz)) {
		var jkurl = document.getElementById("jk");
		var jk = document.getElementById("jk").selectedIndex;
		var jkv = jkurl.options[jk].value;
		var cljurl = document.getElementById("player");
		layer.open({
			type: 2,
			title: '窗口播放',
			shadeClose: true,
			shade: false,
			maxmin: true,
			moveOut: true,
			minStack: true,
			area: ismobile ? ['90%', '50%'] : ['850px', '500px'],
			content: jkv + diz
		});
	} else {
		layer.msg("请输入有效的视频链接地址！");
	}
}

//搜索功能
function sub() {
	var sos = document.getElementById("sos").value.trim();
	if (!sos) {
		layer.msg('请输入片名关键字！');
	} else {
		window.open("https://movie.heheda.top/so.php?wd=" + sos, '_blank');
	}
}

//赞赏
function dihejk3() {
	layer.open({
		type: 1,
		title: false,
		shade: 0.8,
		area: ismobile ? '90%' : '500px',
		shadeClose: true,
		content: '<img src="./image/zsm.png" style="width: 100%;"/>'
	});
}
setTimeout("dihejk3()", 500)

//故障反馈
function gzfk() {
	window.open("mailto:2585649532@qq.com");
}

//侵权投诉
function qqts() {
	window.open("https://wj.qq.com/s2/9759503/e350/")
}

//下载app
function xzapp() {
	layer.open({
		type: 1,
		title: false,
		shade: 0.8,
		area: ismobile ? '90%' : '500px',
		shadeClose: true,
		content: '<div style="padding:5px"><button type="button" onclick="xzappaz()" class="btn btn-info btn-lg btn-block">#安卓版本#</button><button type="button" onclick="xzapp-ios()" class="btn btn-info btn-lg btn-block" disabled>#IOS版本#</button></div>'
	});
}

//安卓APP
function xzappaz() {
	window.open("./app/ysjx.apk")
}

//收藏功能
function addFavorite22() {
	var url = window.location;
	var title = document.title;
	var ua = navigator.userAgent.toLowerCase();
	if (ua.indexOf("360se") > -1) {
		layer.msg("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！");
	} else if (ua.indexOf("msie 8") > -1) {
		window.external.AddToFavoritesBar(url, title); //IE8
	} else if (document.all) {
		try {
			window.external.addFavorite(url, title);
		} catch (e) {
			layer.msg('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
		}
	} else if (window.sidebar) {
		window.sidebar.addPanel(title, url, "");
	} else {
		layer.msg('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
	}
}

//分享功能
var nativeShare = new NativeShare()
var shareData = {
	title: 'VIP影视解析',
	desc: '一个链接，看遍天下！',
	// 如果是微信该link的域名必须要在微信后台配置的安全域名之内的。
	link: 'https://show.heheda.top/',
	icon: './icons/512.png',
	// 不要过于依赖以下两个回调，很多浏览器是不支持的
	// success: function() {
	//     alert('success')
	// },
	// fail: function() {
	//     alert('fail')
	// }
}
nativeShare.setShareData(shareData)

function call(command) {
	try {
		nativeShare.call(command)
	} catch (err) {
		// 如果不支持，你可以在这里做降级处理
		// alert(err.message)
		layer.msg('分享失败，请手动分享！');
	}
}

function setTitle(title) {
	nativeShare.setShareData({
		title: title,
	})
}

// 禁用浏览器调试
window.onload = function() {
	document.onkeydown = function() {
		var e = window.event || arguments[0];
		if (e.keyCode == 123) {
			layer.msg("禁止非法调试！");
			return false;
		} else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
			layer.msg("禁止非法调试！");
			return false;
		}
	};
	// document.oncontextmenu = function() {
	// 	layer.msg("电脑请使用“Ctrl+V”粘贴<br />手机请长按粘贴");
	// 	return false;
	// }
}

// 网站标题自动判断
var title = document.title;

function istitle() {
	var isHidden = document.hidden;
	if (isHidden) {
		//当窗口不可见
		document.title = '(つ ェ ⊂)我藏好了哦~';
	} else {
		//当窗口可见
		document.title = '(*゜ロ゜)ノ被发现了~';
		setTimeout("document.title=title", 3000);
	}
};
document.addEventListener('visibilitychange', istitle);
