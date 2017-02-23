<template>
    <div id="bd">
        <el-tabs>
            <el-tab-pane label="LAN" name="first">
                <formLan :LAN="networkOptions.LAN"></formLan>
            </el-tab-pane>
            <el-tab-pane label="WIFI" name="second">
                <formWifi :WIFI="networkOptions.WIFI"></formWifi>
            </el-tab-pane>
            <el-tab-pane label="LTE" name="third">
                <formLte :LTE="networkOptions.LTE"></formLte>
            </el-tab-pane>
            <el-tab-pane label="数据通信配置" name="fourth">
                {{networkOptions}}
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script type="text/javascript">
import formWifi from './index.wan.formWifi.vue';
import formLan from './index.wan.formLan.vue';
import formLte from './index.wan.formLte.vue';

export default {
    data() {
            return {
                activeName: 'first'
            }
        },
        components: {
            formWifi,
            formLan,
            formLte
        },
        methods: {
            handleClick(tab, event) {
                // console.log(tab, event);
            }
        },
        computed: {
            networkOptions() {
                return this.$store.state._DATA_.networkOptions.NODE
            }
        }
};
</script>
<style>
#bd {
    width: 1040px;
    padding: 10px 60px 30px 60px;
    margin: auto;
    background: #fff;
    border-radius: 10px;
}
</style>
