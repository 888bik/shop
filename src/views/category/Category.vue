<template>
    分类
    <nav-bar>
        <template v-slot:default>商品分类</template>
    </nav-bar>
</template>

<script>
import { reactive , toRefs } from 'vue';
import NavBar from '../../components/common/navbar/NavBar.vue'
export default {
    name: 'Home',
    components: {
        NavBar
    },
    setup() {
        const state = reactive({
            count: 0
        });
        return {
            ...toRefs(state)
        }
    }
}
</script>