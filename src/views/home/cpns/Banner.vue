<template>
  <div class="swipe">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in props.recommendData" :key="index">
        <img :src="getAssetUrl(item.image)" class="swipe-image" />
      </van-swipe-item>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
import getAssetUrl from "@/utils/load_assets";
const props = defineProps({
  recommendData: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped>
.swipe-image {
  margin-top: 45px;
  width: 100%;
  /* height: 100%; */
  height: 35vh;
  object-fit: contain;
}

.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
</style>
