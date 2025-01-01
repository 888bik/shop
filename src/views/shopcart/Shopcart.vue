<template>
    购物车
    <nav-bar>
        <template v-slot:default>购物车</template>
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
