import API_ajax from './base/get'

export default {
	getGoodsList: function(url,callback,data) {
		API_ajax.getJson(url,callback,data,'get');
	}
}
