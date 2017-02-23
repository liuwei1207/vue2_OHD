<template>
    <div class="doc">
        <siteHeader></siteHeader>
        <router-view></router-view>
    </div>
</template>
<script type="text/javascript">
import siteHeader from './components/site_header.vue';
import {
    mapState
} from 'vuex';

export default {
    data() {
            return {

            }
        },
        components: {
            siteHeader
        },
        computed: {
            ...mapState([
                'socket'
            ])
        },
        created: function() {
            this.socket.on('all_Data_', function(data) {
                this.$store.commit('set_DATA_', {
                    'networkOptions': data
                });
            }.bind(this));
        }
}
</script>
<style lang="less">
@import './assets/styles/reset.less'; //css reset；
</style>
