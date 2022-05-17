//判断是否为移动设备
var ismobile = false;
window.innerWidth <= 550 ? ismobile = true : false;

// 服务密令
var toke = '1357246824681357';

// 播放与界面控制
function play(a) {
	var diz = document.getElementById("url").value.replace(/[\u4e00-\u9fa5]|(^\s*)|(\s*$)/g, '');
	var dbz = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/g;
	var jkurl = document.getElementById("jk");
	var jk = document.getElementById("jk").selectedIndex;
	var jkk = jkurl.options[jk].value;
	var jkv = CryptoJS.AES.decrypt(jkk, toke).toString(CryptoJS.enc.Utf8);
	// 按钮显示控制
	if (a == 0) {
		var daz = document.getElementById("ksbf");
		var dck = document.getElementById("ckbf");
		if (dbz.test(diz)) {
			daz.disabled = false;
			dck.disabled = false;
		} else {
			daz.disabled = true;
			dck.disabled = true;
		}
	}
	// 开始播放
	if (a == 1) {
		var url = diz.indexOf("?")
		var mgurl = diz.indexOf("migu")
		if (mgurl != -1) {
			var migu = diz.indexOf("&")
			if (migu != -1) {
				diz = diz.substring(0, migu)
			}
		} else {
			if (url != -1) {
				diz = diz.substring(0, url)
			}
		}
		document.getElementById("url").value = diz;
		document.getElementById("player").src = jkv + diz;
	}
	// 窗口播放
	if (a == 2) {
		xtip.open({
			type: 'u',
			content: jkv + diz,
			title: '窗口播放',
			width: ismobile ? '90%' : '850px',
			height: ismobile ? '50%' : '500px',
			min: true,
			max: true,
			closeBtn: true,
			shade: false
		});
	}
}
setInterval("play(0)", 100);

//搜索功能
function sub() {
	var sos = document.getElementById("sos").value.trim();
	!sos ? xtip.msg('请输入片名关键字！', {
		icon: 'w'
	}) : window.open("https://movie.heheda.top/so.php?wd=" + sos, '_blank');
}

//其他按钮
function othbut(b) {
	if (b == 0) {
		window.open("mailto:2585649532@qq.com");
	}
	// 赞赏码
	if (b == 1) {
		xtip.open({
			type: 'h',
			width: ismobile ? '300px' : '500px',
			height: ismobile ? '300px' : '500px',
			content: '<img src="./image/zsm.png" style="width: 100%;"/>',
			title: false,
			over: false,
			end: function() {
				xtip.msg('小赵伤心的留下了一滴眼泪！', {
					icon: 'w'
				});
			}
		});
	}
	if (b == 2) {
		window.open("https://wj.qq.com/s2/9759503/e350/");
	}
	// 下载APP
	if (b == 3) {
		xtip.open({
			type: 'h',
			width: ismobile ? '90%' : '55%',
			height: '120px',
			content: '<div style="padding:5px"><button type="button" onclick="othbut(30)" class="btn btn-success btn-lg btn-block">#安卓版本#</button><button type="button" onclick="xzapp-ios()" class="btn btn-success btn-lg btn-block" disabled>#IOS版本#</button></div>',
			title: false,
			over: false
		});
	}
	if (b == 30) {
		window.open("./app/ysjx.apk");
	}
}
setTimeout("othbut(1)", 500);

//收藏功能
function addFavorite22() {
	var url = window.location;
	var title = document.title;
	var ua = navigator.userAgent.toLowerCase();
	if (ua.indexOf("360se") > -1) {
		xtip.msg('由于360浏览器功能限制，请按 Ctrl+D 手动收藏！', {
			icon: 'w'
		});
	} else if (ua.indexOf("msie 8") > -1) {
		window.external.AddToFavoritesBar(url, title); //IE8
	} else if (document.all) {
		try {
			window.external.addFavorite(url, title);
		} catch (e) {
			xtip.msg('您的浏览器不支持,请按 Ctrl+D 手动收藏!', {
				icon: 'w'
			});
		}
	} else if (window.sidebar) {
		window.sidebar.addPanel(title, url, "");
	} else {
		xtip.msg('您的浏览器不支持,请按 Ctrl+D 手动收藏!', {
			icon: 'w'
		});
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
		xtip.msg('分享失败，请手动分享！', {
			icon: 'w'
		});
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
			xtip.msg('禁止非法调试！', {
				icon: 'w'
			});
			return false;
		} else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
			xtip.msg('禁止非法调试！', {
				icon: 'w'
			});
			return false;
		}
	};
	// document.oncontextmenu = function() {
	// xtip.msg('电脑请使用“Ctrl+V”粘贴<br />手机请长按粘贴', {
	// 	icon: 'w'
	// });
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
