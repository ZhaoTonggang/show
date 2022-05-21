//判断是否为移动设备
var ismobile = false;
window.innerWidth <= 550 ? ismobile = true : false;

// 服务
var toke = "1357246824681357";
var coke = localStorage.getItem("yzxtg") || 0;
var time = Math.round(new Date() / 1000) + Number(toke);

// 获取必要参数
var title = document.title;
var href = window.location.href;
if (!navigator.share) {
	document.getElementById("fxbz").style.display = "none";
	xtip.msg('自动分享函数不受浏览器支持，系统已为您自动禁用相关功能！', {
		icon: 'w',
		zindex: 999999,
		times: 5
	});
}

function play(a) {
	if (a == 0) {
		diz = document.getElementById("url").value.replace(/[\u4e00-\u9fa5]|(^\s*)|(\s*$)/g, '');
		var dbz = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/g;
		var daz = document.getElementById("ksbf");
		var dck = document.getElementById("ckbf");
		dbz.test(diz) ? (daz.disabled = false, dck.disabled = false) : (daz.disabled = true, dck.disabled = true);
		return;
	}
	var jko = document.getElementById("jk").selectedIndex;
	var jkk = document.getElementById("jk").options[jko].value;
	var jkv = CryptoJS.AES.decrypt(jkk, toke).toString(CryptoJS.enc.Utf8);
	// 开始播放
	if (a == 1) {
		if (time <= coke) {
			var url = diz.indexOf("?");
			var mgurl = diz.indexOf("migu");
			if (mgurl != -1) {
				var migu = diz.indexOf("&");
				if (migu != -1) {
					diz = diz.substring(0, migu);
				}
			} else {
				if (url != -1) {
					diz = diz.substring(0, url);
				}
			}
			document.getElementById("url").value = diz;
			document.getElementById("player").src = jkv + diz;
		} else {
			yztc(0);
		}
	}
	// 窗口播放
	if (a == 2) {
		if (time <= coke) {
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
			yztc(0);
		}
	}
}

// 验证弹窗
function yztc(n) {
	if (n == 0) {
		localStorage.removeItem("yzxtg");
		xipid = xtip.open({
			type: 'h',
			width: '320px',
			height: '530px',
			content: '<div class="tipyz"><p class="psy" style="color: red;">为了防止恶意访问，需要进行身份验证</p><p class="psy">请使用微信扫描下方二维码<br />或搜索微信公众号“一只小彤刚”<br />关注并回复“ysjx”获取验证码</p><p class="psy" style="color: red;">注意：验证成功后，5天内免验证</p><img alt="图片载入中…" src="https://www.blog.heheda.top/movie/image/wxgzh.jpg" style="width: 300px;" /><input class="form-control input-lg input-group" placeholder="请输入数字验证码" id="wxyzm" oninput="yztc(1)" /><button id="tjyzm" type="button" class="btn btn-info btn-lg btn-block" onclick="yztc(2)" disabled>#验证#</button></div>',
			shadeClose: false,
			over: false
		});
	}
	if (n == 1) {
		yzm = document.getElementById("wxyzm").value = document.getElementById("wxyzm").value.replace(/[^\d]/g, '');
		var yzs = document.getElementById("tjyzm");
		yzm != "" ? yzs.disabled = false : yzs.disabled = true;
	}
	if (n == 2) {
		if (yzm == 2276358 || yzm == 4680235 || yzm == 6825467) {
			localStorage.setItem("yzxtg", time + 432000);
			coke = localStorage.getItem("yzxtg");
			xtip.msg('验证码正确，请点击开始播放！', {
				icon: 's'
			});
			xtip.close(xipid);
		} else {
			xtip.msg('验证码错误，请重试！', {
				icon: 'e'
			});
		}
	}
}

// 搜索功能
function sub(m) {
	sos = document.getElementById("sos").value.trim();
	if (m == 1) {
		var subt = document.getElementById("subt");
		!sos ? subt.disabled = true : subt.disabled = false;
	}
	if (m == 2) {
		window.open("https://movie.heheda.top/so.php?wd=" + sos, '_blank');
	}
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
	if (b == 4) {
		navigator.share({
			title: title,
			url: href,
			text: '全网视频免费看，宅男必备！'
		});
	}
}
setTimeout("othbut(1)", 500);

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
}
document.addEventListener('visibilitychange', istitle);
