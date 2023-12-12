/**
 * PGS 20181220
 * PGS 20210722 修改
 */
//base data
var dataList = [{ id: 1, channel_id: 1, alias: '测试h265', sn: 'Ub0000000000359991EM', tabId: 1 },
	{ id: 2, channel_id: 1, alias: '测试h264', sn: 'Ub0000000000037402EA', tabId: 1 },
	// { id: 3, channel_id: 3, alias: '一期中控室', sn: 'Ub35T80YF189000058AB', tabId: 1 },
	// { id: 4, channel_id: 4, alias: '中控门口云台', sn: 'Ub35T80YF189000058AB', tabId: 0 },
	// { id: 5, channel_id: 5, alias: '2号大门行道', sn: 'Ub35T80YF189000058AB', tabId: 0 },
	// { id: 6, channel_id: 6, alias: '3号出入口', sn: 'Ub35T80YF189000058AB', tabId: 0 },
	// { id: 7, channel_id: 7, alias: '1号后门岗', sn: 'Ub35T80YF189000058AB', tabId: 0 },
	// { id: 8, channel_id: 8, alias: '1号南边人行道1', sn: 'Ub35T80YF189000058AB', tabId: 0 },
	// { id: 9, channel_id: 9, alias: '1号南边人行道2', sn: 'Ub35T80YF189000058AB', tabId: 0 },
	// { id: 10, channel_id: 10, alias: '1号西边人行道3', sn: 'Ub35T80YF189000058AB', tabId: 0 },
	// { id: 11, channel_id: 11, alias: '1号北边人行道4', sn: 'Ub35T80YF189000058AB', tabId: 0 },
	// { id: 12, channel_id: 12, alias: '物业服务中心', sn: 'Ub35T80YF189000058AB', tabId: 0 },
	// { id: 13, channel_id: 13, alias: '2号右侧大门岗', sn: 'Ub35T80YF189000058AB', tabId: 0 },
	// { id: 14, channel_id: 14, alias: '2号左侧大门岗', sn: 'Ub35T80YF189000058AB', tabId: 0 },
	// { id: 15, channel_id: 15, alias: '规划路2', sn: 'Ub35T80YF189000058AB', tabId: 0 },
	// { id: 16, channel_id: 16, alias: '五合院B岗', sn: 'Ub35T80YF189000058AB', tabId: 0 },
	// { id: 17, channel_id: 17, alias: '五合院通道1', sn: 'Ub35T80YF189000058AB', tabId: 0 },
	// { id: 18, channel_id: 18, alias: '五合院通道11', sn: 'Ub35T80YF189000058AB', tabId: 0 },
	// { id: 19, channel_id: 19, alias: '通道13', sn: 'Ub35T80YF189000058AB', tabId: 0 },
	// { id: 20, channel_id: 1, alias: '16出入口', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 21, channel_id: 2, alias: '16号主出入口', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 22, channel_id: 3, alias: '5号出入口', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 23, channel_id: 4, alias: '16号通道', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 24, channel_id: 5, alias: '17号通道', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 25, channel_id: 6, alias: '17号出入口', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 26, channel_id: 7, alias: '云台', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 27, channel_id: 8, alias: '4号通道', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 28, channel_id: 9, alias: '5号通道1', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 29, channel_id: 10, alias: '5号通道2', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 30, channel_id: 11, alias: '6号通道1', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 31, channel_id: 12, alias: '6号通道2', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 32, channel_id: 13, alias: '7号通道1', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 33, channel_id: 14, alias: '7号通道2', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 34, channel_id: 15, alias: '7号6号出入口', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 35, channel_id: 16, alias: '泳池', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 36, channel_id: 17, alias: '泳池入口', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 37, channel_id: 18, alias: '三期云台', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 38, channel_id: 19, alias: '三期中庭云台', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 39, channel_id: 20, alias: '二期大门外', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 40, channel_id: 21, alias: '二期主消防通道', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 41, channel_id: 22, alias: '靠16号消防通道', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 42, channel_id: 23, alias: '靠18号后面消防通道', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 43, channel_id: 24, alias: '靠18号消防通道', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 44, channel_id: 25, alias: '靠水池消防通道', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 45, channel_id: 26, alias: '靠水池和26号通道', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 46, channel_id: 27, alias: '靠26号左侧消防通道', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 47, channel_id: 28, alias: '靠园亭消防通道', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 48, channel_id: 29, alias: '靠24号消防通道', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 49, channel_id: 30, alias: '三期大门主出入口', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 50, channel_id: 31, alias: '三期大门主道', sn: 'Ub35T80YF187000146ZS', tabId: 0 },
	// { id: 51, channel_id: 1, alias: '三期地库出入口道闸', sn: 'Ub35T80VF188000019VN', tabId: 0 },
	// { id: 52, channel_id: 2, alias: '三期地库出入口入库', sn: 'Ub35T80VF188000019VN', tabId: 0 },
	// { id: 53, channel_id: 3, alias: '二期车库岗', sn: 'Ub35T80VF188000019VN', tabId: 1 },
	// { id: 54, channel_id: 4, alias: '中控室', sn: 'Ub35T80VF188000019VN', tabId: 1 },
	// { id: 55, channel_id: 5, alias: '3期大门岗', sn: 'Ub35T80VF188000019VN', tabId: 1 },
	// { id: 56, channel_id: 6, alias: '3期车库岗', sn: 'Ub35T80VF188000019VN', tabId: 1 },
	// { id: 57, channel_id: 7, alias: '二期大门岗亭', sn: 'Ub35T80VF188000019VN', tabId: 1 },
];

var ComFn = {
	compare: function(pro) {
		return function(obj1, obj2) {
			var val1 = obj1[pro];
			var val2 = obj2[pro];
			if (val1 > val2) {
				return 1;
			} else if (val1 < val2) {
				return -1;
			} else {
				return 0;
			}
		}
	}
};
// Array.prototype.filter = Array.prototype.filter || function(func) {
// 	var arr = this;
// 	var r = [];
// 	for (var i = 0; i < arr.length; i++) {
// 		if (func(arr[i], i, arr)) {
// 			r.push(arr[i]);
// 		}
// 	}
// 	return r;
// }

//获取url参数
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}

//请求数据
function ajaxFn(type, url, data, callback) {
	$.ajax({
		url: url,
		type: type || 'POST',
		data: data,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		dataType: "json",
		success: function(res) {
			return callback(res);
		},
		error: function(message) {
			console.log(message);
		}
	});
}
