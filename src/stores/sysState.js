import { observable, action } from 'mobx';
import { axios } from 'axios';


export default class SysState {
  @observable user = {
    isLogin: false,
    menus: [{
			"order": 5,
			"extra": "laptop",
			"name": "Dashboard",
			"children": [],
			"url": "/admin/data",
			"key": "menu1"
		}, {
			"order": 10,
			"extra": "schedule",
			"name": "任务管理",
			"children": [{
				"order": 5,
				"extra": "",
				"name": "任务列表",
				"children": [],
				"url": "/admin/data/dataManage",
				"key": "item4"
			}, {
				"order": 10,
				"extra": "",
				"name": "运行记录",
				"children": [],
				"url": "/mtc/list",
				"key": "item5"
			}, {
				"order": 15,
				"extra": "",
				"name": "手动触发日志",
				"children": [],
				"url": "/trigger/list",
				"key": "item8"
			}, {
				"order": 20,
				"extra": "",
				"name": "操作日志",
				"children": [],
				"url": "/operate/list",
				"key": "item13"
			}],
			"url": "",
			"key": "menu3"
		}, {
			"order": 15,
			"extra": "fork",
			"name": "任务流管理",
			"children": [{
				"order": 5,
				"extra": "",
				"name": "任务流列表",
				"children": [],
				"url": "/collection/list",
				"key": "item6"
			}],
			"url": "",
			"key": "menu4"
		}],
  }

  @action login({loginEmail, password}) {
    return new Promise((resolve, reject) => {
      axios.post('/userReq/doLogin', {
        loginEmail,
        password
      }).then((res) => {
        if (res.status === 200 && res.data.status === 'success') {
          this.user.isLogin = true;
          this.user.menus = res.data.menus;
          resolve();
        } else {
          reject();
        }
      })
    })
  }
}