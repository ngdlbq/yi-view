export default {
	getJson: function(url,callback,data,type,async) {
		let  _async;
		if(async) {
			_async = false;
		} else {
			_async = true;
		}

		$.ajax({
			url: url,
			type: type || 'get',
			data: data,
			async: _async,
			dataType: 'json',
			success: function(data) {
				if(data) {
					callback(data)
				} else {
					alert('服务器繁忙，请重新再试');
				}
			}
		})
	},
	postObj: function(url,callback,data,type,async) {
		let  _async;
		if(async) {
			_async = false;
		} else {
			_async = true;
		}

		$.ajax({
			url: url,
			type: type || 'post',
			data: data,
			async: _async,
			dataType: 'json',
			success: function(data) {
				if(data) {
					callback(data)
				} else {
					alert('服务器繁忙，请重新再试');
				}
			}
		})
	}
}