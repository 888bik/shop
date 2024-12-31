<template>
    <div class="nav-bar">
        <div class="left" @click="goBack">
            <slot name="left">
                <i class="el-icon-arr-left"></i>
            </slot>
        </div>
    </div>
    <div class="center">
        <slot name="center">
        </slot>
    </div>
    <div class="right">
        <slot name="right">
        </slot>
    </div>

</template>

<script>
import { reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
export default {
    setup() {
        const state = reactive({
            count: 0
        });
        const router = useRouter();
        const goBack = () => {
            router.go(-1)
        }
        return {
            ...toRefs(state),
            goBack
        }
    }
}
</script>

<style lang="less" scoped>
@import './NavBar.less';
.nav-bar {
    background-color: #42b983;
    color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
    height: 45px;
    line-height: 45px;
    box-shadow: 0 5px 5px rgba(100, 100, 100, 0.2);
    display: flex;
    .left,.right{
        width: 60px;
    }
    .center{
        flex: 1;
    }
}
</style>