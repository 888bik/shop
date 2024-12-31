<template>
    <nav-bar>
        <template v-slot:default>网上商城</template>
    </nav-bar>
</template>

<script>
import { reactive , toRefs } from 'vue';
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
    components: {
        NavBar
    },
}
</script>