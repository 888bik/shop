<template>
    <nav-bar>
        <template v-slot:default>商品分类</template>
    </nav-bar>
    <div class="category-list">
        <ul>
            <li v-for="(item, index) in categoryList" :key="item.id">
                <img :src="item.imgUrl" alt=""/>
                <span>{{ item.title }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import NavBar from '../../components/common/navbar/NavBar.vue';

export default {
    name: 'Category',
    components: {
        NavBar
    },
    setup() {
        const categoryList = ref([]);

        const fetchData = async () => {
            try {
                const res = await axios.get('/api/index');
                if (res.data && res.data.code === 0) {
                    categoryList.value = res.data.data.categoryList;
                } else {
                    console.error('API 请求失败:', res.data);
                }
            } catch (error) {
                console.error('请求过程中出现错误:', error);
            }
        };

        onMounted(() => {
            fetchData();
        });

        return {
            categoryList
        };
    }
};
</script>

<style scoped>
.category-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* 使列表靠左对齐 */
    margin: 0;
    padding: 0;
}

.category-list ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.category-list li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.category-list img {
    width: 30px; /* 调整图标的宽度 */
    height: 30px; /* 调整图标的高度 */
    margin-right: 10px; /* 图标和文本之间的间距 */
}
</style>