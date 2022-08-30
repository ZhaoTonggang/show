//判断是否为移动设备
let ismobile = false;
window.innerWidth <= 550 ? ismobile = true : false;

// 服务
let toke = "1357246824681357";
let coke = localStorage.getItem("yzxtg") || 0;
let time = Math.round(new Date() / 1000) + Number(toke);

// 获取必要参数
let title = document.title;
if (!navigator.share) {
	document.getElementById("fxbz").style.display = "none";
	xtip.msg('自动分享函数不受浏览器支持，系统已为您自动禁用相关功能！', {
		icon: 'w',
		zindex: 999999,
		times: 5
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

// 监听屏幕滚动
window.onscroll = function() {
	let scro = document.documentElement.scrollTop || document.body.scrollTop;
	let cla = document.getElementById("player");
	if (scro >= 500) {
		cla.classList.add("player-fix");
	} else {
		cla.classList.remove("player-fix");
	}
}

function play(a) {
	let jko = document.getElementById("jk").selectedIndex;
	let jkk = document.getElementById("jk").options[jko].value;
	let jkv = CryptoJS.AES.decrypt(jkk, toke).toString(CryptoJS.enc.Utf8);
	if (a === 0) {
		diz = document.getElementById("url").value.replace(/[\u4e00-\u9fa5]|(^\s*)|(\s*$)/g, '');
		let dbz = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/g;
		let daz = document.getElementById("ksbf");
		let dck = document.getElementById("ckbf");
		dbz.test(diz) ? (daz.disabled = false, dck.disabled = false) : (daz.disabled = true, dck.disabled = true);
	} else if (a === 1) {
		if (time <= coke) {
			localStorage.setItem("yzxtg", time + 432000);
			coke = localStorage.getItem("yzxtg");
			let url = diz.indexOf("?");
			let mgurl = diz.indexOf("migu");
			if (mgurl != -1) {
				let migu = diz.indexOf("&");
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
	} else if (a === 2) {
		if (time <= coke) {
			localStorage.setItem("yzxtg", time + 432000);
			coke = localStorage.getItem("yzxtg");
			let url = diz.indexOf("?");
			let mgurl = diz.indexOf("migu");
			if (mgurl != -1) {
				let migu = diz.indexOf("&");
				if (migu != -1) {
					diz = diz.substring(0, migu);
				}
			} else {
				if (url != -1) {
					diz = diz.substring(0, url);
				}
			}
			document.getElementById("url").value = diz;
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
	if (n === 0) {
		localStorage.removeItem("yzxtg");
		xipid = xtip.open({
			type: 'h',
			width: '320px',
			height: '530px',
			content: '<div class="tipyz"><p class="psy" style="color: red;">为防止恶意访问，需进行身份验证</p><p class="psy">请使用微信扫描下方二维码<br />或搜索微信公众号“一只小彤刚”<br />关注并回复“ysjx”获取验证码</p><p class="psy" style="color: red;">注意:连续5天未使用需重新验证!</p><img alt="图片载入中…" src="https://www.blog.heheda.top/movie/image/wxgzh.jpg" style="width: 300px;" /><input class="form-control input-lg input-group" placeholder="请输入数字验证码" id="wxyzm" oninput="yztc(1)" /><button id="tjyzm" type="button" class="btn btn-info btn-lg btn-block" onclick="yztc(2)" disabled>#验证#</button></div>',
			shadeClose: false,
			over: false
		});
	} else if (n === 1) {
		yzm = document.getElementById("wxyzm").value = document.getElementById("wxyzm").value.replace(/[^\d]/g, '');
		let yzs = document.getElementById("tjyzm");
		yzm != "" ? yzs.disabled = false : yzs.disabled = true;
	} else if (n === 2) {
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
	if (m === 1) {
		let subt = document.getElementById("subt");
		!sos ? subt.disabled = true : subt.disabled = false;
	} else if (m === 2) {
		window.open("https://movie.heheda.top/so.php?wd=" + sos, '_blank');
	}
}

//其他按钮
function othbut(b) {
	if (b === 0) {
		window.open(
			"https://openai.weixin.qq.com/webapp/NlFdeGGV6J4GfwxPImLX9mxGXzkSHg?robotName=%E5%BD%B1%E8%A7%86%E8%A7%A3%E6%9E%90"
			);
	}
	// 赞赏码
	else if (b === 1) {
		xtip.open({
			type: 'h',
			width: ismobile ? '300px' : '500px',
			height: ismobile ? '300px' : '500px',
			content: '<img alt="赞赏码" src="./image/zsm.jpg" style="width: 100%;height: auto;"/>',
			over: false,
			shadeClose: false
		});
	} else if (b === 2) {
		window.open("https://wj.qq.com/s2/9759503/e350/");
	}
	// 下载APP
	else if (b === 3) {
		xtip.open({
			type: 'h',
			width: ismobile ? '90%' : '55%',
			height: '120px',
			content: '<div style="padding:5px"><button type="button" onclick="othbut(30)" class="btn btn-success btn-lg btn-block">#安卓版本#</button><button type="button" onclick="xzapp-ios()" class="btn btn-success btn-lg btn-block" disabled>#IOS版本#</button></div>',
			title: false,
			over: false
		});
	} else if (b === 30) {
		window.open("./app/ysjx.apk");
	} else if (b === 4) {
		navigator.share({
			title: title,
			url: window.location.href,
			text: '全网视频免费看，宅男必备！'
		});
	}
}
setTimeout("othbut(1)", 500);

// 通知
if ("Notification" in window) {
	if (window.Notification.permission == "granted") {
		sendNotification();
	} else if (window.Notification.permission != "denied") {
		window.Notification.requestPermission(function(permission) {
			sendNotification();
		});
	}
}

function sendNotification() {
	new Notification(title, {
		body: '久违了我的朋友，欢迎您的访问！全网视频免费看，宅男必备，喜欢别忘了收藏！',
		icon: './icons/128x128.png'
	})
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

// 版权信息
console.log("%c赵彤刚%c版权所有", "font-size:15px;padding:3px;color:white;background:#023047",
	"font-size:15px;padding:3px;color:white;background:#219EBC");
console.log("%c本人寻求一份前端开发的工作，有意者请联系%c\n%cTEL:15327682114%c\n%c微信:16699352957",
	"font-size:15px;padding:3px;color:white;background:#023047", "",
	"font-size:15px;padding:3px;color:white;background:#219EBC", "",
	"font-size:15px;padding:3px;color:white;background:#219EBC");
