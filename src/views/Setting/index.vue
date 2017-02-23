<template>
    <div class="inner">
        <div class="mod-set-nav">
            <ul class="clearfix li-5">
                <li :class="{'active': '/setting/wifi' === $route.path}">
                    <router-link to="/setting/wifi">
                        <i class="ico ico-1"></i>
                        <span>Wi-Fi设置</span>
                    </router-link>
                </li>
                <li :class="{'active': '/setting/wan' === $route.path}">
                    <router-link to="/setting/wan">
                        <i class="ico ico-2"></i>
                        <span>网络配置</span>
                    </router-link>
                </li>
                <li :class="{'active': '/setting/safe' === $route.path}">
                    <router-link to="/setting/safe">
                        <i class="ico ico-3"></i>
                        <span>安全中心</span>
                    </router-link>
                </li>
                <li :class="{'active': '/setting/lan' === $route.path}">
                    <router-link to="/setting/lan">
                        <i class="ico ico-4"></i>
                        <span>局域网设置</span>
                    </router-link>
                </li>
                <li :class="{'active': '/setting/upgrade' === $route.path}">
                    <router-link to="/setting/upgrade">
                        <i class="ico ico-5"></i>
                        <span>系统状态</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<style>
.inner {
    width: 1160px;
    margin: auto;
}

.mod-set-nav {
    padding-top: 70px;
}

.mod-set-nav li {
    float: left;
    height: 127px;
    text-align: center;
    list-style: none;
}

.mod-set-nav li.active {
    background: url(../../assets/images/bg_nav_on.png) no-repeat center bottom;
}

.mod-set-nav .li-5 {
    margin-bottom: 0;
}

.mod-set-nav .li-5 li {
    width: 20%;
}

.mod-set-nav li a {
    display: inline-block;
    text-decoration: none;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
}

.mod-set-nav li a:hover span {
    color: #fff;
}

.mod-set-nav .ico {
    display: block;
    width: 70px;
    height: 70px;
    margin: auto;
    margin-bottom: 2px;
}

.mod-set-nav .ico-1 {
    background: url(../../assets/images/ico_nav_1.png) no-repeat;
}

.mod-set-nav .ico-2 {
    background: url(../../assets/images/ico_nav_2.png) no-repeat;
}

.mod-set-nav .ico-3 {
    background: url(../../assets/images/ico_nav_3.png) no-repeat;
}

.mod-set-nav .ico-4 {
    background: url(../../assets/images/ico_nav_4.png) no-repeat;
}

.mod-set-nav .ico-5 {
    background: url(../../assets/images/ico_nav_5.png) no-repeat;
}

.mod-set-nav li.active span {
    color: #fff;
}

.mod-set-nav li span {
    color: #aac0df;
}
</style>
