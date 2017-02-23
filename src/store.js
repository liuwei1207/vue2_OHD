import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        logined: false, // 登陆状态
        socket: io('http://192.168.1.223:3000'), // web socket server
        tips: "", // 提示消息
        tipShow: false, // 是否显示提示消息
        user: { name: '', logo: '', id: 0 }, // 用户信息
        _DATA_: { // 页面数据
            'networkOptions': {
                "NODE": {
                    "FrameType": "00",
                    "NetSelect": "LAN",
                    "LAN": {
                        "Mode": "dhcp",
                        "DHCP": {
                            "IP": "192.168.1.222",
                            "NetMask": "255.255.255.0",
                            "Gateway": "192.168.1.1",
                            "MAC": "DC:07:C1:00:DB:01"
                        },
                        "Static": {
                            "IP": "192.168.1.221",
                            "NetMask": "255.255.255.0",
                            "Gateway": "192.168.1.1",
                            "MAC": "DC:07:C1:00:DB:01"
                        }
                    },
                    "WIFI": {
                        "Mode": "dhcp",
                        "SSID": "ZHIHEANJIE",
                        "Passwd": "66806088",
                        "DHCP": {
                            "IP": "192.168.10.220",
                            "NetMask": "255.255.255.0",
                            "Gateway": "192.168.10.1",
                            "MAC": "DC:07:C1:00:DB:01"
                        },
                        "Static": {
                            "IP": "192.168.10.221",
                            "NetMask": "255.255.255.0",
                            "Gateway": "192.168.10.1",
                            "MAC": "DC:07:C1:00:DB:01"
                        }
                    },
                    "LTE": {
                        "LTEStr": "3",
                        "LTESta": "0",
                        "IP": "10.17.76.87",
                        "ComCorporation": "0",
                        "Union": "LTE-FDD",
                        "PhoneNum": "18611702344"
                    }
                }
            }
        },
    },
    mutations: {
        set_DATA_: function(state, value) {
            state._DATA_ = value;
        }
    },
});

export default store;
