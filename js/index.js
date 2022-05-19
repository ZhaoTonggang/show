//判断是否为移动设备
var ismobile = false;
window.innerWidth <= 550 ? ismobile = true : false;

// 服务密令
var toke = "1357246824681357";
var coke = sessionStorage.getItem("ysjx");

// 获取必要参数
var title = document.title;
var href = window.location.href;
if (!navigator.share) {
	xtip.msg('自动分享函数不受浏览器支持，系统已为您自动禁用相关功能！', {
		icon: 'w',
		zindex: 999999,
		times: 5
	});
	document.getElementById("fxbz").style.display = "none";
}

// 按钮控制
function butshow() {
	diz = document.getElementById("url").value.replace(/[\u4e00-\u9fa5]|(^\s*)|(\s*$)/g, '');
	dbz = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/g;
	var daz = document.getElementById("ksbf");
	var dck = document.getElementById("ckbf");
	dbz.test(diz) ? (daz.disabled = false, dck.disabled = false) : (daz.disabled = true, dck.disabled = true);
}

function play(a) {
	jkurl = document.getElementById("jk");
	jk = document.getElementById("jk").selectedIndex;
	jkk = jkurl.options[jk].value;
	jkv = CryptoJS.AES.decrypt(jkk, toke).toString(CryptoJS.enc.Utf8);
	// 开始播放
	if (a == 1) {
		if (coke == toke) {
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
			diz = document.getElementById("url").value;
			document.getElementById("player").src = jkv + diz;
		} else {
			return yztc();
		}
	}
	// 窗口播放
	if (a == 2) {
		if (toke == coke) {
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
		} else {
			return yztc();
		}
	}
}

// 验证弹窗
function yztc() {
	xipid = xtip.open({
		type: 'noready',
		content: '#tip_content2',
		shadeClose: false,
		over: false,
		width: '320px',
		height: '530px'
	});
}

// 判断输入内容
function pdyz() {
	yzm = document.getElementById("wxyzm").value = document.getElementById("wxyzm").value.replace(/[^\d]/g, '');
	var yzs = document.getElementById("tjyzm");
	yzm != "" ? yzs.disabled = false : yzs.disabled = true;
}

// 判断验证码
function pdyzm() {
	if (yzm == 2276358 || yzm == 4680235 || yzm == 6825467) {
		sessionStorage.setItem("ysjx", toke);
		coke = sessionStorage.getItem("ysjx");
		xtip.msg('验证码正确，请点击开始播放！', {
			icon: 's'
		});
		return xtip.close(xipid);
	} else {
		xtip.msg('验证码错误，请重试！', {
			icon: 'e'
		});
	}
}

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
			over: false,
			shadeClose: false
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

//分享功能
function call() {
	navigator.share({
		title: title,
		url: href,
		text: '全网视频免费看，宅男必备！'
	});
}

// 禁用浏览器调试
window.onload = function() {
	document.onkeydown = function() {
		if (window.event && window.event.keyCode == 123) {
			event.keyCode = 0;
			event.returnValue = false;
			xtip.msg('禁止非法调试！', {
				icon: 'w'
			});
			return false;
		}
	}
}

// 网站标题自动判断
function istitle() {
	if (document.hidden) {
		//当窗口不可见
		document.title = '(つ ェ ⊂)我藏好了哦~';
	} else {
		//当窗口可见
		document.title = '(*゜ロ゜)ノ被发现了~';
		setTimeout("document.title=title", 3000);
	}
};
document.addEventListener('visibilitychange', istitle);
