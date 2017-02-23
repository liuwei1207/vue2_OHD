<template>
    <div id="form3g">
        <div class="el-row">
            <el-form label-width="100px" class="formWifi_auto">
                <el-card class="box-card">
                    <el-form-item label="网络状态">
                        <div id="light" :data-level="LTE.LTEStr">
                            <i class="first"></i>
                            <i class="second"></i>
                            <i class="third"></i>
                            <i class="fouth"></i>
                        </div>
                        <span>{{LTE.Union}}</span>
                    </el-form-item>
                    <el-form-item label="本机号码" prop="subnetMask_wifi_auto">
                         <p>{{LTE.PhoneNum}}</p>
                    </el-form-item>
                    <el-form-item label="本机地址" prop="defaultGateway_wifi_auto">
                        <p>{{LTE.IP}}</p>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">刷新</el-button>
                    </el-form-item>
                </el-card>
            </el-form>
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
        props: ['LTE'],
        methods: {

        }
};
</script>
<style>
/* 信号强度灯 */

#light i {
    display: inline-block;
    width: 16px;
    height: 16px;
    -moz-border-radius: 16px;
    -webkit-border-radius: 16px;
    border-radius: 50px;
}

#light[data-level='0'] i {
    border: 1px solid #197ed9;
}

#light[data-level='1'] .first {
    border: 1px solid #ff4949;
    background: #ff4949;
}

#light[data-level='2'] .first,
#light[data-level='2'] .second {
    border: 1px solid #dc6730;
    background: #dc6730;
}

#light[data-level='3'] .first,
#light[data-level='3'] .second,
#light[data-level='3'] .third {
    border: 1px solid #f7ba2a;
    background: #f7ba2a;
}

#light[data-level='4'] .first,
#light[data-level='4'] .second,
#light[data-level='4'] .third,
#light[data-level='4'] .fouth {
    border: 1px solid #13ce66;
    background: #13ce66;
}


/* /信号强度灯 */
</style>
