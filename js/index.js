// 严格模式
"use strict";
//判断是否为移动设备
let ismobile = false;
window.innerWidth <= 550 ? ismobile = true : false;
// 载入语音
const music = new Audio("./audio/a1.mp3");
// 获取必要参数
const title = document.title;
let diz, dzz, yzm, xipid;
let timeout = null;
const cdtopbt = document.getElementById("cd-top");
const cla = document.getElementById("player");
const dcn = /^[\u4E00-\u9FA5]+$/;
const dbz = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/g;
const gjk = document.getElementById("jk");
const gdz = document.getElementById("url");
if (!navigator.share) {
	document.getElementById("fxbz").style.display = "none";
	xtip.msg('自动分享函数不受浏览器支持，系统已为您自动禁用相关功能！', {
		icon: 'w',
		zindex: 999999,
		times: 5
	});
}
// 禁用浏览器调试
window.onkeydown = () => {
	if (window.event && window.event.keyCode == 123) {
		event.keyCode = 0;
		event.returnValue = false;
		xtip.msg('禁止非法调试！', {
			icon: 'w'
		});
		return false;
	}
}
// 功能
const play = (a) => {
	let jko = gjk.selectedIndex;
	let jkv = decodeURI(atob(gjk.options[jko].value));
	if (a === 0) {
		dzz = gdz.value;
		diz = dzz.replace(/[\u4e00-\u9fa5]|(^\s*)|(\s*$)/g, '');
		const daz = document.getElementById("ksbf");
		const dck = document.getElementById("ckbf");
		const cxl = document.getElementById("cxl");
		if (dbz.test(diz)) {
			daz.style.display = "block";
			dck.style.display = "block";
		} else if (dcn.test(dzz)) {
			cxl.style.display = "none";
			daz.style.display = "block";
			daz.innerText = "#开始搜索#";
		} else {
			cxl.style.display = "table";
			daz.style.display = "none";
			dck.style.display = "none";
			daz.innerText = "#开始播放#";
		}
	} else if (a === 1) {
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
		if (dcn.test(dzz)) {
			document.getElementById("url").value = dzz;
			window.open("https://movie.heheda.top/so.php?wd=" + dzz, '_blank');
		} else {
			document.getElementById("url").value = diz;
			document.getElementById("player").src = jkv + diz;
		}
		music.pause();
		music.currentTime = 0;
		music.play();
	} else if (a === 2) {
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
		music.pause();
		music.currentTime = 0;
		music.play();
	}
}
//赞赏码
const othbta = () => {
	xtip.open({
		type: 'h',
		width: ismobile ? '300px' : '500px',
		height: ismobile ? '300px' : '500px',
		content: '<img alt="赞赏码" src="./image/zsm.jpg" style="width: 100%;height: auto;"/>',
		over: false,
		shadeClose: false,
		end: () => {
			music.pause();
			music.currentTime = 0;
			music.play();
		},
	});
}
//弹出赞赏码
setTimeout("othbta()", 500);
//分享功能
const othbts = () => {
	navigator.share({
		title: title,
		url: window.location.href,
		text: '全网视频免费看，宅男必备！'
	});
}
// 下载APP
const dapp = () => {
	xtip.open({
		type: 'h',
		width: ismobile ? '90%' : '55%',
		height: '120px',
		content: '<div style="padding:5px"><button type="button" onclick="othbut(30)" class="btn btn-success btn-lg btn-block">#安卓版本#</button><button type="button" onclick="xzapp-ios()" class="btn btn-success btn-lg btn-block" disabled>#IOS版本#</button></div>',
		title: false,
		over: false,
	});
}
// 通知
const sendNotification = () => {
	new Notification(title, {
		body: '久违了我的朋友，欢迎您的访问！全网视频免费看，宅男必备，喜欢别忘了收藏！',
		icon: './icons/128x128.png'
	})
}
if ("Notification" in window) {
	if (window.Notification.permission == "granted") {
		sendNotification();
	} else if (window.Notification.permission != "denied") {
		window.Notification.requestPermission((permission) => {
			sendNotification();
		});
	}
}
// 网站标题自动判断
window.addEventListener('visibilitychange', () => {
	if (document.hidden) {
		//窗口不可见
		document.title = '(つ ェ ⊂)我藏好了哦~';
	} else {
		//窗口可见
		document.title = '(*゜ロ゜)ノ被发现了~';
		setTimeout(() => {
			document.title = title;
		}, 3000);
	};
});
//返回顶部
const cdTop = () => {
	window.scrollY = 0;
	window.pageYOffset = 0;
	document.documentElement.scrollTop = 0;
};
// 监听屏幕滚动
window.addEventListener('scroll', () => {
	if (timeout !== null) {
		clearTimeout(timeout);
	}
	timeout = setTimeout(() => {
		let scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
		// 返回顶部
		if (scrollTop > 100) {
			cdtopbt.className = "cdtopVis";
		} else {
			cdtopbt.className = "cdtopHid";
		};
		if (scrollTop > 400) {
			cla.classList.add("player-fix");
		} else {
			cla.classList.remove("player-fix");
		};
	}, 500);
});
// 版权信息
console.log("%c赵彤刚%c版权所有", "font-size:15px;padding:3px;color:white;background:#023047",
	"font-size:15px;padding:3px;color:white;background:#219EBC");
console.log("%c本人寻求一份前端开发的工作，有意者请联系%c\n%cTEL:15327682114%c\n%c微信:16699352957",
	"font-size:15px;padding:3px;color:white;background:#023047", "",
	"font-size:15px;padding:3px;color:white;background:#219EBC", "",
	"font-size:15px;padding:3px;color:white;background:#219EBC");