<template>
    <nav-bar>
        <template v-slot:default>商品分类</template>
    </nav-bar>
    <div class="category-list">
        <ul>
            <li v-for="(item, index) in categoryList" :key="item.id">
                <img :src="item.imgUrl" :alt="item.title"/>
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
        const categoryList = ref([
            {
              id: 1,
              imgUrl: '/src/assets/image/category/推荐-反推荐.png', // 确保路径正确
              title: '推荐'
            },
            {
              id: 2,
              imgUrl: '/src/assets/image/category/电商彩妆家具电子产品.png',
              title: '电子产品'
            },
            {
              id: 3,
              imgUrl: '/src/assets/image/category/衣服,服装.png',
              title: '服装'
            },
            {
              id: 4,
              imgUrl: '/src/assets/image/category/回流区日用百货.png',
              title: '日用百货'
            },
            {
              id: 5,
              imgUrl: '/src/assets/image/category/手机.png',
              title: '手机'
            },
            {
              id: 6,
              imgUrl: '/src/assets/image/category/洗衣机.png',
              title: '家电'
            },
            {
              id: 7,
              imgUrl: '/src/assets/image/category/电脑.png',
              title: '电脑'
            },
            {
              id: 8,
              imgUrl: '/src/assets/image/category/汉堡.png',
              title: '食物'
            }
        ]);

        // 打印 categoryList 到控制台以调试
        onMounted(() => {
            console.log('Category List:', categoryList.value);
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