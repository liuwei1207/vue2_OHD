<template>
    <!-- 页面头部 -->
    <div id="hd">
        <div class="inner">
            <div class="mod-head clearfix">
                <h1 id="logo"><router-link to="/"><img src="../assets/images/logo.png" height="44" width="134" alt="小米路由器"></router-link></h1>
                <div id="nav">
                    <ul>
                        <li :class="{'active': '/state' === '/'+$route.path.split('/')[1]}">
                            <router-link to="/state" disable>路由状态</router-link>
                        </li>
                        <li :class="{'active': '/setting' === '/'+$route.path.split('/')[1]}">
                            <router-link to="/setting">常用设置</router-link>
                        </li>
                        <li :class="{'active': '/prosetting' === '/'+$route.path.split('/')[1]}">
                            <router-link to="/prosetting">高级设置</router-link>
                        </li>
                    </ul>
                </div>
                <div id="userbar">
                    <span id="sysmenu" class="name s-dropdown">szwsd (公司)</span>
                    <span id="sysnotice" class="ico-notice"></span>
                </div>
            </div>
        </div>
    </div>
    <!-- /页面头部 -->
</template>
<script type="text/javascript">
export default {
    data() {
        return {

        }
    }
}
</script>
<style>
#hd {
    position: relative;
    z-index: 1;
}

#hd .inner {
    width: 1160px;
    margin: auto;
}

.mod-head {
    position: relative;
    height: 52px;
}

#logo {
    position: absolute;
    left: 0;
    bottom: -10px;
    margin: 0;
}

#logo img {
    display: block;
}

#nav {
    position: absolute;
    left: 210px;
    bottom: -2px;
}

#nav .active a {
    opacity: 1;
}

#userbar {
    position: absolute;
    right: 0;
    bottom: -2px;
    color: #fff;
    font-size: 14px;
    line-height: 1.2;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
}

#nav .active {
    font-weight: bold;
}

#nav ul {
    margin: 0;
}

#nav li {
    float: left;
    margin-right: 60px;
    list-style: none;
}

#nav li a {
    opacity: .5;
    filter: alpha(opacity=50);
    color: #fff;
    text-decoration: none;
    float: left;
    font-size: 18px;
    line-height: 1.2;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
}

#userbar {
    position: absolute;
    right: 0;
    bottom: -2px;
    color: #fff;
    font-size: 14px;
    line-height: 1.2;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
}
</style>
