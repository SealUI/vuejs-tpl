import axios from 'axios'
import config from './config'

class API {
	post (param) {
		config.data = param.params;
		config.withCredentials = param.withCredentials == false ?  false : true;
		return axios.post(param.url,{},config);
	}
	get (param) {
		config.params = param.params ? param.params : '';
		return axios.get(param.url,config);
	}
}
export default API;
