<template>
    <div id="formLan">
        <div class="el-row">
            <div class="el-col el-col-12 el-left">
                <el-form label-width="100px" class="formLan_auto" ref="formLan_auto">
                    <el-card class="box-card">
                        <el-radio class="radio" label="auto">自动获取IP地址</el-radio>
                        <el-form-item label="IP地址">
                            <p>{{LAN.DHCP.IP}}</p>
                        </el-form-item>
                        <el-form-item label="子网掩码">
                            <p>{{LAN.DHCP.NetMask}}</p>
                        </el-form-item>
                        <el-form-item label="默认网关">
                            <p>{{LAN.DHCP.Gateway}}</p>
                        </el-form-item>
                        <el-form-item label="Mac地址">
                            <p>{{LAN.DHCP.MAC}}</p>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary">刷新</el-button>
                        </el-form-item>
                    </el-card>
                </el-form>
            </div>
            <div class="el-col el-col-12 el-right">
                <el-form label-width="100px" class="formLan_manual">
                    <el-card class="box-card">
                        <el-radio class="radio" label="manual">手动设置IP地址</el-radio>
                        <el-form-item label="IP地址">
                            <el-input :value="LAN.Static.IP"></el-input>
                        </el-form-item>
                        <el-form-item label="子网掩码">
                            <el-input :value="LAN.Static.NetMask"></el-input>
                        </el-form-item>
                        <el-form-item label="默认网关">
                            <el-input :value="LAN.Static.Gateway"></el-input>
                        </el-form-item>
                        <el-form-item label="Mac地址">
                            <el-input :disabled="true" :value="LAN.Static.MAC"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary">保存</el-button>
                            <el-button>重置</el-button>
                        </el-form-item>
                    </el-card>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    data() {
            return {

            }
        },
        components: {

        },
        props: ['LAN'],
        methods: {

        }
};
</script>
<style>
.el-left {
    padding-right: 15px;
}

.el-right {
    padding-left: 15px;
}

.radio {
    margin-bottom: 15px;
}
</style>
