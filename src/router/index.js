import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import StatePage from '../views/State/index.vue';
import SettingPage from '../views/Setting/index.vue';
import ProSettingPage from '../views/ProSetting/index.vue';
import NotFoundPage from '../views/NotFound/index.vue';

import SettingWifiPage from '../views/Setting/components/index.wifi.vue';
import SettingLanPage from '../views/Setting/components/index.lan.vue';
import SettingWanPage from '../views/Setting/components/index.wan.vue';
import SettingSafePage from '../views/Setting/components/index.safe.vue';
import SettingUpgradePage from '../views/Setting/components/index.upgrade.vue';

export default new Router({
    routes: [{
        path: '/',
        component: StatePage
    }, {
        path: '/state',
        component: StatePage
    }, {
        // router: /setting
        path: '/setting',
        component: SettingPage,
        redirect: '/setting/wifi',

        // 次级路径
        children: [{
            // router: /setting/wifi
            path: 'wifi',
            component: SettingWifiPage
        }, {
            // router: /setting/wan
            path: 'wan',
            component: SettingWanPage
        }, {
            // router: /setting/safe
            path: 'safe',
            component: SettingSafePage
        }, {
            // router: /setting/lan
            path: 'lan',
            component: SettingLanPage
        }, {
            // router: /setting/upgrade
            path: 'upgrade',
            component: SettingUpgradePage
        }]
    }, {
        path: '/prosetting',
        component: ProSettingPage
    }, {
        path: '*',
        component: NotFoundPage
    }]
})
