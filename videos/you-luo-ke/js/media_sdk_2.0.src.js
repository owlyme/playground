var UluMedia = function () {
	function EventEmiter() {
		this._listeners = {};
		this.on = function (type, listener) {
			if (typeof (type) == 'string') {
				var listeners = this._listeners[type];
				if (!listeners) listeners = this._listeners[type] = [];
				listeners.push(listener);
			} else if (type.length) {
				for (var i in type) {
					var t = type[i];
					if (t) {
						var listeners = this._listeners[t];
						if (!listeners) listeners = this._listeners[t] = [];
						listeners.push(listener);
					}
				}
			}
		};
		this.removeEventListener = function (type, listener) {
			var listeners = this._listeners[type];
			if (!listeners || !listeners.length) return;
			for (var i in listeners) {
				if (listeners[i] == listener) {
					listeners.splice(i, 1);
					if (!listeners.length) delete this._listeners[type];
					break;
				}
			}
		}
		this.clearEventListener = function (type) {
			if (type) {
				delete this._listeners[type];
			} else {
				this._listeners = {};
			}
		}
		this.dispatch = function (type, data, param) {
			var listeners = this._listeners[type];
			if (!listeners || !listeners.length) return;
			var event = {
				type: type,
				data: typeof (data) == 'Function' ? data() : data,
				param: param
			}
			for (var i in listeners) {
				setTimeout(function () {
					listeners[i].call(null, event);
				}, 0)
			}
		}
	}
	var _domain = 'playpage.live.ulucu.com';

	function BizControl() {
		EventEmiter.call(this);
		var _self = this;
		_self.event = {
			Request_Error: 'Request_Error',
			Media_URL_Fail: 'Media_URL_Fail',
			Media_URL_OK: 'PlayURL_OK',
			CustomerId_Fail: 'CustomerId_Fail',
			CustomerId_OK: 'CustomerId_OK',
			Token_Fail: 'Token_Fail',
			Server_Error: 'Server_Error'
		};
		var _hartInterval = undefined;
		var _hartIntervelTime = 1000 * 20;
		var _maxReCheckUrlCount = 20;
		var _checkUrlIntervalTime = 1000;
		var _mediaURLParam;
		var _url = {
			weburl: '//' + _domain + '/api/open/h/KeNcI/auth/weburl',
			media_check: '//' + _domain + '/api/open/h/KeNeI/auth/media_check',
			customer_id: '//' + _domain + '/api/open/h/KeNdI/auth/customer_id',
			media_heartbeat: '//' + _domain + '/api/open/h/KeNfI/auth/media_heartbeat'
		};
		var _api = {
			ajax: function (url, method, param, callback) {
				reqwest({
					method: method || 'GET',
					url: url + '?av=1&r=' + new Date().getTime(),
					data: param,
					type: 'json',
					crossOrigin: true,
					withCredentials: false,
					timeout: 1000 * 20,
					success: function (res) {
						if (res && res.code != 0) {
							if (res.code == 30010 || res.code == 30011) {
								_self.dispatch(_self.event.Token_Fail, res, param);
								return false;
							}
						}
						callback && callback(res);
					},
					error: function (err) {
						_self.dispatch(_self.event.Request_Error, err, param);
						return false;
					}
				})
			},
			getPlayURL: function (param, callback) {
				_api.ajax(_url.weburl, 'GET', param, callback);
			},
			getPlayURLStatus: function (param, callback) {
				_api.ajax(_url.media_check, 'GET', param, callback);
			},
			getCustomerId: function (param, callback) {
				_api.ajax(_url.customer_id, 'GET', param, callback);
			},
			hartJump: function (param, callback) {
				_api.ajax(_url.media_heartbeat, 'GET', param, callback);
			}
		};

		_self.startHartJump = function (hartParam) {
			if (!_hartInterval) {
				//var param={
				//    access_token:hartParam.access_token,
				//    type:hartParam.isLive?1:2,
				//    play_type:hartParam.media_type_x,
				//    source:'{sn}-{channel}-{rate}'.format(hartParam)
				//};
				_hartInterval = setInterval(function () {
					_api.hartJump(hartParam, function (ret) {
						if (ret && ret.code == 10004) {
							_self.stopHartJump();
							if (_mediaURLParam) {
								_self.getPlayURL(_mediaURLParam.access_token, _mediaURLParam.device_id, _mediaURLParam.channel_idx, _mediaURLParam.rate,
									_mediaURLParam.play_type, hartParam.type == 1 ? true : false)
							}
						} else if (ret.code != 0) {
							_self.dispatch(_self.event.Server_Error, ret, hartParam);
						}
					})
				}, _hartIntervelTime)
			}
		};
		_self.stopHartJump = function () {
			clearTimeout(_hartInterval);
			_hartInterval = undefined;
		},
			_self.getPlayUrlStatus = function (accessToken, play_url, hartParam) {
				var param = {
					access_token: accessToken,
					play_url: play_url //encodeURIComponent(play_url),
				};
				var count = 0;
				var cb = function (ret) {
					count++;
					if (ret && ret.code == 0) {
						if (ret.data.result == 1) {
							_self.dispatch(_self.event.Media_URL_OK, play_url, param);
							_self.startHartJump(hartParam);
						} else if (ret.data.result == 2) {
							if (count <= _maxReCheckUrlCount) {
								setTimeout(function () {
									_api.getPlayURLStatus(param, cb);
								}, _checkUrlIntervalTime);
							} else {
								_self.dispatch(_self.event.Media_URL_Fail, play_url, param);
							}
						} else {
							_self.dispatch(_self.event.Media_URL_Fail, play_url, param);
						}
					} else {
						_self.dispatch(_self.event.Server_Error, ret, param);
						_api.getPlayURLStatus(param, cb);
					}
				};
				_api.getPlayURLStatus(param, cb);
			};
		_self.getPlayURL = function (accessToken, sn, channel, rate, playType, isLive, callback) {
			var param = {
				device_id: sn,
				access_token: accessToken,
				channel_idx: channel,
				rate: rate,
				play_type: playType
			}
			_mediaURLParam = param;
			_api.getPlayURL(param, function (ret) {
				if (ret && ret.code == 0) {
					var play_url = ret.data.play_url;
					if (ret.data && play_url) {
						var okparam = {
							access_token: param.access_token,
							play_url: play_url
						};
						var hartParam = {
							access_token: param.access_token,
							type: isLive ? 1 : 2,
							play_type: param.play_type,
							source: param.device_id + '-' + param.channel_idx + '-' + param.rate
						};
						// _self.getPlayUrlStatus(accessToken,play_url,hartParam);
						_self.dispatch(_self.event.Media_URL_OK, play_url, okparam);
						callback && callback(okparam);
						_self.startHartJump(hartParam);
					} else {
						_self.dispatch(_self.event.PlayURL_Fail, '', param);
					}
				} else {
					_self.dispatch(_self.event.Server_Error, ret, param);
				}
			});
		};
		_self.getCustomerId = function (accessToken, sn) {
			var param = {
				sn: sn,
				access_token: accessToken
			};
			_api.getCustomerId(param, function (ret) {
				if (ret && ret.code == 0) {
					_self.dispatch(_self.event.CustomerId_OK, ret.data.customer_id, param);
				} else {
					_self.dispatch(_self.event.CustomerId_Fail, '', param);
				}
			})
		};
	}

	function frame() {
		EventEmiter.call(this);
		var _self = this;
		var _opt, _media_url;
		var _biz = new BizControl();
		_self.event = {
			Auth_Fail: 'Auth_Fail',
			Media_URL_Fail: 'Media_URL_Fail',
			Media_URL_OK: 'Media_URL_OK',
			Custom_AD_Fail: 'Custom_AD_Fail',
			Custom_AD_OK: 'Custom_AD_OK',
			Media_URL_Change: 'Media_URL_Change',
			Server_Error: 'Server_Error',
			Request_Error: 'Request_Error'
		};
		var _createOption = function (option) {
			var opt = {
				access_token: option.access_token,
				sn: option.sn,
				isLive: true,
				channel: option.channel || 1,
				rate: option.rate || 700,
				media_type: option.media_type || 'hls'
			};
			if (window.location.protocol == 'https:') {
				opt.ssl = true;
				opt.media_type_x = 's_' + opt.media_type;
			} else {
				opt.ssl = false;
				opt.media_type_x = opt.media_type;
			}
			return opt;
		};
		_biz.on(_biz.event.Token_Fail, function (e) {
			_self.dispatch(_self.event.Auth_Fail, { access_token: _opt.access_token });
			return _self;
		});
		_biz.on(_biz.event.Server_Error, function (e) {
			_self.dispatch(_self.event.Server_Error, { err: e.data });
			return _self;
		});
		_biz.on(_biz.event.Request_Error, function (e) {
			_self.dispatch(_self.event.Request_Error, { err: e.data });
			return _self;
		});
		_biz.on(_biz.event.Media_URL_OK, function (e) {
			if (!_media_url) {
				_media_url = e.data;
				_self.dispatch(_self.event.Media_URL_OK, { media_url: _media_url });
			} else if (_media_url != e.data) {
				_media_url = e.data;
				_self.dispatch(_self.event.Media_URL_Change, { media_url: _media_url });
			}
			return _self;
		});
		_biz.on(_biz.event.Media_URL_Fail, function (e) {
			_media_url = '';
			_self.dispatch(_self.event.Media_URL_Fail, { media_url: e.data });
			return _self;
		});
		_biz.on(_biz.event.CustomerId_Fail, function (e) {
			_self.dispatch(_self.event.Custom_AD_Fail, { def_ad_url: '//' + _domain + '/ad/ulucu_AD.gif' });
			return _self;
		});
		_biz.on(_biz.event.CustomerId_OK, function (e) {
			_self.dispatch(_self.event.Custom_AD_OK, {
				custom_ad_url: '//' + _domain + '/ad/ulucu_AD_' + e.data + '.gif', def_ad_url: '//' + _domain +
					'/ad/ulucu_AD.gif'
			});
			return _self;
		});
		_self.load = function (option, callback) {
			if (typeof option != 'object' || !option.access_token || !option.sn) {
				throw new Error('access_token and sn must be required');
				return _self;
			}
			_opt = _createOption(option);
			_media_url = '';
			// _biz.getCustomerId(_opt.access_token,_opt.sn);
			_biz.getPlayURL(_opt.access_token, _opt.sn, _opt.channel, _opt.rate, _opt.media_type_x, _opt.isLive, callback);
			return _self;
		};
		_self.play = function (option, errorback) {
			var mds = Object.assign({
				type: 'flv',
				isLive: true,
				//hasAudio: false,
				url: _media_url
			}, option);
			//option.old=true时为回放
			var flvPlayer = flvjs.createPlayer(mds, {
				isLive: true,
				enableCheckAndDoSeek: !option.old,
				fixAudioTimestampGap: !option.old,
				wasmPlayerFirst: false
			});
			flvPlayer.on_message(function(e) { 
				errorback && errorback(e);
			});
	
			flvPlayer.play(option.obj);	
			return flvPlayer;			
		};
		_self.destroy = function (flvPlayer) {
			if (!flvPlayer) return;
			flvPlayer.stop();
			flvPlayer.destroy();
            flvPlayer = null;
			_biz.stopHartJump();
		};
	}
	return new frame();
}
