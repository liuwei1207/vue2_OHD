<template>
    <div id="bd">
        局域网设置
    </div>
</template>
<script type="text/javascript">


export default {
    data() {
            return {
                activeName: 'first'
            }
        },
        methods: {
            handleClick(tab, event) {
                // console.log(tab, event);
            }
        },
        components: {

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
